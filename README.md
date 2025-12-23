# 🪄 Background Remover SaaS  
**AI-powered background removal with subscription plans & Razorpay payments**

A full-stack web application that allows users to upload images, automatically remove backgrounds using AI, and access premium features through **subscription plans** powered by **Razorpay payment integration**.

---

## 🚀 Features

### ✂️ Core Functionality
- Upload image (PNG / JPG / JPEG)
- Automatic background removal using AI
- Preview before & after result
- Download processed image (transparent PNG)

### 🔐 Authentication
- User signup & login
- Secure session handling
- User dashboard

### 💳 Subscription & Payments
- Free & paid subscription plans
- Razorpay payment gateway integration
- Monthly / yearly plans
- Payment verification & webhook handling
- Access control based on subscription status

### 📊 User Dashboard
- Upload history
- Remaining credits (for free users)
- Subscription status & renewal info
- Download history

---

## 🧱 Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- JWT Authentication
- REST APIs

### Database
- MongoDB

### Payments
- Razorpay
- Razorpay Orders API
- Webhook verification

### AI / Image Processing
- Background Removal API (e.g. Remove.bg / custom ML service)

---
## 💳 Razorpay Payment Flow

1. User selects a subscription plan  
2. Backend creates Razorpay order  
3. Frontend opens Razorpay Checkout  
4. Payment completed by user  
5. Razorpay sends webhook  
6. Backend verifies payment signature  
7. Subscription activated for user  
