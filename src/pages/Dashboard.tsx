import { useEffect, useState } from 'react';
import { forecast, anomaly, events } from '../data/mockWeather';
import { WeatherVariable } from '../types/weather';
import Sidebar from '../components/Sidebar';
import WeatherMap from '../components/WeatherMap';
import TimeSlider from '../components/TimeSlider';
import WeatherStats from '../components/WeatherStats';
import AIInsight from '../components/AIInsight';
import EventCard from '../components/EventCard';
import ForecastChart from '../components/ForecastChart';
export default function Dashboard(){const [variable,setVariable]=useState<WeatherVariable>('temperature');const [index,setIndex]=useState(2);const [duration,setDuration]=useState(72);const [location,setLocation]=useState('New Delhi');const [playing,setPlaying]=useState(false);const point={...forecast[index],location:{...forecast[index].location,name:location}};useEffect(()=>{if(!playing)return;const id=window.setInterval(()=>setIndex(i=>{if(i>=forecast.length-1){setPlaying(false);return i}return i+1}),1800);return()=>clearInterval(id)},[playing]);return <div className="page"><div className="page-intro"><div><div className="eyebrow">NATIONAL FORECAST INTELLIGENCE</div><h1>Extreme weather overview</h1><p>Medium-range anomaly monitoring across South Asia.</p></div><div className="data-source"><span className="pulse"/> Prototype data <small>Simulated</small></div></div><div className="dashboard-grid"><Sidebar {...{variable,setVariable,location,setLocation,duration,setDuration}}/><div className="map-column"><WeatherMap point={point}/><TimeSlider index={index} setIndex={setIndex} playing={playing} setPlaying={setPlaying} labels={forecast.map(p=>p.label)}/><WeatherStats point={point} variable={variable}/><div className="two-col"><AIInsight data={{...anomaly,confidence:point.confidence}}/><section className="panel events-panel"><div className="panel-title"><div><div className="eyebrow">DETECTED EVENTS</div><h2>Extreme Events</h2></div><a href="/events">View all →</a></div>{events.slice(0,2).map(e=><EventCard event={e} key={e.id}/>)}</section></div><ForecastChart data={forecast} variable={variable}/></div></div></div>}
