import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe used for global validation
  app.useGlobalPipes(
    new ValidationPipe({
      // jo jo define hain dto wohi sirf aain gay request ma.
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
