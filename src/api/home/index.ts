import {
  AccessedByBody,
  AccessInfoBodyTypes,
  AddressLookupBodyType,
  CreateCaseNumberBody,
  CriminalHistoryBodyType,
  DarkDataKeywordSearchRequest,
  GeoIDsRequest,
  NotesQueryParams,
  PersonSearchRequest,
  RequireCaseNumberBody,
} from "../../models";
import httpService from "../https.service";

const searchPersonByUserId = (userId: string) => {
  return httpService().get(`person-search/${userId}`);
};

const searchPerson = (body: PersonSearchRequest) => {
  return httpService().post(`person-search`, body);
};

const searchByCityState = (location: string) => {
  return httpService().get(`citystate/typeahead?q=${location}`);
};

const searchDarkDataByKeyword = (body: DarkDataKeywordSearchRequest) => {
  return httpService().post(`dark/keyword`, body);
};

const getAccessInfo = (body: AccessInfoBodyTypes) => {
  return httpService().post(`person-search/viewedBy`, body);
};

const getNotes = (id: string, queryParams: NotesQueryParams) => {
  return httpService().get(
    `person-search/getnotes/${id}?userId=${queryParams?.userId}&organizationId=${queryParams?.organizationId}`
  );
};

// const getPersonCriminalHistory = (id: string) => {
//   return httpService().get(`person-search/public-criminal-history/${id}`);
// };

const getPersonCriminalHistory = (body: CriminalHistoryBodyType) => {
  return httpService().post(`person-search/criminal-history`, body);
};

const getRecentlyViewed = (userId: string) => {
  return httpService().get(`person-search/user/${userId}`);
};

const searchAddressLookup = (body: AddressLookupBodyType) => {
  return httpService().post(`globalAddress/addresslookup`, body);
};

const getGeoDataFromIdList = (geoIDs: GeoIDsRequest) => {
  return httpService().post(`globalgeo/addressgeos`, geoIDs);
};

const setRequireCaseNumber = (body: RequireCaseNumberBody) => {
  return httpService().put("user/requires-case-number/", body);
};

const setCaseNumber = (body: CreateCaseNumberBody) => {
  return httpService().post("case-history/create/", body);
};

const getCaseNumber = (userId: string) => {
  return httpService().get(`case-history/${userId}`);
};

const setAccessedBy = (body: AccessedByBody) => {
  return httpService().post("person-search/accessedBy", body);
};

export const HomeAPIS = {
  searchPersonByUserId,
  searchPerson,
  searchByCityState,
  searchDarkDataByKeyword,
  getAccessInfo,
  getNotes,
  getPersonCriminalHistory,
  getRecentlyViewed,
  searchAddressLookup,
  getGeoDataFromIdList,
  setRequireCaseNumber,
  setCaseNumber,
  setAccessedBy,
  getCaseNumber,
};
