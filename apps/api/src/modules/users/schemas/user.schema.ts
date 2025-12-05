import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

export enum UserRole {
  Artist = "artist",
  Customer = "customer",
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name!: string;

  @Prop({
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  })
  email!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ required: true, enum: [UserRole.Artist, UserRole.Customer] })
  role!: UserRole;

  createdAt!: Date;
  updatedAt!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set("toObject", {
  transform: (_doc, ret) => {
    Reflect.deleteProperty(ret, "password");
    Reflect.deleteProperty(ret, "__v");
    return ret;
  },
});
UserSchema.set("toJSON", {
  transform: (_doc, ret) => {
    Reflect.deleteProperty(ret, "password");
    Reflect.deleteProperty(ret, "__v");
    return ret;
  },
});
