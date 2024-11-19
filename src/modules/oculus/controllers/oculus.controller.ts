import { Controller, Get } from '@nestjs/common'

@Controller('oculus')
export class OculusController {
  constructor() {}

  @Get('/test')
  async getTest() {
    return 'Hello World'
  }
}
