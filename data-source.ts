import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: '192.168.0.21',
  port: 3306,
  username: 'user',
  password: 'user123',
  database: 'crud_users',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'], // Caminho para as entidades
  migrations: [__dirname + '/src/migrations/*{.ts,.js}'], // Caminho para as migrações
  synchronize: false, // Desativar sincronização automática
  logging: true, // Ativar logs para depuração
});

export default dataSource;