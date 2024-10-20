import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceAvailability } from '../enums/availability.enum';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column({
    type: 'enum',
    enum: ServiceAvailability,
    default: ServiceAvailability.AVAILABLE,
  })
  availability: ServiceAvailability;

  @Column()
  duration: number;

  @ManyToOne(() => Profile, (profile) => profile.services, {
    onDelete: 'CASCADE',
  })
  profile: Profile;

  @Column()
  profileId: number;
}
