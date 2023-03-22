import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { user } from "../entities/user.entity";
import { taloTestService } from "../services/taloTest.service";

@Controller('taloTest')
export class taloTestController {
    constructor(private readonly taloTestService: taloTestService) { }

    @Post()
    async createUser(@Res() response, @Body() user: user) {
        const newUser = await this.taloTestService.createOrUpdateUser(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }

    @Get()
    async readAllUser(@Res() response) {
        const users = await this.taloTestService.readAllUser();
        return response.status(HttpStatus.OK).json({
            users
        })
    }

    @Get('/:id')
    async readByUserId(@Res() response, @Param('id') userId) {
        try {
            const user = await this.taloTestService.readByUserId(userId);
            return response.status(HttpStatus.OK).json({
                user
            })
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error
            })
        }
    }

    @Post('/delete')
    async deleteByUserId(@Res() response, @Body() userId: number) {
        const deletedUser = await this.taloTestService.deleteByUserId(userId);
        return response.status(HttpStatus.OK).json({
            deletedUser
        })
    }

}