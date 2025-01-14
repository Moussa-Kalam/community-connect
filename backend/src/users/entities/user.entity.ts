import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from '../enums';
import { Profile } from '../../profiles/entities/profile.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.CONSUMER,
  })
  accountType: UserRoles;

  @OneToOne(() => Profile, (profile) => profile.user, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  profile: Profile;
}
