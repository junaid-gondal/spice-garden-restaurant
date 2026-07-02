# 🍽️ Spice Garden Restaurant

A premium, fully responsive multi-cuisine restaurant website built with React, featuring modern UI/UX, smooth animations, and production-ready code.

![Spice Garden](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200)

## 🌟 Features

### Core Features
- ✅ **8 Complete Pages**: Home, Menu, About, Gallery, Blog, Single Blog, Reservation, Contact
- ✅ **Fully Responsive**: Optimized for all devices (320px - 1920px+)
- ✅ **Modern Animations**: Framer Motion for smooth transitions and interactions
- ✅ **Form Validation**: React Hook Form with comprehensive validation
- ✅ **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- ✅ **Performance**: Lazy loading, code splitting, optimized images
- ✅ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

### Page Highlights

#### 🏠 Home Page
- Hero section with animated statistics
- Featured dishes showcase
- About preview with timeline
- Why choose us section
- Popular menu with filtering
- Image gallery preview
- Customer testimonials carousel
- Newsletter subscription

#### 🍕 Menu Page
- Live search functionality
- Category filters (8 categories)
- Price sorting
- Grid/List toggle view
- Favorites system
- Detailed dish cards with ratings, calories, ingredients
- Availability badges

#### ℹ️ About Page
- Company timeline (2010-2026)
- Mission & Vision
- Meet the chefs
- Awards & achievements
- Animated statistics counters
- Restaurant virtual tour
- FAQ accordion

#### 🖼️ Gallery Page
- Masonry grid layout
- Category filters
- Lightbox modal with keyboard navigation
- Lazy loading
- Load more pagination (12 initial, +6 increment)
- 30 high-quality images

#### 📝 Blog Page
- Featured post section
- Search functionality
- Category filters
- Sidebar widgets (Recent posts, Tags, Newsletter)
- Pagination (6 posts per page)
- Single blog post with related articles

#### 📅 Reservation Page
- Interactive booking form
- Guest selector
- Date picker
- Time slot selector
- Occasion dropdown
- Live reservation summary
- Success modal

#### 📧 Contact Page
- Contact form with validation
- Google Maps integration
- Business hours display
- Social media links
- Contact info cards
- FAQ section

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React version
- **Vite 8** - Fast build tool
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion 12** - Animation library
- **React Hook Form 7** - Form validation
- **React Icons 5** - Icon library
- **Swiper 14** - Touch slider
- **React Helmet Async** - SEO management

### Development
- **ESLint 10** - Code linting
- **PostCSS** - CSS processing

## 📁 Folder Structure

```
spice-garden/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── SEO.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   └── ScrollProgress.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── cards/
│   │   │   └── FoodCard.jsx
│   │   ├── ui/
│   │   └── sections/
│   │       ├── home/
│   │       ├── menu/
│   │       ├── about/
│   │       ├── gallery/
│   │       ├── blog/
│   │       ├── reservation/
│   │       └── contact/
│   ├── constants/
│   │   ├── colors.js
│   │   ├── spacing.js
│   │   ├── typography.js
│   │   ├── theme.js
│   │   └── siteConfig.js
│   ├── data/
│   │   ├── menuData.js
│   │   ├── blogPosts.js
│   │   ├── galleryData.js
│   │   ├── chefs.js
│   │   ├── testimonials.js
│   │   └── ...
│   ├── hooks/
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── Menu/
│   │   ├── About/
│   │   ├── Gallery/
│   │   ├── Blog/
│   │   ├── SingleBlog/
│   │   ├── Reservation/
│   │   ├── Contact/
│   │   └── NotFound/
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── menuService.js
│   │   ├── blogService.js
│   │   ├── reservationService.js
│   │   └── contactService.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── formatCurrency.js
│   │   └── scrollToTop.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js 18+ and npm

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/junaid-gondal/spice-garden-restaurant.git
cd spice-garden-restaurant
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env
```

4. **Start development server**
```bash
npm run dev
```

5. **Open browser**
```
http://localhost:5173
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Design System

### Colors
- Primary: `#0F172A` (Dark Navy)
- Secondary: `#D4AF37` (Gold)
- Background: `#F8F8F8` (Light Gray)
- Text: `#333333`
- White: `#FFFFFF`

### Typography
- Font Family: System fonts
- Headings: Bold, responsive sizing
- Body: Regular, 16px base

### Spacing
- Sections: `py-24` (96px)
- Cards: `p-6` / `p-8`
- Consistent 8px grid system

## 📱 Responsive Breakpoints
- Mobile: 320px - 640px
- Tablet: 768px - 1024px
- Desktop: 1280px+
- Large: 1920px+

## ✨ Key Highlights

### Performance
- ⚡ Vite for lightning-fast HMR
- 🖼️ Lazy image loading
- 📦 Code splitting per route
- 🎯 Optimized bundle size

### User Experience
- 🎭 Smooth page transitions
- 🔍 Live search functionality
- ❤️ Interactive favorites system
- 🌓 Hover effects throughout
- ⌨️ Keyboard navigation support

### Developer Experience
- 📁 Clean folder structure
- 🔧 Reusable components
- 📝 Comprehensive data files
- 🛠️ Service layer for API calls
- 📚 Well-commented code

## 🔮 Future Enhancements (Phase 2)

### Backend Integration
- [ ] Node.js/Express API
- [ ] MongoDB database
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Real-time reservations
- [ ] Payment integration
- [ ] Email notifications
- [ ] Image uploads

### Additional Features
- [ ] User accounts & profiles
- [ ] Order tracking
- [ ] Review system
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics

## 📊 Lighthouse Scores

Target scores for production:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Configure environment variables
4. Deploy

### Manual Build
```bash
npm run build
```
Deploy the `dist` folder to any static hosting service.

## 🤝 Contributing

This is a portfolio/freelance project. For suggestions or issues, please open an issue on GitHub.

## 📄 License

This project is open source and available for portfolio purposes.

## 👨‍💻 Author

**Junaid Gondal**
- GitHub: [@junaid-gondal](https://github.com/junaid-gondal)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons)
- Fonts from Google Fonts

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
