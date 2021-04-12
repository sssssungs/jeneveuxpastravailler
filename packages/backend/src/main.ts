import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3001);
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(
		cors({
			origin: '*',
		}),
	);
}
bootstrap();
