
# 🧑‍💻 Samarth Vohra's Developer Portfolio

Welcome to my personal portfolio – a full-stack MERN application that showcases my skills, projects, certifications, and contact details. This portfolio is built with **MongoDB**, **Express.js**, **React**, and **Node.js**, and serves as a hub for my work and achievements in software development and data science.

---

## 🚀 Live Demo

> 🌐 [Visit My Portfolio](https://your-portfolio-url.com)

---

## 🛠 Tech Stack

| Frontend 🖥️ | Backend ⚙️ | Database 🗄️ | Tools 🧰 |
|-------------|------------|-------------|---------|
| React.js    | Node.js    | MongoDB     | Git     |
| React Router| Express.js | Mongoose    | Nodemailer |
| CSS / Tailwind |          |             | dotenv  |

---

## 📁 Project Structure

```
portfolio/
├── client/             # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/      # About, Skills, Certificates, Projects, Contact
│   │   ├── components/ # Reusable components
│   │   ├── styles.css  # Custom styles
│   │   └── App.jsx
│   └── package.json
├── server/             # Express Backend
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Routes
│   ├── .env
│   └── server.js
└── README.md
```

---

## 🌟 Features

- 🧠 **About Section**: Introduction with circular profile image and animated cards linking to skills and certificates.
- 💼 **Projects Page**: Dynamic list of projects fetched from MongoDB.
- 🛠 **Skills & Tech**: A section showcasing technical proficiencies using styled cards.
- 🏅 **Certificates Viewer**: Displays certificates with a modal view.
- 📬 **Contact Form**: Send emails securely using Nodemailer (with Gmail app password).
- 🔒 **Backend Integration**: Uses MongoDB for storing messages, with robust validation and form handling.

---

## 📷 Screenshots

> Add screenshots here (optional):
```md
![About Page](./screenshots/about.png)
![Skills Page](./screenshots/skills.png)
![Contact Page](./screenshots/contact.png)
```

---

## ⚙️ Installation & Setup

> Make sure you have **Node.js**, **npm**, and **MongoDB** installed.

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/mern-portfolio.git
cd mern-portfolio
```

2. **Install Frontend & Backend**
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file in the `server/` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/Portfolio
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
```

4. **Run the App**
```bash
# In root folder, open two terminals:

# Terminal 1 - Start Backend
cd server
npm start

# Terminal 2 - Start Frontend
cd client
npm start
```

---

## 📫 Contact Me

Have a question or want to connect? Feel free to drop me a message via the contact form or email me directly.

📧 **samarthvohra2003@gmail.com**

🔗 [LinkedIn](https://linkedin.com/in/samarth-vohra)  
🔗 [GitHub](https://github.com/samarthvohra2003)

---

## 🛡️ Security Notes

- Emails are sent via **Gmail App Passwords** — never expose your real password.
- MongoDB is run locally by default; use a secure cloud setup (like Atlas) for production.

---

## 📌 To-Do / Improvements

- [ ] Add dark/light theme toggle 🌙☀️
- [ ] Add blog or article section 📝
- [ ] Add animations using Framer Motion 🎬
- [ ] Deploy using Vercel (frontend) and Render/Heroku (backend) 🚀

---

## ⭐️ Show Your Support

If you found this project helpful or inspiring:

**Leave a ⭐️ on [GitHub](https://github.com/samarthvohra2003/mern-portfolio)!**

---

> Built with ❤️ by **Samarth Vohra**
