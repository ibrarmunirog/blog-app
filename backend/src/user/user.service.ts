import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto, UserUpdateDto } from 'src/user/dtos';
import { UserEntity } from 'src/user/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public create(payload: UserCreateDto) {
    const user = this.userRepository.create({
      ...payload,
    });
    return this.userRepository.save(user);
  }

  public findByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
  public findById(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async update(id: string, data: Partial<UserUpdateDto>) {
    const user = await this.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    for (let key in data) {
      if (key in user) {
        user[key] = data[key];
      }
    }

    return this.userRepository.save(user);
  }
}
