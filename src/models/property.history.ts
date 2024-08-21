export type HistoryDetail = {
  status: Status;
  echoed_fields: EchoedFields;
  property: Property[];
};

export type Status = {
  version: string;
  code: number;
  msg: string;
  total: number;
  page: number;
  pagesize: number;
  transactionID: string;
};

export type EchoedFields = {
  jobID: string;
  loanNumber: string;
  preparedBy: string;
  resellerID: string;
  preparedFor: string;
};

export type Property = {
  identifier: Identifier;
  area: Area;
  address: Address;
  location: Location;
  summary: Summary;
  foreclosure: Foreclosure[];
  saleHistory: SaleHistory[];
  owner: Owner;
  vintage: Vintage;
};

export type Identifier = {
  Id: number;
  fips: string;
  apn: string;
  attomId: number;
};

export type Area = {
  blockNum: string;
  locType: string;
  countrySecSubd: string;
  countyUse1: string;
  munCode: string;
  munName: string;
  subdName: string;
  taxCodeArea: string;
};

export type Address = {
  country: string;
  countrySubd: string;
  line1: string;
  line2: string;
  locality: string;
  matchCode: string;
  oneLine: string;
  postal1: string;
  postal2: string;
  postal3: string;
  stateFips: string;
};

export type Location = {
  accuracy: string;
  latitude: string;
  longitude: string;
  distance: number;
  geoid: string;
  geoIdV4: GeoIdV4;
};

export type GeoIdV4 = {
  CO: string;
  CS: string;
  DB: string;
  N2: string;
  PL: string;
  SB: string;
  ZI: string;
};

export type Summary = {
  absenteeInd: string;
  propClass: string;
  propSubType: string;
  propType: string;
  propertyType: string;
  yearBuilt: number;
  propLandUse: string;
  propIndicator: number;
  quitClaimFlag: string;
};

export type Foreclosure = {
  sequence: number;
};

export type SaleHistory = {
  sequence: number;
  saleSearchDate: string;
  saleTransDate: string;
  transactionIdent: string;
  buyerName: string;
  sellerName?: string;
  deedInLieuOfIndicator: string;
  amount: SaleAmount;
  calculation?: Calculation;
  mortgage?: MortgageDetail;
  vintage: Vintage;
  title?: Title;
};

export type SaleAmount = {
  saleAmt?: number;
  saleRecDate?: string;
  saleDisclosureType: number;
  saleDocType: string;
  saleDocNum: string;
  saleTransType: string;
  propIndicator: number;
  deedType: string;
};

export type Calculation = {
  priceperbed: number;
  pricepersizeunit: number;
};

export type MortgageDetail = {
  FirstConcurrent: Mortgage;
  SecondConcurrent?: Mortgage;
};

export type Mortgage = {
  trustDeedDocumentNumber: string;
  amount: number;
  lenderLastName: string;
  companyCode: string;
  date: string;
  interestRateType: string;
  loanTypeCode?: string;
  term: string | number;
};

export type Title = {
  companyName: string;
  companyCode: string;
};

export type Owner = {
  corporateIndicator: string;
  type: string;
  description: string;
  owner1: OwnerDetail;
  absenteeOwnerStatus: string;
  mailingAddressOneLine: string;
};

export type OwnerDetail = {
  lastname: string;
  firstNameAndMi: string;
};

export type Vintage = {
  lastModified: string;
  pubDate: string;
};
