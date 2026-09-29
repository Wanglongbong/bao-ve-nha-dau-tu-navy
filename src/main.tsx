import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Ấn bản Sổ Nhật Ký Hoàng Gia: Toàn bộ hệ thống hoạt động trên nền Xanh Navy Bvlgari & Chữ Vàng Sáng
document.documentElement.setAttribute('data-theme', 'navy');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
