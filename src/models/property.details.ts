export type Detail = {
  status: Status;
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
  attomId: number;
};

export type Property = {
  identifier: Identifier;
  lot: Lot;
  area: Area;
  address: HomeAddress;
  location: Location;
  summary: Summary;
  utilities: Utilities;
  building: Building;
  vintage: Vintage;
};

export type Identifier = {
  Id: number;
  fips: string;
  apn: string;
  attomId: number;
};

export type Lot = {
  lotnum: string;
  poolind: string;
};

export type Area = {
  blockNum: string;
  loctype: string;
  countrysecsubd: string;
  countyuse1: string;
  muncode: string;
  munname: string;
  subdname: string;
  taxcodearea: string;
};

export type HomeAddress = {
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
  propclass: string;
  propsubtype: string;
  proptype: string;
  propertyType: string;
  yearbuilt: number;
  propLandUse: string;
  propIndicator: string;
  legal1: string;
};

export type Utilities = {
  coolingtype: string;
  heatingtype: string;
};

export type Building = {
  size: Size;
  rooms: Rooms;
  construction: Construction;
  parking: Parking;
  summary: BuildingSummary;
};

export type Size = {
  bldgsize: number;
  grosssize: number;
  grosssizeadjusted: number;
  groundfloorsize: number;
  livingsize: number;
  sizeInd: string;
  universalsize: number;
};

export type Rooms = {
  bathsfull: number;
  bathstotal: number;
  beds: number;
  roomsTotal: number;
};

export type Construction = {
  constructiontype: string;
  foundationtype: string;
  frameType: string;
  roofcover: string;
  roofShape: string;
  wallType: string;
};

export type Parking = {
  garagetype: string;
  prkgSize: number;
  prkgSpaces: string;
  prkgType: string;
};

export type BuildingSummary = {
  bldgType: string;
  imprType: string;
  levels: number;
  storyDesc: string;
  view: string;
  yearbuilteffective: number;
};

export type Vintage = {
  lastModified: string;
  pubDate: string;
};
