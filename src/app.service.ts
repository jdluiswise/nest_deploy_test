import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest.js Test Deploy and endpoints: <a href="/users">Get ALL Users</a>';
  }
}
