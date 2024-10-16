import { UserRoles } from '../../users/enums';

export interface ActiveUserData {
  /**
   * The "subject" of the token. The value of this property is the user ID
   * that granted this token
   */
  sub: number;
  /**
   * The subject's email
   */
  email: string;

  /**
   * The role of the subject
   */
  role: UserRoles;

  /**
   * The username of the subject
   */
  username: string;
}
