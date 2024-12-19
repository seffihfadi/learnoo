import { Lesson } from "./course";
import { Author, User } from "./user";

export interface File {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  url: string;
  width: number;
  height: number;
  thumbnail_url: string | null;
  imageKitID?: string | null;
  userID?: string | null;
  user?: User;
  authorID?: string | null;
  author?: Author;
  lessonID?: number | null;
  lesson?: Lesson;
  videoCourseID?: number | null;
  imageCourseID?: number | null;
}
