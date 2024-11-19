// import { Module } from '@nestjs/common'
// import { RedisModule } from 'nestjs-redis'
// import { ConfigService, ConfigModule } from '@nestjs/config'
// import { getRedisConfig } from '../../config/database/redis.config'

// @Module({
//   imports: [
//     RedisModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: getRedisConfig,
//       inject: [ConfigService]
//     })
//   ],
//   exports: [RedisModule]
// })
// export class RedisModule {}
