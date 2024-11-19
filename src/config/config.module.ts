import { ConfigModuleOptions } from '@nestjs/config'
import { getEnvFilePath } from './env/env.config'

// Función para configurar el ConfigModule
export const getConfigModule = (): ConfigModuleOptions => ({
  isGlobal: true,
  envFilePath: getEnvFilePath()
})
