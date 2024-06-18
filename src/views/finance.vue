<template>
    <div class="stock-market">
      <h1>Stock Market Information</h1>
  
      <div v-if="isLoading">Loading...</div>
  
      <div v-if="!isLoading && stockData">
        <h2>{{ stockData['Meta Data']['2. Symbol'] }}</h2>
        <p>Last Refreshed: {{ stockData['Meta Data']['3. Last Refreshed'] }}</p>
        <p>Open: {{ stockData['Time Series (Daily)'][lastRefreshed]['1. open'] }}</p>
        <p>High: {{ stockData['Time Series (Daily)'][lastRefreshed]['2. high'] }}</p>
        <p>Low: {{ stockData['Time Series (Daily)'][lastRefreshed]['3. low'] }}</p>
        <p>Close: {{ stockData['Time Series (Daily)'][lastRefreshed]['4. close'] }}</p>
        <p>Volume: {{ stockData['Time Series (Daily)'][lastRefreshed]['5. volume'] }}</p>
      </div>
  
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const apiKey = 'E9ASHBYNSZJIQRQ9';
  const symbol = 'IBM';
  const lastRefreshed = '2022-06-17'; // Replace with actual latest date from API response
  
  const stockData = ref(null);
  const isLoading = ref(true);
  const errorMessage = ref('');
  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
      const data = await response.json();
  
      if (data['Meta Data']) {
        stockData.value = data;
        isLoading.value = false;
      } else if (data['Error Message']) {
        errorMessage.value = data['Error Message'];
        isLoading.value = false;
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      errorMessage.value = 'Failed to fetch stock data.';
      isLoading.value = false;
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  </script>
  
  <style scoped>
  .stock-market {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: left;
  }
  
  .stock-market h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .stock-market h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .stock-market p {
    margin-bottom: 5px;
  }
  </style>
  