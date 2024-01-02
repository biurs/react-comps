import { bookType } from './authorType'

export interface userType {
  name: string;
  age: number;
  country: string;
  books: bookType[];
}