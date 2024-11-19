import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService, ConfigModule } from '@nestjs/config'

import { getMongoConfig } from 'src/config/database/mongo/mongo.config'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getMongoConfig,
      inject: [ConfigService]
    })
  ],
  exports: [MongooseModule]
})
export class MongoDatabaseModule {}
