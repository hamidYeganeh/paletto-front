import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { ArtworksModule } from "./modules/artworks/artworks.module";
import { GalleriesModule } from "./modules/galleries/galleries.module";
import { EventsModule } from "./modules/events/events.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { UploadsModule } from "./modules/uploads/uploads.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uriFromEnv = config.get<string>("MONGO_URI");
        const host = config.get<string>("MONGO_HOST") || "localhost:27017";
        const dbName = config.get<string>("MONGO_DB_NAME") || "paletto";
        const user = config.get<string>("MONGO_USER");
        const pass = config.get<string>("MONGO_PASSWORD");
        const authSource = config.get<string>("MONGO_AUTH_SOURCE") || "admin";
        const uri =
          uriFromEnv ||
          (user && pass
            ? `mongodb://${user}:${pass}@${host}/${dbName}?authSource=${authSource}`
            : `mongodb://${host}/${dbName}`);
        return {
          uri,
          autoIndex:
            (config.get<string>("NODE_ENV") || "development") !== "production",
        };
      },
    }),
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
