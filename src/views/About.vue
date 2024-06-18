<template>
    <div class="about-container">
      <h1>About Personal Calendar Project</h1>
  
      <section class="feature">
        <h2>Tính năng và Lợi ích</h2>
        <ul>
          <li><strong>Quản lý lịch trình cá nhân:</strong> Người dùng có thể tạo và quản lý các sự kiện, công việc, hoạt động cá nhân theo ngày, tuần, tháng.</li>
          <li><strong>Thông báo và nhắc nhở:</strong> Đồ án cung cấp tính năng nhắc nhở qua email hoặc thông báo trực tiếp trên ứng dụng, giúp người dùng không bỏ lỡ các sự kiện quan trọng.</li>
          <li><strong>Chia sẻ lịch làm việc:</strong> Người dùng có thể chia sẻ lịch làm việc của mình với người khác, hữu ích cho việc làm việc nhóm hoặc quản lý công việc gia đình.</li>
          <li><strong>Đa nền tảng và tiện dụng:</strong> Đồ án được phát triển để hoạt động trên nhiều nền tảng, bao gồm desktop và thiết bị di động, đảm bảo sự tiện lợi và linh hoạt cho người dùng.</li>
          <li><strong>Bảo mật thông tin:</strong> Các thông tin cá nhân và lịch trình của người dùng được bảo vệ chặt chẽ, đảm bảo an toàn và riêng tư.</li>
        </ul>
      </section>
  
      <section class="future">
        <h2>Định hướng tương lai</h2>
        <p>Đồ án Lịch cá nhân của tôi không ngừng phát triển và cải tiến để mang lại trải nghiệm tốt nhất cho người dùng. Những hướng đi trong tương lai bao gồm:</p>
        <ul>
          <li>Tối ưu hóa giao diện người dùng để dễ dàng sử dụng hơn.</li>
          <li>Mở rộng tính năng chia sẻ lịch và làm việc nhóm.</li>
          <li>Thêm tính năng đồng bộ hóa với các dịch vụ lưu trữ đám mây.</li>
          <li>Cải thiện tính năng nhắc nhở và thông báo.</li>
          <li>Nghiên cứu và tích hợp các công nghệ mới để nâng cao hiệu suất và độ tin cậy của ứng dụng.</li>
        </ul>
      </section>
  
      <footer class="footer">
        <div class="footer-content">
          <p>Designed by ThanhHai</p>
          <p>Phone: 0338660406</p>
          <div class="social-icons">
            <a href="mailto:youremail@gmail.com" target="_blank">
  <i class="fa fa-envelope"></i>
</a>

            <a href="https://www.facebook.com/thanh.hai.13377?mibextid=ZbWKwL" target="_blank">
              <img src="../assets/facebook (1).png" alt="">
            </a>
            <a href="https://zalo.me/yourzalo" target="_blank">
                <img src="../assets/gmail.png" alt="">
            </a>
            <a href="https://github.com/ThanhHai133" target="_blank">
                <img src="../assets/github.png" alt="">
            </a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  /* Reset và cài đặt chung */
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  img{
    width: 25px;
  }
  .about-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 160px); /* Giữ khoảng cách đủ để footer không bị trùng lên */
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  .feature,
  .future {
    margin-bottom: 40px;
  }
  
  .feature ul,
  .future ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .feature h2,
  .future h2 {
    margin-bottom: 10px;
    color: #007bff;
  }
  
  .feature li,
  .future li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
  
  /* Footer styles */
  .footer {
    background-color:  var( --primary-alt );
    color: white;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    max-width: 800px;
    margin: auto;
  }
  
  .footer p {
    margin-bottom: 10px;
  }
  
  .social-icons {
    margin-top: 10px;
  }
  
  .social-icons a {
    color: white;
    font-size: 20px;
    margin: 0 10px;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  
  @media (max-width: 768px) {
    .about-container {
      padding: 10px;
    }
  }
  </style>
    