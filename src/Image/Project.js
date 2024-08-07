import pht1 from "./Project/project1.png";
import pht2 from "./Screenshot from 2024-07-02 18-44-09.png";
import pht3 from "./Project/project2.png";

export const projectlist = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce platform built with MERN stack and integrated payment gateways.',
      image: `${pht1}`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express','Cloudinary','Jwt','Tailwindcss', 'Stripe'],
      github: 'https://github.com/deepakkumar55/fashion-store-frontend',
      demo: 'https://fashion-store-frontend-dun.vercel.app/'
    },
    {
        id: 2,
        title: 'Job Application Tracker',
        description: 'The Job Application Tracker is a web application designed to help users manage and track their job applications. It allows users to add, view, and manage their job applications with details such as company name, position, response status, and application date.',
        image: pht3,
        technologies: ['React', 'Express', 'MySQL'],
        github: 'https://github.com/deepakkumar55/Job-Application-Tracker',
        demo: 'https://jobapplicationtracter.raajaryan.tech/'
      },
    
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects, skills, and experience.',
      image: pht2,
      technologies: ['React', 'Tailwind CSS', ],
      github: 'https://github.com/deepakkumar55/PersonalPortFolio',
      demo: 'https://deepak.raajaryan.tech/'
    },
    {
        id: 4,
        title: 'Task Management System',
        description: 'A task management system for teams to assign tasks, track progress, and manage deadlines.',
        image: '',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/deepakkumar55/task-manager',
        demo: 'https://task-manager-tan-six.vercel.app/'
      },
    {
      id: 5,
      title: 'Weather App',
      description: 'An application to display current weather conditions and forecasts.',
      image: '',
      technologies: ['React', 'OpenWeatherMap API'],
      github: 'https://github.com/example/weather-app',
      demo: 'https://example.com/weather-app'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A blogging platform for creating and sharing articles.',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/example/blog-platform',
      demo: 'https://example.com/blog-platform'
    },
    {
      id: 7,
      title: 'Online Marketplace',
      description: 'An online marketplace for buying and selling goods.',
      image: '',
      technologies: ['React', 'Node.js', 'Firebase'],
      github: 'https://github.com/example/online-marketplace',
      demo: 'https://example.com/online-marketplace'
    },
    {
      id: 8,
      title: 'Music Player',
      description: 'A web-based music player with playlist management and audio controls.',
      image: '',
      technologies: ['React', 'HTML5 Audio API'],
      github: 'https://github.com/example/music-player',
      demo: 'https://example.com/music-player'
    },
    {
      id: 9,
      title: 'Recipe App',
      description: 'An application for browsing and saving recipes.',
      image: '',
      technologies: ['React', 'Edamam API'],
      github: 'https://github.com/example/recipe-app',
      demo: 'https://example.com/recipe-app'
    },
    {
      id: 10,
      title: 'Job Board',
      description: 'A job board for posting and applying to job listings.',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/example/job-board',
      demo: 'https://example.com/job-board'
    },
    {
      id: 11,
      title: 'Chat Application',
      description: 'A real-time chat application for communicating with others.',
      image: '',
      technologies: ['React', 'Socket.io', 'Node.js'],
      github: 'https://github.com/example/chat-app',
      demo: 'https://example.com/chat-app'
    },
    {
      id: 12,
      title: 'To-Do List',
      description: 'A simple to-do list application with task management features.',
      image: '',
      technologies: ['React', 'LocalStorage API'],
      github: 'https://github.com/example/todo-list',
      demo: 'https://example.com/todo-list'
    },
    {
      id: 13,
      title: 'Event Management System',
      description: 'A system for managing events, bookings, and attendees.',
      image: '',
      technologies: ['React', 'Firebase', 'Node.js'],
      github: 'https://github.com/example/event-management',
      demo: 'https://example.com/event-management'
    },
    {
      id: 14,
      title: 'Survey Tool',
      description: 'An online survey tool for creating and analyzing surveys.',
      image: '',
      technologies: ['React', 'SurveyJS'],
      github: 'https://github.com/example/survey-tool',
      demo: 'https://example.com/survey-tool'
    },
    {
      id: 15,
      title: 'Video Streaming App',
      description: 'A video streaming application for watching and sharing videos.',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/example/video-streaming',
      demo: 'https://example.com/video-streaming'
    },
  ];




  // list of project 

  /*
  

1. E-commerce Website
   - Features: User authentication, product listing, shopping cart, payment gateway integration, order history.

2. Social Media Platform
   - Features: User profiles, friend requests, news feed, post creation, likes, comments, messaging.

3. Blogging Platform
   - Features: User authentication, post creation and editing, comments, categories, tags, search functionality.

4. Project Management Tool
   - Features: Task creation, assignment, deadlines, status updates, team collaboration, project timelines.

5. Online Learning Platform
   - Features: Course creation, user enrollment, video streaming, quizzes, progress tracking, discussion forums.

6. Event Management System
   - Features: Event creation, RSVPs, ticketing, attendee management, notifications, calendar integration.

7. Real-time Chat Application
   - Features: User authentication, chat rooms, direct messaging, real-time updates, emoji support, file sharing.

8. Job Portal
   - Features: Job listings, resume uploads, application tracking, employer profiles, job recommendations, search filters.

9. Expense Tracker
   - Features: Expense categories, budget tracking, visual charts, recurring expenses, income tracking, reports.

10. Weather Forecast App
    - Features: Real-time weather updates, location-based forecasts, weather maps, alerts, historical data.

11. Recipe Sharing Platform
    - Features: User profiles, recipe submission, ratings, comments, ingredient lists, search functionality.

12. Online Marketplace
    - Features: Product listings, seller profiles, user reviews, secure payments, order tracking, categories.

13. Fitness Tracker
    - Features: Workout logging, progress tracking, diet plans, exercise routines, community support, goal setting.

14. Travel Blog
    - Features: Destination guides, travel tips, photo galleries, user comments, trip planning tools, maps.

15. Video Streaming Service
    - Features: Video uploads, streaming, user subscriptions, playlists, comments, recommendations.

16. Task Management App
    - Features: To-do lists, priority levels, due dates, reminders, project organization, collaboration tools.

17. Online Forum
    - Features: User authentication, topic creation, threaded discussions, moderation tools, search functionality.

18. Book Review Platform
    - Features: Book listings, user reviews, ratings, recommendations, author profiles, reading lists.

19. Music Streaming App
    - Features: Song uploads, playlists, user profiles, streaming, recommendations, search functionality.

20. Portfolio Website
    - Features: Project showcase, contact form, resume upload, blog, testimonials, skills showcase.

21. Food Delivery Service
    - Features: Restaurant listings, menu browsing, order placement, delivery tracking, user reviews, payment integration.

22. Dating App
    - Features: User profiles, matching algorithm, messaging, likes, interests, photo uploads.

23. Q&A Platform
    - Features: Question posting, answers, voting, user profiles, tags, search functionality.

24. Inventory Management System
    - Features: Product catalog, stock tracking, order management, supplier information, reports, alerts.

25. Customer Support Ticket System
    - Features: Ticket creation, assignment, status tracking, user authentication, knowledge base, notifications.

26. News Aggregator
    - Features: News sources, categories, user preferences, bookmarks, comments, search functionality.

27. Online Polling System
    - Features: Poll creation, voting, results display, user authentication, comment sections, analytics.

28. Language Learning App
    - Features: Lessons, quizzes, progress tracking, multimedia content, user profiles, community forums.

29. Personal Finance App
    - Features: Budget planning, expense tracking, income management, visual charts, financial goals, reports.

30. Auction Platform
    - Features: Auction creation, bidding, user profiles, payment integration, notifications, history tracking.

31. Health Monitoring System
    - Features: User health data tracking, vital signs monitoring, medical history, reports, doctor appointments.

32. Crowdfunding Platform
    - Features: Project creation, funding goals, payment integration, backer management, progress updates.

33. Language Translation Service
    - Features: Text translation, document translation, user profiles, language pairs, history, translation requests.

34. Collaborative Writing Tool
    - Features: Document creation, real-time editing, version control, comments, user authentication.

35. Personal Diary App
    - Features: Daily entries, mood tracking, photo uploads, tags, search functionality, privacy settings.

36. Virtual Whiteboard
    - Features: Drawing tools, collaboration, real-time updates, file sharing, user authentication, session saving.

37. Online Store for Digital Products
    - Features: Product listings, digital downloads, user authentication, payment integration, reviews.

38. Habit Tracker
    - Features: Habit creation, reminders, progress tracking, visual charts, streaks, community support.

39. Meditation and Mindfulness App
    - Features: Guided meditations, progress tracking, reminders, user profiles, community forums.

40. Virtual Classroom
    - Features: Class creation, video conferencing, assignments, grading, student profiles, discussion forums.

41. Recipe Recommendation System
    - Features: Personalized recommendations, ingredient-based search, user ratings, meal planning.

42. Travel Itinerary Planner
    - Features: Trip planning, destination information, activity suggestions, user profiles, map integration.

43. Stock Market Analysis Tool
    - Features: Real-time stock data, portfolio management, charts, alerts, news integration, analysis tools.

44. Online Survey Platform
    - Features: Survey creation, response collection, analytics, user authentication, sharing options.

45. Smart Home Dashboard
    - Features: Device control, real-time monitoring, automation rules, notifications, user authentication.

46. Gaming Community Platform
    - Features: User profiles, game reviews, forums, event organization, friend connections, news updates.

47. Freelance Marketplace
    - Features: Project postings, freelancer profiles, bidding system, payment integration, reviews.

48. Art Portfolio Website
    - Features: Artwork galleries, artist profiles, contact form, blog, exhibitions, social media integration.

49. Gardening Planner
    - Features: Plant database, gardening tips, planting schedules, reminders, progress tracking.

50. Pet Adoption Platform
    - Features: Pet listings, adoption applications, user profiles, animal shelters, reviews, search functionality.

51. Cooking Class Booking System
    - Features: Class schedules, booking system, user profiles, instructor profiles, reviews.

52. SaaS Billing System
    - Features: Subscription plans, invoicing, payment processing, user management, reports.

53. Online Quiz Platform
    - Features: Quiz creation, question banks, user authentication, progress tracking, leaderboards.

54. Customer Feedback System
    - Features: Feedback collection, analysis, reporting, user authentication, notifications.

55. Real Estate Listing Platform
    - Features: Property listings, search filters, user profiles, contact forms, map integration, reviews.

56. Event Ticketing System
    - Features: Event creation, ticket sales, attendee management, user profiles, notifications.

57. Virtual Museum Tour
    - Features: Virtual tours, exhibit information, multimedia content, user profiles, feedback.

58. Donation Management System
    - Features: Donation tracking, user profiles, payment integration, reports, campaigns.

59. Classified Ads Platform
    - Features: Ad postings, categories, user profiles, messaging, search functionality, reviews.

60. Online Debate Platform
    - Features: Debate topics, user profiles, real-time participation, voting, comments.

61. Language Exchange Community
    - Features: User profiles, language pairing, messaging, video calls, progress tracking.

62. Stock Photography Website
    - Features: Photo uploads, categories, user profiles, licensing, search functionality.

63. Digital Journal
    - Features: Entry creation, multimedia support, tags, search functionality, privacy settings.

64. Food Recipe API
    - Features: Recipe database, API endpoints, ingredient search, nutrition information, user authentication.

65. Budget Planning Tool
    - Features: Budget creation, expense tracking, income management, visual charts, financial goals.

66. Online Therapy Platform
    - Features: Therapist profiles, session scheduling, video calls, user authentication, progress tracking.

67. Collaborative Study Platform
    - Features: Study groups, resource sharing, real-time collaboration, progress tracking, forums.

68. Remote Job Board
    - Features: Job listings, company profiles, application tracking, user profiles, search functionality.

69. E-book Library
    - Features: Book listings, reading progress, user reviews, categories, search functionality.

70. Virtual Fitness Coach
    - Features: Workout plans, progress tracking, video instructions, user profiles, community support.

  
  */