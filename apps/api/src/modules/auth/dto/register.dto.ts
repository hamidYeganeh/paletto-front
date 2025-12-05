import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";
import { UserRole } from "../../users/schemas/user.schema";

export class RegisterDto {
  @IsString()
  @MinLength(2)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsEnum(UserRole)
  role!: "artist" | "customer";
}
