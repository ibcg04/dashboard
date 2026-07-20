import { useEffect, useState } from 'react';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

interface FetchState {
  data: OpenMeteoResponse | undefined;
  isLoading: boolean;
  error: string | undefined;
}

const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  Guayaquil: { latitude: -2.1962, longitude: -79.8862 },
  Quito: { latitude: -0.1807, longitude: -78.4678 },
  Manta: { latitude: -0.9471, longitude: -80.7089 },
  Cuenca: { latitude: -2.9006, longitude: -79.0045 },
};

export default function useFetchData(selectedOption: string | null): FetchState {
  const [data, setData] = useState<OpenMeteoResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();
    const cityConfig = selectedOption != null ? CITY_COORDS[selectedOption] : CITY_COORDS.Guayaquil;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature`;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(undefined);

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('No se pudo obtener el pronostico del clima.');
        }

        const jsonData: OpenMeteoResponse = await response.json();
        setData(jsonData);
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          return;
        }

        setError(
          fetchError instanceof Error
            ? fetchError.message
            : 'Ocurrio un error inesperado al cargar los datos.',
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [selectedOption]);

  return { data, isLoading, error };
}
