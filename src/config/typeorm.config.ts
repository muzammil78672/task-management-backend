import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '',
  database: 'taskManagement',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
