import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { taloTestController } from "./controllers/taloTest.controller";

import { user } from "./entities/user.entity";
import { taloTestService } from "./services/taloTest.service";

@Module({
    imports:[TypeOrmModule.forFeature([user])],
    providers:[taloTestService],
    controllers:[taloTestController]
})
export class taloTestModule{}