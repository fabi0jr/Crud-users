import { Injectable } from "@nestjs/common"
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { ConfigService } from "@nestjs/config"
import { join } from "path"

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<string>("DB_TYPE") as any,
      host: this.configService.get<string>("DB_HOST"),
      port: this.configService.get<number>("DB_PORT"),
      username: this.configService.get<string>("DB_USER"),
      password: this.configService.get<string>("DB_PASSWORD"),
      database: this.configService.get<string>("DB_DATABASE"),
      synchronize: this.configService.get<boolean>("DB_SYNCHRONIZE"),
      entities: [join(__dirname, "..", "..", "**", "*.entity{.ts,.js}")],
      charset: "utf8mb4",
      
    }
  }
}