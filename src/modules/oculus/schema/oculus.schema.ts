import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({ timestamps: true })
export class Oculus extends Document {}

export const OculusSchema = SchemaFactory.createForClass(Oculus)
