# Spice Garden Restaurant - Backend API

Backend REST API for Spice Garden Restaurant built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Nodemailer** - Email service
- **Express Validator** - Input validation
- **Multer** - File uploads

## 📁 Folder Structure

```
server/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   ├── validators/      # Input validation schemas
│   ├── uploads/         # Temporary file uploads
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
├── .env                 # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### Steps

1. **Install dependencies**
```bash
cd server
npm install
```

2. **Configure environment variables**
```bash
# Copy .env and fill in your values
```

Required variables:
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `CLOUDINARY_*` - Cloudinary credentials
- `EMAIL_USER` - SMTP email
- `EMAIL_PASS` - SMTP password

3. **Start development server**
```bash
npm run dev
```

4. **Start production server**
```bash
npm start
```

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register     # Register new user
POST   /api/auth/login        # Login user
POST   /api/auth/logout       # Logout user
GET    /api/auth/me           # Get current user
```

### Menu
```
GET    /api/menu              # Get all menu items
GET    /api/menu/:id          # Get single item
POST   /api/menu              # Create item (admin)
PUT    /api/menu/:id          # Update item (admin)
DELETE /api/menu/:id          # Delete item (admin)
```

### Reservations
```
GET    /api/reservations      # Get all reservations (admin)
GET    /api/reservations/:id  # Get single reservation
POST   /api/reservations      # Create reservation
PUT    /api/reservations/:id  # Update reservation
DELETE /api/reservations/:id  # Cancel reservation
```

### Contact
```
POST   /api/contact           # Send contact message
GET    /api/contact           # Get all messages (admin)
```

### Blog
```
GET    /api/blog              # Get all posts
GET    /api/blog/:slug        # Get post by slug
POST   /api/blog              # Create post (admin)
PUT    /api/blog/:id          # Update post (admin)
DELETE /api/blog/:id          # Delete post (admin)
```

### Gallery
```
GET    /api/gallery           # Get all images
POST   /api/gallery           # Upload image (admin)
DELETE /api/gallery/:id       # Delete image (admin)
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:
- Tokens are sent via HTTP-only cookies
- Protected routes require valid token
- Token expires in 7 days (configurable)

## 🛡️ Security Features

- Password hashing with bcrypt
- HTTP-only cookies for JWT
- CORS configuration
- Input validation
- XSS protection
- Rate limiting (TODO)
- Helmet security headers (TODO)

## 📧 Email Service

Using Nodemailer for:
- Reservation confirmations
- Contact form responses
- Newsletter subscriptions
- Password reset (TODO)

## 📦 Database Models

### User
- Name, Email, Password
- Role (user/admin)
- Timestamps

### Menu Item
- Name, Description, Price
- Category, Rating
- Image, Ingredients
- Available status

### Reservation
- User details
- Date, Time, Guests
- Occasion, Special requests
- Status (pending/confirmed/cancelled)

### Blog Post
- Title, Slug, Content
- Author, Category
- Image, Tags
- Published status

### Contact Message
- Name, Email, Phone
- Subject, Message
- Status (new/read/replied)

### Gallery Image
- Title, Description
- Category, Image URL
- Upload date

## 🚀 Deployment

### Environment Variables
Set all required variables in production environment

### Database
- Use MongoDB Atlas for production
- Enable IP whitelist
- Create database user

### Image Storage
- Configure Cloudinary credentials
- Set up upload presets

### Email Service
- Use production SMTP service
- Configure SPF/DKIM records

## 🔄 API Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message"
}
```

## 📝 Development Workflow

1. Create feature branch
2. Implement changes
3. Test endpoints with Postman/Insomnia
4. Commit with meaningful message
5. Push to repository

## 🧪 Testing

```bash
# TODO: Add testing framework
npm test
```

## 📚 Documentation

API documentation will be added using:
- Swagger/OpenAPI
- Postman Collection

## 🤝 Contributing

This is a portfolio project. For issues or suggestions, please open an issue.

## 📄 License

Open source for portfolio purposes.

## 👨‍💻 Author

**Junaid Gondal**
- GitHub: [@junaid-gondal](https://github.com/junaid-gondal)

---

**Phase 2 - Backend Development In Progress**
