import { BaseModel } from "./base.model";

export type UserModel = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  accountType: string;
  exp: number;
  hasBallisticsAccess: boolean;
  hasBodyWornAccess: boolean;
  hasCommsAccess: boolean;
  hasDOBAccess: boolean;
  hasJailCallAccess: boolean;
  hasSSNAccess: boolean;
  iat: number;
  isAPIUser: boolean;
  isGlobalAdmin: boolean;
  isHealthCareUser: boolean;
  isIdentityAuditer: boolean;
  isLocalAdmin: boolean;
  isStaff: boolean;
  organizations: string[];
  role: string;
  selectedOrganization: string;
  RequiresCaseNumber: boolean;
  caseNumber?: string;
};
