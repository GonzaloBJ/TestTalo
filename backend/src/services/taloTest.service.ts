import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { user } from "../entities/user.entity";

@Injectable()
export class taloTestService {
    constructor(
        @InjectRepository(user)
        private taloTestRepository: Repository<user>
    ) { }

    readAllUser(): Promise<user[]> {
        return this.taloTestRepository.find();
    }

    createOrUpdateUser(newUser: user): Promise<user> {
        return this.taloTestRepository.save(newUser);
    }

    readByUserId(userId: number): Promise<user> {
        return this.taloTestRepository.findOneBy({ userId });
    }

    deleteByUserId(userId: number): Promise<DeleteResult> {
        return this.taloTestRepository.delete({ userId });
    }


}