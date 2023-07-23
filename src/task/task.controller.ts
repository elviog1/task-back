import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

        @Get()
        findAll(){
            return this.taskService.findAll()
        }

        @Get(':id')
        async findOne(@Param('id') id:string){
            const task = await this.taskService.findOne(id)
            if(!task){
                throw new NotFoundException('task not found')
            }
            return task
        }

        @Post()
        async create(@Body() body:CreateTaskDto){
            try {
                return await this.taskService.create(body)
            } catch (error) {
                if(error.code === 11000){
                    throw new ConflictException('task already exists')
                }
                throw error
            }
        }

        @Delete(':id')
        @HttpCode(204)
        async delete(@Param('id') id:string){
            const task = await this.taskService.delete(id)
            if(!task){
                throw new NotFoundException('task not found')
            }
            return task
        }

        @Put(':id')
        async update(@Param('id') id:string,@Body() body:any){
            const task = await this.taskService.update(id,body)
            if(!task){
                throw new NotFoundException('task not found')
            }
            return task
        }
}

