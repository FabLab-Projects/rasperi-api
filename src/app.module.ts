import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import { getConfigModule } from './config/config.module'

import { MongoDatabaseModule } from './config/database/mongo/mongo.module'

import { OculusModule } from './modules/oculus/oculus.module'

@Module({
  imports: [
    ConfigModule.forRoot(getConfigModule()),
    MongoDatabaseModule,
    OculusModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
