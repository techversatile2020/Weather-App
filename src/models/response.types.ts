import { Detail } from "./property.details";
import { GeoData } from "./property.geodata";
import { HistoryDetail } from "./property.history";

export type LoginResponseType = {
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  RequiresCaseNumber: boolean;
  accountType: string;
  isIdentityAuditer: boolean;
  isHealthCareUser: boolean;
};

export type NotesResponseType = {
  _id: string;
  UserId: string[];
  createdDate: string;
  noteText: string;
  noteType: string;
  OrganizationId: string[];
  caseNumber: string;
  agencyName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type ChargeInfo = {
  charge: Charge[];
};

export type Charge = {
  ChargesFiledDate: string | null;
  OffenseDate: string | null;
  OffenseCode: string | null;
  NCICCode: string | null;
  OffenseDesc1: string;
  OffenseDesc2: string | null;
  Counts: string;
  Plea: string | null;
  ConvictionDate: string | null;
  ConvictionPlace: string | null;
  SentenceYYYMMDDD: string | null;
  ProbationYYYMMDDD: string | null;
  Court: string;
  Disposition: string;
  DispositionDate: string | null;
  ArrestDate: string | null;
  ParoleDate: string | null;
  ReleaseDate: string | null;
  AdmittedDate: string | null;
  CourtCosts: string | null;
  ArrestingAgency: string | null;
  caseType: string;
  Fines: string | null;
  caseno: string;
};

export type CriminalHistoryResponseType = {
  Category: string;
  IDCaseNumber: string;
  Fullname: string;
  LastName: string;
  FirstName: string;
  MiddleName: string;
  Generation: string;
  SSN: string;
  DOB: string;
  BirthState: string;
  AKA1: string;
  AKA2: string;
  DOBAKA: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  Age: string;
  Hair: string;
  Eyes: string;
  Height: string;
  Weight: string;
  Race: string;
  ScarsMarks: string;
  Sex: string;
  SkinTone: string;
  MilitaryService: string;
  Photo: string;
  SourceState: string;
  SourceName: string;
  Source: string;
  Source_county: string;
  Record_date: string;
  TotalNumberOfCharges: string;
  Charge_info: ChargeInfo;
};

export type AddressLookupsResponse = {
  propertyDetails: {
    details: Detail[];
  };
  history: {
    details: HistoryDetail[];
  };
  geoData: GeoData;
};
