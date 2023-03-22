import { UserRoleEnum } from "modules/auth/enums";

export interface User {
  id: string;
  email: string;
  avatar?: string;
  linkedInHandler?: string;
  twitterHandler?: string;
  firstName: string;
  lastName: string;
  locale?: string;
  active: boolean;
  role: UserRoleEnum;
  createdAt: Date;
  updatedAt: Date;
}
