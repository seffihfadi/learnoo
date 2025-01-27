import type { File } from "./file";
import type { Test } from "./test";
import type { Author, User } from "./user";

// Language Enum
export type languages = 'ar' | 'fr' | 'en';

// Level Enum
export type level = 'beginer' |'medium' | 'advanced';

// LearningStatus Enum
export type LearningStatus ='succeed' | 'failed' | 'learning';

export interface Course {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  title: string;
  description?: string;
  price: number;
  payment_price_id?: string | null;
  payment_product_id?: string | null;
  language: languages;
  level: level;
  duration: number;
  rate: number;
  raters_count: number;
  is_completed: boolean;
  requirements?: Requirement[];
  objectives?: Objective[];
  video?: File;
  image?: File;
  author_id?: string;
  author?: Author;
  categories?: Category[];
  chapters?: Chapter[];
  learners?: User[];
}

export interface Category {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  name: string;
  courses?: Course[];
}
export interface Courses{
  count: number,
  courses:Course[]
}
export interface CourseCategory {
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  course_id: number;
  category_id: number;
  course?: Course;
  category?: Category;
}

export interface Objective {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  content: string;
  course_id?: number;
  course?: Course;
}

export interface Requirement {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  content: string;
  course_id?: number;
  course?: Course;
}

export interface Chapter {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  title: string;
  description: string;
  course_id?: number;
  course?: Course;
  lessons?: Lesson[];
  test?: Test;
}

export interface Lesson {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  title: string;
  description?: string;
  is_video: boolean;
  content: Record<string, unknown>;
  video?: File;
  chapter_id?: number;
  chapter?: Chapter;
  learners?: User[];
}

export interface LessonLearner {
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  lesson_id: number;
  learner_id: number;
  lesson?: Lesson;
  learner?: User;
  learned: boolean;
}

export interface CourseLearner {
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
  course_id: number;
  learner_id: string;
  course?: Course;
  learner?: User;
  learning_status: LearningStatus;
  rate?: number;
  checkout_id?: string;
}