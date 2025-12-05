import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { UserRole, UserDocument } from "../users/schemas/user.schema";
import { JwtService } from "@nestjs/jwt";
import bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  private sanitize(user: UserDocument) {
    const obj = user.toObject();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (obj as any).password;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (obj as any).__v;
    return obj as {
      id: string;
      name: string;
      email: string;
      role: UserRole;
      createdAt: Date;
      updatedAt: Date;
    };
  }

  async register(dto: RegisterDto) {
    if (dto.role !== UserRole.Artist && dto.role !== UserRole.Customer) {
      throw new BadRequestException("invalid role");
    }

    const existing = await this.usersService.findByEmail(dto.email);
    if (!!existing) {
      throw new BadRequestException("email already exists");
    }

    const hashed = await bcrypt.hash(dto.password, 10);
    try {
      const created = await this.usersService.create({
        name: dto.name,
        email: dto.email,
        password: hashed,
        role: dto.role as UserRole,
      });
      return this.sanitize(created);
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyErr = err as any;
      if (anyErr?.code === 11000) {
        throw new BadRequestException("email already exists");
      }
      throw err;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException("invalid credentials");
    }

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) {
      throw new UnauthorizedException("invalid credentials");
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || "dev-secret",
      expiresIn: "7d",
    });

    return { access_token, user: this.sanitize(user) };
  }

  async profile(payload: {
    id: string;
    email: string;
    role: "artist" | "customer";
  }) {
    const user = await this.usersService.findById(payload.id);
    if (!user) throw new NotFoundException("user not found");
    return this.sanitize(user);
  }
}
