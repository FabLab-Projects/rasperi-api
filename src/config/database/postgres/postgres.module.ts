// import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { ConfigService, ConfigModule } from '@nestjs/config'
// import { getPostgresConfig } from '../../config/database/postgres.config'

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: getPostgresConfig,
//       inject: [ConfigService]
//     })
//   ],
//   exports: [TypeOrmModule]
// })
// export class PostgresModule {}
