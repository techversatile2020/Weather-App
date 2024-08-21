import { DetailCardArrayData } from "../sharedUI/detail-card-component";

export type PersonalDetails = {
  fullName: string;
  age: string;
  dob: string;
  deceased: "YES" | "NO";
  dod: string;
  alaises: string;
  firstName?: string;
  lastName?: string;
};

export type PersonalEmailAdressesTypes = {
  email: string;
  id: string | number;
}[];

export type PhoneNumberObjectArrayType = {
  id: string;
  phoneNumberObjectArray: DetailCardArrayData;
}[];

export type AddressObjectsArrayType = {
  id: string;
  addressObjectArray: DetailCardArrayData;
  addressLink: string;
  addressDetails: {
    street: string;
    appartment: string;
    city: string;
    state: string;
    zip: string;
  };
  lat: number;
  long: number;
}[];

export type RelativeAssociatesObjectsArrayType = {
  id: string;
  relativeAssociatesObjectArray: DetailCardArrayData;
  assocaitesRelativesName: string;
}[];

export type IDAndTitle = {
  id: string | number;
  title: string;
};

export type LinksDataTypes = {
  relativeOptions: IDAndTitle[];
  associatesOptions: IDAndTitle[];
  emailOptions: IDAndTitle[];
  phoneNumberOptions: IDAndTitle[];
  addressOptions: IDAndTitle[];
};

export type MapMarkerDataTypes = {
  id: string | number;
  latitude: number;
  longitude: number;
}[];

export type SearchedPersonDataTypes = {
  personalDetails: PersonalDetails;
  emailAdresses: PersonalEmailAdressesTypes;
  phoneNumbers: PhoneNumberObjectArrayType;
  addresses: AddressObjectsArrayType;
  relatives: RelativeAssociatesObjectsArrayType;
  associates: RelativeAssociatesObjectsArrayType;
  links: LinksDataTypes;
  mapMarkers: MapMarkerDataTypes;
};
