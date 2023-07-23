import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


@Schema({
    timestamps:true //esto crea las props createAt y updatedAt en la class TASK
})
 export class Task {
    @Prop({
        unique:true,
        required:true,
        trim:true
    })
    title: string
    @Prop({
        trim:true
    })  
    description: string
    @Prop({
        default:false
    })
    done: boolean
}

export const TaskSchema = SchemaFactory.createForClass(Task) // esto interactua con el service