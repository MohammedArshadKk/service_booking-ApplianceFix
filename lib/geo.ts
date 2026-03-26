export interface Location {
  latitude: number;
  longitude: number;
}

export const BRANCHES = {
  MALAPPURAM: {
    name: "Malappuram",
    coords: { latitude: 11.0510, longitude: 76.0711 },
    path: "/ac-service-malappuram"
  },
  KOZHIKODE: {
    name: "Kozhikode",
    coords: { latitude: 11.2588, longitude: 75.7804 },
    path: "/ac-service-kozhikode"
  }
};

function calculateDistance(loc1: Location, loc2: Location) {
  const R = 6371; // km
  const dLat = (loc2.latitude - loc1.latitude) * Math.PI / 180;
  const dLon = (loc2.longitude - loc1.longitude) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(loc1.latitude * Math.PI / 180) * Math.cos(loc2.latitude * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export const getNearestBranch = (userLoc: Location) => {
  const distMalappuram = calculateDistance(userLoc, BRANCHES.MALAPPURAM.coords);
  const distKozhikode = calculateDistance(userLoc, BRANCHES.KOZHIKODE.coords);
  
  return distMalappuram < distKozhikode ? BRANCHES.MALAPPURAM : BRANCHES.KOZHIKODE;
};
