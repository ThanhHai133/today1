<template>
    <div class="weather">
      <h1>Weather Forecast</h1>
  
      <!-- Current Weather Section -->
      <div class="weather-info">
        <h2>Current Weather</h2>
        <p><strong>Temperature:</strong> {{ currentTemperature }} &#8451;</p>
        <p><strong>Wind Speed:</strong> {{ currentWindSpeed }} m/s</p>
      </div>
  
      <!-- Hourly Weather Forecast Section -->
      <div class="weather-info">
        <h2>Hourly Weather Forecast</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (&#8451;)</th>
              <th>Relative Humidity (%)</th>
              <th>Wind Speed (m/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hour, index) in hourlyForecast" :key="index">
              <td>{{ hour.time }}</td>
              <td>{{ hour.temperature }} &#8451;</td>
              <td>{{ hour.relativeHumidity }} %</td>
              <td>{{ hour.windSpeed }} m/s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentTemperature = ref('');
  const currentWindSpeed = ref('');
  const hourlyForecast = ref([]);
  
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
  
  onMounted(async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Update current weather
      currentTemperature.value = data.current.temperature_2m.toFixed(1);
      currentWindSpeed.value = data.current.wind_speed_10m.toFixed(1);
  
      // Get only the latest 4 hours of hourly forecast
      const latestHours = data.hourly.time.slice(0, 4);
      latestHours.forEach((hour, index) => {
        hourlyForecast.value.push({
          time: hour,
          temperature: data.hourly.temperature_2m[index].toFixed(1),
          relativeHumidity: data.hourly.relative_humidity_2m[index],
          windSpeed: data.hourly.wind_speed_10m[index].toFixed(1)
        });
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  });
  </script>
  
  
  <style scoped>
  .weather {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .weather-info {
    margin-top: 20px;
  }
  
  .weather-info h2 {
    margin-bottom: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th, table td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  table th {
    background-color: #f2f2f2;
  }
  </style>
  