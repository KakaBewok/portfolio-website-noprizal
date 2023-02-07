const certifications = [
  // 1
  {
    id: 1,
    course_name: 'Certificate of Competence Junior Web Developer',
    issuing_organization:
      'Indonesian Professional Certification Authority (BNSP)',
    issued: 2022,
    image: '/images/certificates/01. BNSP NOPRIZAL OK-1.jpg',
    link: 'https://drive.google.com/file/d/1eRk1hFqRpHemQNH0l1iUlluscW6D-RUQ/view',
  },
  //   2
  {
    id: 2,
    course_name: 'Become a Front-End Web Developer Expert',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2023,
    image: '/images/certificates/02. Dicoding Front-End Expert OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/RVZKKWOYEZD5',
  },
  //   3
  {
    id: 3,
    course_name: 'Learn Front-End Web Development Fundamentals',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/03. FUNDAMENTAL FRONT END DICODING OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/MRZMD0J7NZYQ',
  },
  //   4
  {
    id: 4,
    course_name: 'Learn to Create a Web Front-End for Beginners',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/04. Membuat Front-End Web untuk Pemula OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/N9ZOEJ8Q6XG5',
  },
  //   5
  {
    id: 5,
    course_name: 'Learn Basic Web Programming',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/05. Dasar Pemrograman Web (Google Dev) OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/72ZDE32R6PYW',
  },
  //   6
  {
    id: 6,
    course_name: 'Learn Fundamentals of Back-End Applications',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/06. BELAJAR FUNDA BACKEND OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/4EXG5653EXRL',
  },
  //   7
  {
    id: 7,
    course_name: 'Learn to Create Back-End Applications for Beginners',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/07. Membuat Aplikasi Back-End untuk Pemula OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/N9ZOEWM28XG5',
  },
  //   8
  {
    id: 8,
    course_name: 'Learn Basic JavaScript Programming',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/08. Dasar Pemrograman Javascript (AWS) OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/GRX5K1KRRZ0M',
  },
  //   9
  {
    id: 9,
    course_name: 'Cloud Practitioner Essentials (Learn AWS Cloud Basics)',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/09. Cloud Computing (AWS) OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/KEXL3D9L4PG2',
  },
  //   10
  {
    id: 10,
    course_name: 'Google Cloud Basic Learning',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/10. Belajar Dasar Google Cloud OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/2VX3290DVPYQ',
  },
  //   11
  {
    id: 11,
    course_name: 'Learn Web Application Fundamentals with React',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2023,
    image: '/images/certificates/11. DICODING FUNDA REACT OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/JLX1L571JX72',
  },
  //   12
  {
    id: 12,
    course_name: 'Learn to Build Web Apps with React',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/12. Membuat aplikasi dengan react DICODING OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/RVZK67E9QZD5',
  },
  //   13
  {
    id: 13,
    course_name: 'Learn DevOps Basics',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/13. DASAR-DASAR DEVOPS OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/EYX42DDJRZDL',
  },
  //   14
  {
    id: 14,
    course_name: 'Learn Computer Networks for Beginners',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/14. Jaringan Komputer Pemula OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/MRZM4D3LKXYQ',
  },
  //   15
  {
    id: 15,
    course_name: 'Getting Started Programming With Python',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/15. Memulai Pemrograman dengan Python (Google Dev) OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/98XWKN944XM3',
  },
  //   16
  {
    id: 16,
    course_name: 'Getting Started Programming With Dart',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/16. Memulai Pemrograman dengan  Dart OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/72ZDE16O6PYW',
  },
  //   17
  {
    id: 17,
    course_name: 'Learn Git Basics with GitHub',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/17. GIT & GIT HUB OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/07Z6595WYXQR',
  },
  //   18
  {
    id: 18,
    course_name: 'Pursue a Career as a Software Developer',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/18. Meniti Karir Sebagai Software Developer OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/MRZMK154RPYQ',
  },
  //   19
  {
    id: 19,
    course_name: 'Introduction to Programming Logic (Programming Logic 101)',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image: '/images/certificates/19. Programming Logic 101 OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/L4PQ3LGQVPO1',
  },
  //   20
  {
    id: 20,
    course_name: 'Introduction to Data in Programming (Data 101)',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/20. Pengenalan Data Pada Pemrograman (Data 101) OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/NVP71V7JRPR0',
  },
  //   21
  {
    id: 21,
    course_name:
      'Getting Started with Programming Fundamentals to Become a Software Developer',
    issuing_organization: 'Dicoding Indonesia',
    issued: 2022,
    image:
      '/images/certificates/21. Dasar Pemrograman Software Development OK-1.jpg',
    link: 'https://www.dicoding.com/certificates/6RPN85D04Z2M',
  },
  //   22 belum
  {
    id: 22,
    course_name: 'JUNIOR WEB DEVELOPER',
    issuing_organization: 'VSGA - Digitalent Kominfo',
    issued: 2022,
    image: '/images/certificates/22. WEB DEV JUNIOR VSGA OK-1.jpg',
    link: 'https://drive.google.com/drive/u/1/folders/1zuzgZtELLpaFpk_QOdRHq7L5TgAZUX51',
  },
  //   23
  {
    id: 23,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/23. reactjs progate digitalent OK-1.jpg',
    link: '',
  },
  //   24
  {
    id: 24,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/24. DTS FGA BACKEND OK-1.jpg',
    link: '',
  },
  //   25
  {
    id: 25,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/25. COURSERA FRONT END REACTJS OK-1.jpg',
    link: '',
  },
  //   26
  {
    id: 26,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/26. Coursera IT SUPPORT GOOGLE OK-1.jpg',
    link: '',
  },
  //   27
  {
    id: 27,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/27. React Progate-1.jpg',
    link: '',
  },
  //   28
  {
    id: 28,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/28. Javascript Progate-1.jpg',
    link: '',
  },
  //   29
  {
    id: 29,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/29. HTML & CSS Progate-1.jpg',
    link: '',
  },
  //   30
  {
    id: 30,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/30. GIT Progate-1.jpg',
    link: '',
  },
  //   31
  {
    id: 31,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/31. Responsive Web Design-1.jpg',
    link: '',
  },
  //   32
  {
    id: 32,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/32. Phyton Beginner-1.jpg',
    link: '',
  },
  //   33
  {
    id: 33,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/33. React Redux-1.jpg',
    link: '',
  },
  //   34
  {
    id: 34,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/34. Responsive Web Design 2-1.jpg',
    link: '',
  },
  //   35
  {
    id: 35,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/35. Web Dev Fundamentals-1.jpg',
    link: '',
  },
  //   36
  {
    id: 36,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/36. Javascript-1.jpg',
    link: '',
  },
  //   37
  {
    id: 37,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/37. CSS-1.jpg',
    link: '',
  },
  //   38
  {
    id: 38,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/38. HTML-1.jpg',
    link: '',
  },
  //   39
  {
    id: 39,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image:
      '/images/certificates/39. css-bootstrap-4-web-design-nov-rizal-1.jpg',
    link: '',
  },
  //   40
  {
    id: 40,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/40. Membuat Web Modern dengan React js-1.jpg',
    link: '',
  },
  //   41
  {
    id: 41,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/41. Belajar HTTP PZN-1.jpg',
    link: '',
  },
  //   42
  {
    id: 42,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image:
      '/images/certificates/42. Bootcamp Progate HTML & CSS Fundamental-1.jpg',
    link: '',
  },
  //   43
  {
    id: 43,
    course_name: '',
    issuing_organization: '',
    issued: '',
    image: '/images/certificates/43. Sertif Sanbercode-1.jpg',
    link: '',
  },
];
export default certifications;
