import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ActivityCategories } from '../enums/activityCategories.enum';
import { Service } from '../../services/entities/service.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column()
  location: string;

  @Column()
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: ActivityCategories,
    default: ActivityCategories.OTHER,
  })
  activityCategory: ActivityCategories;

  @Column({ nullable: true })
  website: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @OneToMany(() => Service, (service) => service.profile)
  services: Service[];
}
