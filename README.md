# Proyecto 04: Dashboard - React

Dashboard meteorologico desarrollado con React, TypeScript, Vite y componentes de Material UI. La aplicacion consume datos reales de la API de Open-Meteo y muestra indicadores, una tabla y un grafico que se actualizan segun la ciudad seleccionada.

## Descripcion

El proyecto permite consultar el clima de distintas ciudades de Ecuador mediante una peticion asincronica a Open-Meteo. Al seleccionar una ciudad, la aplicacion obtiene las coordenadas correspondientes, solicita informacion actual y pronostico por hora, y actualiza los componentes principales del dashboard.

## Funcionalidades

- Consulta asincronica a la API de Open-Meteo.
- Selector de ciudad para cambiar el contenido mostrado.
- Indicadores con datos actuales de temperatura, sensacion termica, viento y humedad.
- Tabla con datos horarios cargados desde la API.
- Grafico de lineas con temperatura y sensacion termica por hora.
- Estados de carga y error para mejorar la experiencia de usuario.

## Componentes Principales

- `SelectorUI`: permite seleccionar la ciudad que se desea consultar.
- `useFetchData`: hook encargado de realizar la peticion a Open-Meteo y manejar los estados de carga, error y datos.
- `IndicatorUI`: muestra indicadores resumidos del clima actual.
- `TableUI`: presenta datos horarios en una tabla usando `DataGrid`.
- `ChartUI`: visualiza los datos horarios en un grafico de lineas.

## Flujo de Datos

1. El usuario selecciona una ciudad en el componente `SelectorUI`.
2. `App` guarda la ciudad seleccionada en el estado `selectedOption`.
3. El hook `useFetchData` recibe la ciudad y hace una peticion a la API de Open-Meteo.
4. Los datos obtenidos se pasan a los indicadores, la tabla y el grafico.
5. Cuando se cambia la ciudad, los componentes se actualizan con la nueva informacion.

## API Utilizada

El dashboard consume la API publica de Open-Meteo:

```txt
https://api.open-meteo.com/v1/forecast
```

Variables consultadas:

- `temperature_2m`
- `relative_humidity_2m`
- `wind_speed_10m`
- `apparent_temperature`

## Instalacion y Ejecucion

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Generar version de produccion:

```bash
npm run build
```

## Tecnologias

- React
- TypeScript
- Vite
- Material UI
- MUI X Data Grid
- MUI X Charts
- Open-Meteo API
