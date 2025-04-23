import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Alterado para MySQL
      host: '192.168.0.21', // IP da máquina virtual
      port: 3306, // Porta padrão do MySQL
      username: 'user', // Usuário do banco
      password: 'user123', // Senha do banco
      database: 'crud_users', // Nome do banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Caminho para as entidades
      synchronize: false, // Desativar sincronização automática
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}