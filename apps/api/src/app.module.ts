import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { ArtworksModule } from "./modules/artworks/artworks.module";
import { GalleriesModule } from "./modules/galleries/galleries.module";
import { EventsModule } from "./modules/events/events.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { UploadsModule } from "./modules/uploads/uploads.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || "mongodb://localhost:27017/paletto"),
    AuthModule,
    UsersModule,
    ArtworksModule,
    GalleriesModule,
    EventsModule,
    OrdersModule,
    UploadsModule,
  ],
})
export class AppModule {}
