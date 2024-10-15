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
}
