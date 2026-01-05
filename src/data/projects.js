export const projects = [
  {
    id: 1,
    name: 'Public Infrastructure Issue Reporting System',
    shortDescription: 'A comprehensive digital platform for citizens to report public infrastructure issues and for government staff to manage and resolve them efficiently.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase', 'Tailwind CSS', 'Stripe'],
    description: `A comprehensive digital platform called "Potholes Patrols - Report Hub" that enables citizens to report public infrastructure issues like potholes, broken streetlights, and other community problems. Government staff can efficiently manage and resolve these issues through a dedicated dashboard.

    The frontend is built with React 18 and Vite, styled with Tailwind CSS and DaisyUI components. Features include TanStack Query for data fetching, React Hook Form for form management, Recharts for data visualization, and PDF generation capabilities. The backend uses Node.js with Express, MongoDB with Mongoose ODM, and integrates Stripe for payment processing.`,
    liveUrl: 'https://public-reporting-system-351f1.web.app',
    githubUrl: 'https://github.com/kohinurfatema/public-reporting-system-client',
    challenges: [
      'Designing and implementing an appealing, user-friendly UI',
      'Integrating multiple authentication methods with Firebase',
      'Setting up secure payment processing with Stripe',
      'Managing complex state across citizen and admin dashboards',
    ],
    improvements: [
      'Add real-time issue tracking with push notifications',
      'Implement AI-powered automatic issue categorization',
      'Add Google Maps integration for precise location marking',
      'Create a mobile app version for easier on-the-go reporting',
    ],
  },
  {
    id: 2,
    name: 'CareNest',
    shortDescription: 'A caregiving platform connecting families with verified, trained caregivers for baby care, elderly care, and sick people care services.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    description: `CareNest is a comprehensive caregiving platform that connects families with verified, trained caregivers for various home care needs. The platform offers three main services: Baby Care for professional babysitting, Elderly Care for compassionate support and medical assistance, and Sick People Care for specialized home healthcare.

    Built with Next.js for optimal performance and SEO, the application features a clean, modern UI with service booking functionality, user authentication, and a booking management system. The platform serves families across 8 divisions with 24/7 customer support availability.`,
    liveUrl: 'https://carenest-xi.vercel.app',
    githubUrl: 'https://github.com/kohinurfatema/carenest',
    challenges: [
      'Implementing a clean and intuitive service booking flow',
      'Setting up Next.js routing and server-side rendering',
      'Creating responsive service cards with pricing display',
      'Managing user bookings and authentication state',
    ],
    improvements: [
      'Add real-time caregiver availability tracking',
      'Implement in-app messaging between families and caregivers',
      'Add caregiver rating and review system',
      'Integrate payment gateway for online booking payments',
    ],
  },
  {
    id: 3,
    name: 'EcoTrack',
    shortDescription: 'A sustainable challenge platform encouraging eco-friendly living through environmental challenges and progress tracking.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
    description: `EcoTrack is a full-stack web application designed to encourage sustainable living through environmental challenges. Users can register, log in, browse various eco-challenges, and track their progress toward a more sustainable lifestyle.

    The frontend is built with React and Vite for fast development, styled with Tailwind CSS for a responsive design. Firebase handles user authentication securely. The backend uses Node.js with Express.js and connects to MongoDB Atlas for data storage, with JWT for secure token management.`,
    liveUrl: 'https://eco-track-authentication.web.app',
    githubUrl: 'https://github.com/kohinurfatema/tenth-assignment',
    challenges: [
      'Implementing secure user authentication with Firebase',
      'Connecting frontend to backend API endpoints',
      'Managing challenge data and user progress tracking',
      'Creating a fully responsive design across all devices',
    ],
    improvements: [
      'Add social features for users to share achievements',
      'Implement gamification with badges and leaderboards',
      'Add community challenges for group participation',
      'Create a mobile app for easier daily tracking',
    ],
  },
];
