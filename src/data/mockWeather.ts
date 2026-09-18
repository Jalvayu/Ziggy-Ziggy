import { ForecastPoint, Location, ExtremeEvent, AnomalyData } from '../types/weather';
export const locations: Location[] = [
 { id:'delhi', name:'New Delhi', region:'North India', latitude:28.61, longitude:77.21 },
 { id:'mumbai', name:'Mumbai', region:'West Coast', latitude:19.08, longitude:72.88 },
 { id:'kolkata', name:'Kolkata', region:'East India', latitude:22.57, longitude:88.36 },
 { id:'hyderabad', name:'Hyderabad', region:'Deccan Plateau', latitude:17.38, longitude:78.49 },
 { id:'jaipur', name:'Jaipur', region:'Rajasthan', latitude:26.91, longitude:75.79 }
];
const steps = [24,48,72,96,120];
export const forecast: ForecastPoint[] = steps.map((hours, i) => ({
 step:i, label:`T+${hours}h`, location:locations[0], timestamp:`2026-09-${19+i}T12:00:00Z`,
 temperature:[42.1,43.4,44.2,41.8,40.6][i], rainfall:[142,118,176,94,72][i], wind_speed:[38,42,47,34,29][i], humidity:[58,61,66,54,49][i], apparent_temperature:[48.7,50.2,52.1,47.8,45.9][i], temperature_anomaly:[6.9,8.2,9.1,6.7,5.4][i], rainfall_anomaly:[194,151,242,108,71][i], wind_anomaly:[21,29,41,14,6][i], heat_anomaly:[7.8,9.4,11.2,6.9,4.3][i], risk_level:i < 3 ? 'Extreme' : 'High', confidence:[.94,.92,.91,.89,.87][i]
}));
export const events: ExtremeEvent[] = [
 {id:'rain-01',type:'Extreme Rainfall',location:locations[2],startTime:'19 Sep, 18:00',duration:'14 hours',severity:'Extreme',anomalyMagnitude:'+242%',confidence:.94,step:2,explanation:'Persistent convective rainfall exceeds the regional historical baseline.'},
 {id:'heat-02',type:'Heat Anomaly',location:locations[0],startTime:'19 Sep, 12:00',duration:'30 hours',severity:'Extreme',anomalyMagnitude:'+9.1°C',confidence:.92,step:2,explanation:'Unusual temperature and humidity combination creates dangerous heat stress.'},
 {id:'wind-03',type:'High Wind',location:locations[1],startTime:'20 Sep, 06:00',duration:'8 hours',severity:'High',anomalyMagnitude:'+41%',confidence:.88,step:3,explanation:'Coastal pressure gradient drives sustained winds above the seasonal norm.'},
 {id:'temp-04',type:'Persistent Temperature Anomaly',location:locations[4],startTime:'21 Sep, 12:00',duration:'22 hours',severity:'Watch',anomalyMagnitude:'+5.4°C',confidence:.83,step:4,explanation:'Multi-step warm signal remains elevated relative to the baseline.'}
];
export const anomaly: AnomalyData = { isolation_forest_score:.91, risk_level:'Extreme', confidence:.94, detected_variables:['temperature','rainfall','heat'], explanation:'Unusual rainfall and temperature conditions detected relative to the historical baseline.' };
