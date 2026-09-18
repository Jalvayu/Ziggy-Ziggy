export type WeatherVariable = 'temperature' | 'rainfall' | 'wind' | 'heat';
export type RiskLevel = 'Normal' | 'Watch' | 'High' | 'Extreme';
export interface Location { id: string; name: string; region: string; latitude: number; longitude: number; }
export interface WeatherData { location: Location; timestamp: string; temperature: number; rainfall: number; wind_speed: number; humidity: number; apparent_temperature: number; temperature_anomaly: number; rainfall_anomaly: number; wind_anomaly: number; heat_anomaly: number; risk_level: RiskLevel; confidence: number; }
export interface ForecastPoint extends WeatherData { step: number; label: string; }
export interface AnomalyData { isolation_forest_score: number; risk_level: RiskLevel; confidence: number; detected_variables: string[]; explanation: string; }
export interface AIResult extends AnomalyData {}
export interface ExtremeEvent { id: string; type: string; location: Location; startTime: string; duration: string; severity: RiskLevel; anomalyMagnitude: string; confidence: number; explanation: string; step: number; }
export interface DashboardData { forecast: ForecastPoint[]; selected: WeatherData; anomaly: AIResult; events: ExtremeEvent[]; }
