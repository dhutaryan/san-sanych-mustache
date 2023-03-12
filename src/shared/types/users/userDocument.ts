import { UserRole } from './userRole';

export interface UserDocument {
  readonly email: string | null;
  readonly displayName: string | null;
  readonly role: UserRole;
}
