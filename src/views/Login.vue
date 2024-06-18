<template>
    <div class="container">
      <!-- Nếu đã đăng nhập thì hiển thị thông tin người dùng và nút Đăng xuất, ngược lại hiển thị form đăng nhập -->
      <div v-if="isSignedIn">
        <div style="text-align: center">
          <img :src="userPhotoURL" alt="User avatar" style="border-radius: 50%; width: 100px; height: 100px;">
          <h2>Welcome, {{ userDisplayName }}</h2>
          <button @click="signOut" class="btn_out">Sign out</button>
        </div>
      </div>
      <div v-else>
        <div v-if="!signInInProgress">
          <form @submit.prevent="signInWithGoogle">
            <div class="row">
              <h2 style="text-align:center">Login with Social Media or Manually</h2>
              <div class="vl">
                <span class="vl-innertext">or</span>
              </div>
      
              <div class="col">
                <a href="#" class="fb btn">
                  <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
                <a href="#" class="twitter btn">
                  <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                </a>
                <a href="#" class="google btn" @click.prevent="signInWithGoogle">
                  <i class="fa fa-google fa-fw"></i> Login with Google
                </a>
              </div>
      
              <div class="col">
                <div class="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>
      
                <input type="text" v-model="username" name="username" placeholder="Username" required>
                <input type="password" v-model="password" name="password" placeholder="Password" required>
                <input type="submit" value="Login">
              </div>
            </div>
          </form>
        </div>
        <div v-if="signInInProgress">
          <p>Signing in...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { auth, signInWithPopup, GoogleAuthProvider } from '../firebase/index.js';
  import { useAuthStore } from '../stores/auth';
  import { ref } from 'vue';
  
  const { isSignedIn, userDisplayName, userPhotoURL } = useAuthStore();
  const signInInProgress = ref(false);
  const username = ref('');
  const password = ref('');
  
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInInProgress.value = true;
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in: ', result.user);
      isSignedIn.value = true;
      userDisplayName.value = result.user.displayName;
      userPhotoURL.value = result.user.photoURL;
    } catch (error) {
      console.error('Error signing in with Google: ', error);
      alert('Failed to sign in: ' + error.message);
    } finally {
      signInInProgress.value = false;
    }
  };
  
  const signOut = async () => {
    try {
      await auth.signOut();
      isSignedIn.value = false;
      userDisplayName.value = '';
      userPhotoURL.value = '';
    } catch (error) {
      console.error('Error signing out: ', error);
      alert('Failed to sign out: ' + error.message);
    }
  };
  </script>
  
  
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  .container {
    position: relative;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px 0 30px 0;
    max-width: 800px;
    margin: auto; /* Căn giữa container */
  }
  
  input,
  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
  }
  
  input:hover,
  .btn:hover {
    opacity: 1;
  }
  
  .fb {
    background-color: #3B5998;
    color: white;
  }
  
  .twitter {
    background-color: #55ACEE;
    color: white;
  }
  
  .google {
    background-color: #dd4b39;
    color: white;
  }
  
  input[type=submit] {
    background-color: #04AA6D;
    color: white;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  .col {
    float: left;
    width: 50%;
    margin: auto;
    padding: 0 50px;
    margin-top: 6px;
  }
  
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .vl {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid #ddd;
    height: 175px;
  }
  
  .vl-innertext {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 8px 10px;
  }
  
  .hide-md-lg {
    display: none;
  }
  
  .bottom-container {
    text-align: center;
    background-color: #666;
    border-radius: 0px 0px 4px 4px;
  }
  .btn_out {
  background-color: #e74c3c; /* Màu đỏ chọn lọc */
  width: 80%;
  height: 40px;
  color: white; /* Màu chữ là trắng để tương phản */
  border: none; /* Loại bỏ viền */
  border-radius: 4px; /* Đường viền cong */
  cursor: pointer; /* Con trỏ tay khi rê chuột qua nút */
  font-size: 16px; /* Cỡ chữ */
}

.btn_out:hover {
  background-color: #c0392b; /* Màu đỏ khi rê chuột qua */
}
  @media screen and (max-width: 650px) {
    .col {
      width: 100%;
      margin-top: 0;
    }
  
    .vl {
      display: none;
    }
  
    .hide-md-lg {
      display: block;
      text-align: center;
    }
  }
  </style>
  