import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    return 'This action adds a new photo';
  }

  async findAll() {
    return await this.photoRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    return await this.photoRepository.findOne(id, { relations: ['user'] });
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
