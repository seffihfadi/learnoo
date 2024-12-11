import type { Chapter } from "./course";
import type { User } from "./user";

export interface Test {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  questions?: Question[];
  maxChances: number;
  chapterID: number;
  chapter?: Chapter;
  learners?: User[];
}

export interface Question {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  description: string;
  duration: string; // This will be serialized as a string representation of time (e.g., "1h30m")
  deletedAt?: Date | null;
  testID: number;
  test?: Test;
  options?: Option[];
  answeredLearners?: User[];
}

export interface Option {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  isCorrect: boolean;
  deletedAt?: Date | null;
  questionID: number;
  question?: Question;
  questionAnswers?: QuestionAnswer[];
}

export interface QuestionAnswer {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  questionID: number;
  learnerID: number;
  question: Question;
  learner: User;
  selectedOptions?: Option[];
}

export interface OptionSelection {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  optionID: number;
  questionAnswerID: number;
  questionAnswer: QuestionAnswer;
  option: Option;
}

export interface TestResult {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  testID: number;
  learnerID: number;
  test: Test;
  learner: User;
  hasSucceed: boolean;
  currentChance: number;
}
