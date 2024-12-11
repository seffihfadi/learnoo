import type { Test } from "./test";
import type { Author, User } from "./user";

// Language Enum
export type Languages = 'ar' | 'fr' | 'en';

// Level Enum
export type Level = 'beginner' | 'medium' | 'advanced';

// LearningStatus Enum
export type LearningStatus = 'succeed' | 'failed' | 'learning';

export interface Course {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  title: string;
  description?: string;
  price: number;
  paymentPriceID?: string | null;
  paymentProductID?: string | null;
  language: Languages;
  level: Level;
  duration: number;
  rate: number;
  isCompleted: boolean;
  requirements?: Requirement[];
  objectives?: Objective[];
  video?: File;
  image?: File;
  authorID?: string;
  author?: Author;
  categories?: Category[];
  chapters?: Chapter[];
  learners?: User[];
}

export interface Category {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  name: string;
  courses?: Course[];
}

export interface CourseCategory {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  courseID: number;
  categoryID: number;
  course?: Course;
  category?: Category;
}

export interface Objective {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  content: string;
  courseID?: number;
  course?: Course;
}

export interface Requirement {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  content: string;
  courseID?: number;
  course?: Course;
}

export interface Chapter {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  title: string;
  description: string;
  courseID?: number;
  course?: Course;
  lessons?: Lesson[];
  test?: Test;
}

export interface Lesson {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  title: string;
  description?: string;
  isVideo: boolean;
  content: Record<string, unknown>;
  video?: File;
  chapterID?: number;
  chapter?: Chapter;
  learners?: User[];
}

export interface LessonLearner {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  lessonID: number;
  learnerID: number;
  lesson?: Lesson;
  learner?: User;
  learned: boolean;
}

export interface CourseLearner {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  courseID: number;
  learnerID: string;
  course?: Course;
  learner?: User;
  learningStatus: LearningStatus;
  rate?: number;
  checkoutID?: string;
}
