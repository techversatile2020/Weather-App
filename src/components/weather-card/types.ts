export type WeatherResponse = {
  location: {
    name: string;
    country: string;
    region: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};
