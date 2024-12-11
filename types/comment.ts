import type { Lesson } from "./course";
import type { User } from "./user";

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  content: string;
  lessonID: number;
  lesson?: Lesson;
  userID: number;
  user?: User;
  repliedTo?: number | null;
  replies?: Comment[];
  notifications?: Notification[];
}

export interface Notification {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  title: string;
  description: string;
  commentID?: number | null;
  comment?: Comment;
}

