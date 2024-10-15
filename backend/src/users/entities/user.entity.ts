import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from '../enums';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.CONSUMER,
  })
  accountType: UserRoles;
}
