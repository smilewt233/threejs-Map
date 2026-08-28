export interface CityProperties {
  adcode: number;
  name: string;
  center: [number, number];
  centroid?: [number, number];
  childrenNum: number;
  level: string;
  parent: { adcode: number };
  subFeatureIndex: number;
  acroutes: number[];
}

export interface CityFeature {
  type: "Feature";
  geometry: {
    type: "MultiPolygon";
    coordinates: number[][][][];
  };
  properties: CityProperties;
}

export interface CityGeoJSON {
  type: "FeatureCollection";
  features: CityFeature[];
}
