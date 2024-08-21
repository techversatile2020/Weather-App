export type HomeScreenNavType = {
  navigate: (
    screenName: string,
    prop?: {
      from: string;
      data?: {};
    }
  ) => void;
};

export type HomeCardType = {
  id: string;
  name: string;
  viewed: string;
  location: string;
  key: string;
};

export type CaseNumberListType = {
  id: string;
  caseNumber: string;
};
