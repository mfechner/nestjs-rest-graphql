import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';

@Controller('/api/auth')
export class AuthController {
  @Post('login')
  async loginUser(@Response() res: any, @Body() body: any) {
    console.log('Got body', body);

    // more code but not relevant here

    return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
  }
}