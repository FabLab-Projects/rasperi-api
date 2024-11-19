import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Oculus, OculusSchema } from './schema/oculus.schema'
import { OculusController } from './controllers/oculus.controller'
import { OculusService } from './services/oculus.service'
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Oculus.name, schema: OculusSchema }])
  ],
  controllers: [OculusController],
  providers: [OculusService]
})
export class OculusModule {}
