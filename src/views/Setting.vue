<template>
  <div class="settings">
    <h1>Settings</h1>
    
    <!-- Chủ đề (Theme) -->
    <div class="theme-control">
      <h2>Theme</h2>
      <div class="theme-options">
        <label>
          <input type="radio" name="theme" value="light" v-model="selectedTheme" @change="changeTheme('light')" />
          Light
        </label>
        <label>
          <input type="radio" name="theme" value="dark" v-model="selectedTheme" @change="changeTheme('dark')" />
          Dark
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let selectedTheme = ref('light'); // Mặc định chủ đề là Light

function changeTheme(theme) {
  selectedTheme.value = theme;

  // Lưu chủ đề vào localStorage để lưu trữ giữa các phiên đăng nhập
  localStorage.setItem('selectedTheme', theme);

  // Thực hiện thay đổi chủ đề giao diện
  updateTheme(theme);
}

// Hàm cập nhật giao diện dựa trên chủ đề
function updateTheme(theme) {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.style.setProperty('--background-color', '#333');
    root.style.setProperty('--text-color', '#fff');
  } else {
    root.style.setProperty('--background-color', '#fff');
    root.style.setProperty('--text-color', '#333');
  }
}

// Load chủ đề đã lưu từ localStorage nếu có
if (localStorage.getItem('selectedTheme')) {
  selectedTheme.value = localStorage.getItem('selectedTheme');
  updateTheme(selectedTheme.value);
}
</script>

<style scoped>
.settings {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.theme-control {
  margin-top: 20px;
}

.theme-options {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.theme-options label {
  display: block;
}

.theme-options input {
  margin-right: 5px;
}
</style>
