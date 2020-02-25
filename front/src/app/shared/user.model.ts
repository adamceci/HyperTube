export class User {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  authToken?: string;
  idToken?: string;
  provider?: string;
}
