import { UserDocument } from './userDocument';

export interface User extends UserDocument {
  readonly id: string;
}
