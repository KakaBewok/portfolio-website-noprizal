const projects = [
  //   1
  {
    id: 1,
    name: 'Loker.id',
    image: '/images/projects/reactjs_lokerid.jpg',
    link: 'https://web-app-job-vacancy.vercel.app/',
    description:
      'This website is useful for providing information on job vacancies in Indonesia. This website acts as a facilitator of job matching and communication between job seekers and employers.',
    category: 'Front-End Web',
    tech_stack: 'Reactjs, Tailwind, Daisy UI and Flowbite React',
    feature:
      'Signup, Login, Logout, Change Password, Dark Mode, CRUD Data (Create, Read, Update, Delete), Live Filter and Live Search Data',
    data: 'https://dev-example.sanbercloud.com/api/',
    year: 2023,
  },
  //   2
  {
    id: 2,
    name: 'Movie Catalogue (PWAs)',
    image: '/images/projects/frontend_expert_movie_catalogue.jpg',
    link: 'https://movie-catalogue-pwas-noprizal.netlify.app/',
    description:
      'This website is used to provide references for the best films to be showed.',
    category: 'Front-End Web',
    tech_stack: 'Webpack, HTML, CSS and Native Javascript',
    feature: 'Progressive Web Apps (PWAs) and Push Notification',
    data: 'https://www.themoviedb.org/',
    year: 2023,
  },
  //   3
  {
    id: 3,
    name: 'Homestay App',
    image: '/images/projects/homestay_app.jpg',
    link: 'https://homestay-reactjs-noprizal.netlify.app/',
    description: 'Web that provides homestay information at the best price.',
    category: 'Front-End Web',
    tech_stack: 'Reactjs',
    feature: 'Google Map and Search Data',
    data: '-',
    year: 2022,
  },
  //   4
  {
    id: 4,
    name: 'Notes App',
    image: '/images/projects/notesapp_darkmode_reactjs.jpg',
    link: 'https://kakabewok.github.io/todoapp-reactjs/',
    description:
      'A useful website for storing important notes that are often forgotten',
    category: 'Front-End Web',
    tech_stack: 'Reactjs',
    feature: 'CRUD Notes, Dark Mode and Choose a Theme Color on The Note',
    data: '-',
    year: 2022,
  },
  //   5
  {
    id: 5,
    name: 'RESTful API Open Music',
    image: '/images/projects/backend_funda_openmusic.jpg',
    link: 'https://github.com/KakaBewok/restfull-API-openmusic-HAPI',
    description:
      'RESTful API Open Music is useful for providing music data, such as albums, songs, playlists and singers that will be used by front-end applications',
    category: 'Back-End Web',
    tech_stack: 'Hapi js',
    feature: 'RESTful API with PostgreSQL',
    data: 'PostgreSQL',
    year: 2022,
  },
  //   6
  {
    id: 6,
    name: 'RESTful API Bookshelf',
    image: '/images/projects/backend_pemula_bookshelf.jpg',
    link: 'https://github.com/KakaBewok/restfull-bookshelf-app-dicoding',
    description:
      'RESTful API Bookshelf is useful for providing book data, such as title, author, etc. that will be used by front-end applications',
    category: 'Back-End Web',
    tech_stack: 'Native Javascript',
    feature: 'RESTful API',
    data: 'Array of Object',
    year: 2022,
  },
  //   7
  {
    id: 7,
    name: 'Notes App 2',
    image: '/images/projects/react_funda_notesapp.jpg',
    link: 'https://submission-funda-react-noprizal.netlify.app/',
    description:
      'A useful website for storing important notes that are often forgotten.',
    category: 'Front-End Web',
    tech_stack: 'Reactjs',
    feature:
      'Dark Mode, Translate (Bahasa/English), Live Search Notes, Signup, Login, Logout and CRUD',
    data: 'https://notes-api.dicoding.dev/',
    year: 2023,
  },
  //   8
  {
    id: 8,
    name: 'Notes App 3',
    image: '/images/projects/reactjs_pemula_notesapp.jpg',
    link: 'https://basic-reactjs-dicoding-noprizal.netlify.app/',
    description:
      'A useful website for storing important notes that are often forgotten.',
    category: 'Front-End Web',
    tech_stack: 'Reactjs',
    feature: 'Create, Read, Update and Delete',
    data: '-',
    year: 2022,
  },
  //   9
  {
    id: 9,
    name: 'FoodFinder/>',
    image: '/images/projects/frontend_expert_resto.jpg',
    link: 'https://submission-frontend-expert-dicoding.vercel.app/',
    description:
      'This website is used to provide references for the best restaurants in Indonesia',
    category: 'Front-End Web',
    tech_stack: 'Webpack and Vanila Javascript',
    feature:
      'Progressive Web Apps, Unit Testing (Karma & Jasmine js), Integration Testing (Karma & Jasmine js) and UI Testing/End to End Testing (Codecept)',
    data: 'https://restaurant-api.dicoding.dev',
    year: 2023,
  },
  //   10
  {
    id: 10,
    name: 'XXI Movie Catalogue',
    image: '/images/projects/frontend_funda_movie_catalogue.jpg',
    link: 'https://funda-frontend-movie.netlify.app/',
    description:
      'This website is used to provide references for the best films to be showed.',
    category: 'Front-End Web',
    tech_stack: 'Webpack and Vanila Javascript',
    feature: '-',
    data: 'https://www.themoviedb.org/',
    year: 2022,
  },
  //   11
  {
    id: 11,
    name: 'RBus',
    image: '/images/projects/bus_akap.jpg',
    link: 'http://bus-akap-ticket.epizy.com/',
    description: 'This website is useful for ordering bus tickets',
    category: 'Back-End and Front-End Web',
    tech_stack: 'Vanila PHP and MySQL',
    feature: 'Ordering Bus Ticket',
    data: 'MySQL',
    year: 2022,
  },
  //   12
  {
    id: 12,
    name: 'Simple SIAKAD',
    image: '/images/projects/siakad.jpg',
    link: 'http://siakad-noprizal.great-site.net/',
    description: 'This website is useful for storing and managing student data',
    category: 'Back-End and Front-End Web',
    tech_stack: 'Vanila PHP and MySQL',
    feature:
      'Signup, Login, Logout, Print Document, Upload Image, Live Search and CRUD Student Data',
    data: 'MySQL',
    year: 2022,
  },
  //   13
  {
    id: 13,
    name: 'Web Portfolio Bootstrap 5.0',
    image: '/images/projects/porto_bs5.jpg',
    link: 'https://kakabewok.github.io/portfolio-bootstrap-V5/',
    description: 'Website Portfolio',
    category: 'Front-End Web',
    tech_stack: 'HTML, CSS, Js, GSAP, AOS and Bootstrap 5.0',
    feature: '-',
    data: '-',
    year: 2022,
  },
  //   14
  {
    id: 14,
    name: 'Web Restaurant "Ristorante con Fusion"',
    image: '/images/projects/reactjs_coursera.jpg',
    link: 'https://frontend-react-coursera.netlify.app/',
    description:
      'This website is used to provide references for the best restaurants in Hongkong',
    category: 'Front-End Web',
    tech_stack: 'Reactjs and React-Redux',
    feature: '-',
    data: 'json-server',
    year: 2023,
  },
  //   15
  {
    id: 15,
    name: 'Tuku Mangan',
    image: '/images/projects/tuku_mangan.jpg',
    link: 'https://kakabewok.github.io/resto-tuku-mangan/',
    description:
      'This website is only an overview of the online food ordering website',
    category: 'Front-End Web',
    tech_stack: 'HTML, CSS, Js and Bootstrap',
    feature: '-',
    data: '-',
    year: 2022,
  },
];

export default projects;
