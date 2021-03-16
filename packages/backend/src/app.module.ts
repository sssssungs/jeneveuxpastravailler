import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { TaskModule } from "./task/task.module";
import { Task } from "./task/task.entity";
import { join } from "path";

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), "src/schema.gql"),
		}),
		TypeOrmModule.forRoot({
			entities: [Task],
		}),
		TaskModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
