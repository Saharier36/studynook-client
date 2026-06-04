# 📚 StudyNook
> A polished student booking platform built with Next.js for discovering, reserving, and managing quiet study rooms.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-studynook--zeta.vercel.app-1D9E75?style=for-the-badge)](https://studynook-zeta.vercel.app/)
[![Client Source](https://img.shields.io/badge/🔗_Client_Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Saharier36/studynook-client)
[![Server Source](https://img.shields.io/badge/🔗_Server_Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Saharier36/studynook-server)
[![Live API](https://img.shields.io/badge/🚀_Live_API-study--nook--server.vercel.app-0070F3?style=for-the-badge)](https://study-nook-server-nine.vercel.app/)

---

## ✨ What is StudyNook?
StudyNook helps students find the right study space, book it instantly, and manage their reservations from one clean dashboard. It includes room listings, secure authentication, booking controls, and room ownership tools.

---

## 🔗 Project Links

| Type | Link |
|------|------|
| 🌐 Live Client | [studynook-zeta.vercel.app](https://studynook-zeta.vercel.app/) |
| 🚀 Live API Server | [study-nook-server-nine.vercel.app](https://study-nook-server-nine.vercel.app/) |
| 💻 Client Repository | [github.com/Saharier36/studynook-client](https://github.com/Saharier36/studynook-client) |
| 🛠️ Server Repository | [github.com/Saharier36/studynook-server](https://github.com/Saharier36/studynook-server) |

---

## 🚀 Highlights

| Feature | Description |
|--------|-------------|
| 🏠 Landing Page | Beautiful hero section with featured rooms and testimonials |
| 🔍 Room Browser | Browse study rooms with filters and detailed info |
| 🔐 Authentication | Email/password + Google sign-in via Better Auth |
| 🧾 Booking Flow | My Bookings dashboard with cancellation support |
| 🏷️ Room Management | Add, edit, and remove your own room listings |
| 🌙 Theming | Light/dark mode fully supported |
| 📱 Responsive | Optimized for mobile, tablet, and desktop |

---

## 🛠️ Tech Stack

### Frontend
| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4, HeroUI |
| Animation | Framer Motion |
| Auth | Better Auth |
| Notifications | Sonner |
| Icons | Gravity UI Icons, React Icons |

### Backend
| Category | Technology |
|----------|-----------|
| Runtime | Node.js |
| Database | MongoDB |
| Auth | Better Auth |
| Hosting | Vercel |

---

## 📄 Pages

### 🌐 Public Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, featured rooms, overview cards, testimonials |
| `/rooms` | Browse all available study rooms |
| `/rooms/[id]` | Room details and booking page |
| `/login` | Sign in page |
| `/sign-up` | Register a new account |

### 🔒 Protected Pages
| Route | Description |
|-------|-------------|
| `/add-rooms` | Add a new study room |
| `/my-listings` | Manage your listed rooms |
| `/my-bookings` | Review and cancel bookings |

---

## 🔄 User Flows
1. **Discover** rooms from the homepage or room list
2. **View** full room details and availability
3. **Book** a room after signing in
4. **Cancel** bookings from My Bookings
5. **Manage** your own listings — add, edit, and delete

---

## ⚙️ Environment Variables

### Client `.env`
```env
NEXT_PUBLIC_API_URL=your_backend_api_url
BETTER_AUTH_URL=your_auth_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Server `.env`
```env
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_better_auth_secret
```

---

## 🏁 Getting Started

### Client

```bash
git clone https://github.com/Saharier36/studynook-client
cd studynook-client
npm install
npm run dev
```

### Server

```bash
git clone https://github.com/Saharier36/studynook-server
cd studynook-server
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── sign-up/
│   ├── add-rooms/
│   ├── my-bookings/
│   ├── my-listings/
│   ├── rooms/
│   │   ├── [id]/
│   │   └── page.jsx
│   ├── api/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── home/
│   ├── layout/
│   ├── framer-motion/
│   └── ui/
├── lib/
│   ├── auth.js
│   └── auth-client.js
├── service/
│   └── api.js
└── fonts/
```

---

> StudyNook is built with a modern UI focus, offering smooth animations, easy booking, and a strong mobile experience.
