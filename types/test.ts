import type { Chapter } from "./course";
import type { User } from "./user";

export interface Test {
  id: number;

  questions: Question[];
  maxChances: number;
  chapterID: number;
  chapter?: Chapter;

}
export interface Option {
  id: number;
  content: string;
  is_correct: boolean;
  question_id: number;
}

export interface Question {
  id: number;

  content: string;
  description: string;
  duration: number; // This will be serialized as a string representation of time (e.g., "1h30m")

  test_id: number;

  options: Option[];

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
