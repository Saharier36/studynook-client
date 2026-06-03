# StudyNook

A polished student booking platform built with Next.js for discovering, reserving, and managing quiet study rooms.

- 🌐 Live Demo: https://studynook-zeta.vercel.app/
- 🔗 Source Code: https://github.com/Saharier36/studynook-client

## What is StudyNook?

StudyNook helps students find the right study space, book it instantly, and manage their reservations from one clean dashboard. It includes room listings, secure authentication, booking controls, and room ownership tools.

## Highlights

- ✨ Beautiful landing page with featured rooms and testimonials
- 🔍 Browse study rooms with filters and detailed info
- 🔐 Email/password + Google sign-in
- 🧾 Booking flow with My Bookings and cancellation support
- 🏠 Add, edit, and remove your own room listings
- 🌙 Light/dark theme mode
- 📱 Fully responsive for mobile, tablet, and desktop

## Tech Stack

- **Next.js 16**
- **React 19**
- **Tailwind CSS v4**
- **HeroUI**
- **Framer Motion**
- **Better Auth**
- **MongoDB**
- **Gravity UI Icons + React Icons**
- **Sonner** notifications

## Pages

### Public Pages

- `/` — homepage with hero, featured rooms, overview cards, and testimonials
- `/rooms` — browse available study rooms
- `/rooms/[id]` — room details and booking page
- `/login` — sign in page
- `/sign-up` — register a new account

### Protected Pages

- `/add-rooms` — add a new study room
- `/my-listings` — manage your listed rooms
- `/my-bookings` — review and cancel bookings

## User Flows

- Discover rooms from the homepage or room list
- View full room details and availability
- Book a room after signing in
- Cancel bookings from **My Bookings**
- Add, edit, and delete your own listings

## Environment Variables

Create a `.env` file with the following variables:

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
BETTER_AUTH_URL=your_auth_url
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Run production server
npm run lint    # Run ESLint
```

## Project Structure

```bash
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

## Notes

StudyNook is built with a modern UI focus, offering smooth animations, easy booking, and a strong mobile experience.
