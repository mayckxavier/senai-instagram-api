import { Photo } from 'src/photos/entities/photo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany((type) => Photo, (photo) => photo.user)
  photos: Photo[];
}
