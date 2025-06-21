# AMRR
Assignment from AMRR TechSols.

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MohitMahara/AMRR.git
cd AMRR
```

### 3️⃣ Frontend Setup
```sh
cd client
npm install  # Install dependencies
npm start    # Run the frontend server
```

### 2️⃣ Backend Setup
```sh
cd server
npm install  # Install dependencies
npm run server    # Run the backend server
```

## ⚙️ Environment Variables

Create a `.env` file in the root of the `client` directory and add:
```
VITE_SERVER_API=your-server-url (eg: http://localhost:8000)

```

Create a `.env` file in the root of the `server` directory and add:
```
MONGO_URI=your-mongodb-url
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY= cloudinary-api-key
CLOUDINARY_SECRET=cloudinary-secret
EMAIL_USER=email-for-nodemailer
EMAIL_PASS=email-password
PORT=5000
```
