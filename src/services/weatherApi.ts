import { api } from './weatherApi';
import { anomaly, events, forecast } from '../data/mockWeather';
export const getWeather = async () => forecast[0];
export const getForecast = async () => forecast;
export const getAnomalies = async () => anomaly;
export const getExtremeEvents = async () => events;
void api;
