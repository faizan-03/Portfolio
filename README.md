<<<<<<< HEAD
# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Responsive design for all devices
- Modern animations and transitions
- Contact form with EmailJS integration
- Dynamic content loading
- Environment variable configuration

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/faizan-ali786/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# API Keys and Public IDs
REACT_APP_GITHUB_USERNAME=your-github-username
REACT_APP_LINKEDIN_ID=your-linkedin-id
REACT_APP_INSTAGRAM_USERNAME=your-instagram-username
REACT_APP_EMAIL=your-email@example.com

# Resume/CV File Path
REACT_APP_CV_PATH=/path/to/your/cv.pdf

# Random User API for Avatars
REACT_APP_AVATAR_API_URL=https://randomuser.me/api/portraits

# Portfolio Configuration
REACT_APP_NAME="Your Name"
REACT_APP_TITLE="Your Title | Your Subtitle"
REACT_APP_DESCRIPTION="Your portfolio description goes here."

# Theme Colors
REACT_APP_PRIMARY_COLOR=#your-color-code

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your-service-id
REACT_APP_EMAILJS_TEMPLATE_ID=your-template-id
REACT_APP_EMAILJS_PUBLIC_KEY=your-public-key
REACT_APP_EMAILJS_CONTACT_FORM=your-contact-form-id
```

### 4. EmailJS Setup

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Update the `.env` file with your EmailJS credentials
4. Format your template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{budget}}` - Project budget
   - `{{interest}}` - Area of interest
   - `{{country}}` - Sender's country
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address

### 5. Start the development server

```bash
npm start
```

## Deployment

### Build for production

```bash
npm run build
```

### Environment Variables in Production

For production deployment, you have two options to handle environment variables:

#### Option 1: Create a runtime environment configuration

Create a file named `env-config.js` in the `public` folder:

```javascript
window._env_ = {
  REACT_APP_GITHUB_USERNAME: "your-github-username",
  REACT_APP_LINKEDIN_ID: "your-linkedin-id",
  REACT_APP_INSTAGRAM_USERNAME: "your-instagram-username",
  REACT_APP_EMAIL: "your-email@example.com",
  REACT_APP_CV_PATH: "/path/to/your/cv.pdf",
  REACT_APP_AVATAR_API_URL: "https://randomuser.me/api/portraits",
  REACT_APP_NAME: "Your Name",
  REACT_APP_TITLE: "Your Title | Your Subtitle",
  REACT_APP_DESCRIPTION: "Your portfolio description goes here.",
  REACT_APP_PRIMARY_COLOR: "#your-color-code",
  REACT_APP_EMAILJS_SERVICE_ID: "your-service-id",
  REACT_APP_EMAILJS_TEMPLATE_ID: "your-template-id",
  REACT_APP_EMAILJS_PUBLIC_KEY: "your-public-key",
  REACT_APP_EMAILJS_CONTACT_FORM: "your-contact-form-id"
};
```

Then include this file in your `public/index.html`:

```html
<script src="%PUBLIC_URL%/env-config.js"></script>
```

#### Option 2: Use environment variables from your hosting provider

Most hosting providers (Netlify, Vercel, etc.) allow you to set environment variables in their dashboard.

### Deploy to hosting service

Upload the contents of the `build` folder to your hosting service of choice.

## Customization

- Update the `.env` file to change your personal information
- Modify the `src/Data/data.js` file to update your skills, projects, and testimonials
- Add your own images to the `src/assets` folder
- Customize the theme colors in the `.env` file and `tailwind.config.js`

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons

## License

MIT License
=======
# Portfolio
Portfolio Website
>>>>>>> d43dd794145c9fa3bd2e21e5e20f58c6e519dfb8
