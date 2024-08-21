type Coordinate = {
  id: string;
  latitude: string;
  longitude: string;
};

type BoundingBox = {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
};

const calculateCentroid = (
  coords: Coordinate[]
): { latitude: number; longitude: number } => {
  let latitudeSum = 0;
  let longitudeSum = 0;
  const numCoords = coords.length;

  coords.forEach((coord) => {
    latitudeSum += parseFloat(coord.latitude);
    longitudeSum += parseFloat(coord.longitude);
  });

  return {
    latitude: latitudeSum / numCoords,
    longitude: longitudeSum / numCoords,
  };
};

const calculateBoundingBox = (coords: Coordinate[]): BoundingBox => {
  let minLat = Number.POSITIVE_INFINITY;
  let maxLat = Number.NEGATIVE_INFINITY;
  let minLng = Number.POSITIVE_INFINITY;
  let maxLng = Number.NEGATIVE_INFINITY;

  coords.forEach((coord) => {
    const lat = parseFloat(coord.latitude);
    const lng = parseFloat(coord.longitude);

    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
  });

  return {
    minLat,
    maxLat,
    minLng,
    maxLng,
  };
};

const estimateZoomLevel = (boundingBox: BoundingBox): number => {
  const WORLD_DIM = { height: 256, width: 256 };
  const ZOOM_MAX = 21;

  const latRad = (lat: number): number => {
    const sin = Math.sin((lat * Math.PI) / 180);
    const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
  };

  const zoom = (mapPx: number, worldPx: number, fraction: number): number => {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  };

  const latFraction =
    (latRad(boundingBox.maxLat) - latRad(boundingBox.minLat)) / Math.PI;
  const lngDiff = boundingBox.maxLng - boundingBox.minLng;
  const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;

  const latZoom = zoom(WORLD_DIM.height, 256, latFraction);
  const lngZoom = zoom(WORLD_DIM.width, 256, lngFraction);

  return Math.min(latZoom, lngZoom, ZOOM_MAX);
};


export default {
  calculateCentroid,
  calculateBoundingBox,
  estimateZoomLevel,
};
