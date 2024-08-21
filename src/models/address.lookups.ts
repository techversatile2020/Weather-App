import { DetailCardArrayData } from "../sharedUI/detail-card-component";
import { Detail } from "./property.details";
import { GeoData } from "./property.geodata";

export type PropertyOverview = {
  uniqueId: number;
  parcelAPN: string;
  location: Coordinates;
  accuracy: string;
  municipalityName: string;
  subdivisionName: string;
  propertyType: string;
  propertyStatus: string;
};

export type Coordinates = {
  latitude: string;
  longitude: string;
};
export type PropertySalesHistoryType = {
  id: string;
  propertySalesData: DetailCardArrayData;
};

export type AddressLookups = {
  locationDetails: PropertyOverview;
  linkedPeopleAddress: {
    address1: string;
    address2: string;
  };
  salesHistory: PropertySalesHistoryType[];
  details: {
    details: Detail[];
  };
  geoData: GeoData;
};
