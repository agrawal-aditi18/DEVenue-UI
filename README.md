# 💻 DEVenue UI

**DEVenue** is a social platform for developers — a place where coders can connect, collaborate, and grow together.  
This repository contains the **frontend** (React + Vite + Tailwind + Redux) for DEVenue.

---

## 🚀 Features

- Built using **Vite + React**
- **Tailwind CSS** for responsive styling
- **shadcn/ui + DaisyUI** components
- **React Router DOM** for client-side routing
- **Redux Toolkit** for global state management
- **Axios** for API calls
- **JWT-based authentication**
- Protected routes (login required)
- Dynamic Navbar updates on login/logout
- Feed with developer profiles
- Connection requests (send, accept, reject)
- Edit profile with toast notifications
- Connections page (view all connections)
- Responsive UI & clean code structure

---

## 🧱 Project Structure

```
DEVenue-UI/
│
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/            # Route pages (Feed, Login, Profile, Connections)
│   ├── redux/            # Redux slices and store
│   ├── utils/            # Constants, API helpers, and config files
│   ├── App.jsx           # Main App entry
│   └── main.jsx          # React entry point
│
├── public/
├── package.json
└── tailwind.config.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/devenue-ui.git
cd devenue-ui
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Development Server
```bash
npm run dev
```

---

## 🔐 Authentication Flow

- Login via backend API (JWT-based)
- Token stored in cookies
- Protected routes redirect unauthenticated users to `/login`
- Navbar updates dynamically after login/logout

---

## 🌐 Deployment Guide (AWS EC2 + Nginx)

### 1️⃣ Launch EC2 Instance
- Signup on AWS and create a new Ubuntu instance  
- SSH into instance:
```bash
chmod 400 <secret>.pem
ssh -i "devenue-key.pem" ubuntu@<your-ec2-ip>
```

### 2️⃣ Install Node.js & Git
```bash
sudo apt update
sudo apt install nodejs npm git
node -v
npm -v
```

### 3️⃣ Clone Project & Build
```bash
git clone https://github.com/your-username/devenue-ui.git
cd devenue-ui
npm install
npm run build
```

### 4️⃣ Install & Configure Nginx
```bash
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
```

### 5️⃣ Enable Port 80 in EC2 Security Group  
Visit your instance → **Security → Inbound rules → Add rule → HTTP (port 80)**  

Your site will now be available at:  
➡️ **http://<your-ec2-ip>**

---

## ⚡ Nginx Reverse Proxy Setup (Frontend + Backend)

Example configuration at `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80;
    server_name <your-ec2-ip>;

    location / {
        root /var/www/html;
        index index.html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Reload Nginx:
```bash
sudo systemctl restart nginx
```

---

## 🧠 Tech Stack

| Frontend | Backend | Tools |
|-----------|----------|--------|
| React + Vite | Node.js + Express | Git, Nginx |
| Tailwind CSS | MongoDB (Atlas) | AWS EC2 |
| Redux Toolkit | JWT Auth | PM2 |
| Axios | CORS Enabled | |

---

## 👥 Routes Overview

| Route | Component | Description |
|--------|------------|-------------|
| `/` | Feed | Developer feed |
| `/login` | Login | User authentication |
| `/connections` | Connections | View all connections |
| `/profile` | Profile | Edit and view user profile |
| `/requests` | Requests | Accept or reject requests |

---

## 🧩 Redux Store Flow

- `authSlice` → manages user login state  
- `feedSlice` → manages feed and connections  
- `profileSlice` → manages profile data  
- Connected through `configureStore` and `<Provider>`

 




