import type { Course, Lesson } from "./course";
import type { File } from "./file";
import type { Question, Test } from "./test";

export interface User {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  email: string;
  password: string;
  full_name: string;
  email_verified: boolean;
  payment_customer_id?: string;
  image?: File;
  author_profile?: Author;
  courses?: Course[];
  lessons?: Lesson[];
  tests?: Test[];
  answered_questions?: Question[];
}

export interface Author {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  bio?: Record<string, any>; // Assuming it's a generic object for the bio field
  balance?: number;
  user_id?: string;
  user?: User;
  accomplishments?: File[];
  courses?: Course[];
}
