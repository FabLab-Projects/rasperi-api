import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';



import { Oculus } from '../schema/oculus.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Oculus.name) private readonly userModel: Model<Oculus>) {}
    async findAll () {
        return await this.userModel.find().exec()
    }
}