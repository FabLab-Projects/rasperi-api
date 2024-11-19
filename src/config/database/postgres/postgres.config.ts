import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions } from '@nestjs/mongoose'

export const getMongoConfig = async (
  configService: ConfigService
): Promise<MongooseModuleOptions> => {
  const uri =
    configService.get<string>('MONGO_URI') ||
    'mongodb://localhost:27017/default_db'
  return {
    uri
  }
}
