import type { Course, Lesson } from "./course";
import type { Question, Test } from "./test";

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  email: string;
  password: string;
  fullName: string;
  emailVerified: boolean;
  paymentCustomerID?: string;
  image?: File;
  authorProfile?: Author;
  courses?: Course[];
  lessons?: Lesson[];
  tests?: Test[];
  answeredQuestions?: Question[];
}

export interface Author {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  bio?: Record<string, any>; // Assuming it's a generic object for the bio field
  balance?: number;
  userID?: string;
  user?: User;
  accomplishments?: File[];
  courses?: Course[];
}
