import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthenticationController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getHello(): string {
    return 'this.;';
  }
}
