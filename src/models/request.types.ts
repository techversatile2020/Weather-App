export type LoginBodyType = {
  email?: string;
  password?: string;
  twoFactorCode?: string;
  trustThisBrowser?: boolean;
};

export type ResetPasswordBodyType = {
  userEmail: string;
};

export type Address = {
  AddressLine1: string;
  AddressLine2: string;
};

export type PersonSearchRequest = {
  FirstName: string;
  LastName: string;
  Dob: string;
  Email: string;
  Phone: string;
  Ssn: string;
  Addresses: Address[];
  Page?: number;
  UserId: string;
  OrganizationId: string;
  caseNumber: string;
  ResultsPerPage: number;
};

export type DarkDataKeywordSearchRequest = {
  keyword: string;
  caseNumber?: string;
  organizationId?: string;
  userId?: string;
  page?: number;
};

export type AccessInfoBodyTypes = {
  tahoeId: string;
  OrganizationId: string;
};

export type NotesQueryParams = {
  organizationId: string;
  userId: string;
};

export type AddressLookupBodyType = {
  address1: string;
  address2: string;
  UserId: string;
  OrganizationId: string;
};

export type CriminalHistoryBodyType = {
  tahoeId: string;
  firstName: string;
  lastName: string;
  dob: string;
  birthYearOne: number;
  birthYearTwo: number;
};

export type GeoIDsRequest = {
  geoIDs: string[];
};

export type RequireCaseNumberBody = {
  userId: string;
  requiresCaseNumber: boolean;
};

export type CreateCaseNumberBody = {
  UserId: string;
  OrganizationId: string;
  caseNumber: number | string;
};

export type AccessedByBody = {
  tahoeId: string;
  UserId: string;
  OrganizationId: string;
  caseNumber: number | string;
};
