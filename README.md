# DevLaunch

DevLaunch is a modern, responsive React landing page for a tech learning program designed to help aspiring developers build practical skills, work on real projects, and prepare for career opportunities in technology.

This project showcases the DevLaunch experience through an engaging homepage, program highlights, curriculum overview, mentor profiles, testimonials, FAQs, and call-to-action sections for enrollment.

## Features

- Responsive, polished landing page for a coding program
- Clear hero section with strong conversion messaging
- Program overview and curriculum details
- Mentor and testimonial sections
- Frequently asked questions accordion-style layout
- Enrollment flow with signup and thank-you pages
- Accessibility-friendly navigation and skip-to-content link
- Mobile-friendly responsive design

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- PostCSS
- ESLint

## Project Structure

```bash
.
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToSection.jsx
│   │   └── SectionHeading.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Signup.jsx
│   │   ├── ThankYou.jsx
│   │   └── NotFound.jsx
│   ├── sections/
│   │   ├── CallToAction.jsx
│   │   ├── Curriculum.jsx
│   │   ├── FAQ.jsx
│   │   ├── Hero.jsx
│   │   ├── Mentors.jsx
│   │   ├── Program.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── package-lock.json
```

## Routes

- `/` — Homepage with all landing page sections
- `/signup` — Enrollment/signup page
- `/thank-you` — Confirmation page after signup
- `*` — Not found page

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

```bash
git clone https://github.com/DenisNjoroge121/wtm-devlaunch-project.git
cd wtm-devlaunch-project
npm install
```

### Run locally

```bash
npm run dev
```

This starts the Vite development server. Open the local URL shown in the terminal to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # create a production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint checks
```

## Design Notes

The application uses a modern, brand-focused visual style with a strong emphasis on user conversion and educational messaging. Tailwind CSS is used to build the layout and visual system, while React Router handles page navigation and section-based scrolling.

## License

This project is for educational/demo use and is not currently configured with a formal license file.

## Author

Denis Njoroge

## Repository

https://github.com/DenisNjoroge121/wtm-devlaunch-project
