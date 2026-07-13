import { useEffect, useState } from 'react';
import type { OpenMeteoResponse } from '../types/DashboardTypes';


export default function useFetchdata() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FChicago'
  const [data, setData] = useState<OpenMeteoResponse | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData: OpenMeteoResponse = await response.json();

      setData(jsonData);
    };

    fetchData();
  }, []);

  return data;
}
