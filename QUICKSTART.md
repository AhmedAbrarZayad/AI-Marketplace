# 🚀 Quick Start Guide

Get the AI Prompt Marketplace up and running in 5 minutes!

## Prerequisites Check

```bash
# Check Node.js version (need v18+)
node --version

# Check npm version
npm --version

# Check if MongoDB is installed (optional for local setup)
mongod --version
```

## Installation Steps

### 1. Install Dependencies

**Frontend:**
```bash
cd ai-prompt-marketplace
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 2. Configure Environment

Create `.env` file in `ai-prompt-marketplace/`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=my-super-secret-key-12345
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 3. Start MongoDB

**Option A - Local:**
```bash
mongod
```

**Option B - MongoDB Atlas:**
- Sign up at mongodb.com/atlas
- Create free cluster
- Get connection string
- Update `backend/config/db.js`

### 4. Seed Sample Data

Open MongoDB Compass or use the sample data file:
```bash
cd backend
node -e "require('./data/samplePrompts'); console.log('Data ready!')"
```

Or insert manually through MongoDB Compass.

### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
node index.js
```
✅ Backend running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd ai-prompt-marketplace
npm run dev
```
✅ Frontend running on http://localhost:3000

## 🎉 You're Ready!

Open http://localhost:3000 in your browser.

### Demo Login
- Email: `demo@example.com`
- Password: `password123`

## Quick Features Test

1. ✅ Browse landing page (7 sections)
2. ✅ Click "All Prompts" to see items
3. ✅ Use search and filter
4. ✅ Click any prompt to view details
5. ✅ Click "Login" and use demo credentials
6. ✅ After login, access "Create Prompts"
7. ✅ Fill form and create a new prompt
8. ✅ See success toast notification
9. ✅ Verify new prompt appears in list

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `backend/config/db.js`
- Try using MongoDB Atlas instead of local

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### NextAuth Error
- Check `.env` file exists
- Verify NEXTAUTH_SECRET is set
- Restart development server

## Production Deployment

### Build for Production
```bash
cd ai-prompt-marketplace
npm run build
npm start
```

### Deploy Options
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway** (for backend)
- **Heroku**
- **AWS/Azure/GCP**

## Need Help?

Check the main [README.md](./README.md) for detailed documentation.

---

Happy coding! 🎨
