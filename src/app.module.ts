import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    AuthModule,
    CatsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class ApplicationModule {}
