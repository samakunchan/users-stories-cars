import { User } from '../../models/user.model';

export class UserBuilder {
  protected uid: string;

  withUid(value: string): UserBuilder {
    this.uid = value;
    return this;
  }

  build(): User {
    return new User(this.uid);
  }
}
