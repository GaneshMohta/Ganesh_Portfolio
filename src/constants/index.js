import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,
    clg,
    Bt,
    AB, ThreeD , Sb,EMS,Drum,Simon
  } from "../assets";

  const profiles = [
    {
      link: "https://www.codechef.com/users/ganesh_mal",
      icon: "https://yt3.googleusercontent.com/Lkx3tvgHdRADC3wXQ5TfJZRTeH4nboEPA_-eJChOZ6jRkOdY35lcg014Whj36rHFXhrHY1T_4cs=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      link: "https://leetcode.com/u/ganeshmal/",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png"
    },
    {
      link: "https://www.hackerrank.com/profile/ganimaheshwari07",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },

  ];

  const achievements = [
    {
      title: "2nd Position Among 20 team in Java Spring Boot (2023).",
    },
    {
      title: "Selected in top 100 candidates for Web-Development Training among 500 Students (2022).",
    },
  ]

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "java",
      title: "Java",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const My_Project = [
    {
      name: "Atalya Bharat",
      description:
        "The project is Specially To show rich Culture of India and My love to my country through this application the blogger can blog, Businessman sells the products, and we can also book your weeding events ,trips and more.",
      tags: [
        {
          name: "Razorpay",
          color: "blue-text-gradient",
        },
        {
          name: "Oauth and Jwt",
          color: "green-text-gradient",
        },
        {
          name: "MERN",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        }
      ],
      image: AB,
      source_link: "https://github.com/GaneshMohta/Aatulya_Bharat",
      source_code_link: "https://github.com/GaneshMohta/Aatulya_Bharat",
    },
    {
      name: "SMARTBUS - An IoT-Enhanced Ticket Booking System (2024)",
      description:
        "This project integrates hardware and software by using ESP32 with Arduino C for managing bus fare transactions through RFID card scanning, the transaction details store in PgSQL database. The software side is a React-based web application where users can recharge through payment, past trips, temporary ticket for an hours. Conductors can manage records.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "SQL",
          color: "yellow-text-gradient",
        },
        {
          name: "PHP",
          color: "orange-text-gradient",
        },
        {
          name: "C",
          color: "purple-text-gradient",
        },
        {
          name: "Razorpay API",
          color: "blue-text-gradient",
        }
      ],
      image: Sb,
      source_link: "https://github.com/GaneshMohta/SMARTBUS",
      source_code_link: "https://github.com/GaneshMohta/SMARTBUS",
    },
    {
      name: "EVENT MANAGEMENT SYSTEM (2024)",
      description:
        "Built a platform with secure authentication for user and admin-based roles using JWT, seamless payment integration via the Razorpay gateway, interactive data visualization with D3.js for admins to visualize and understand the data, and a fully responsive design for a smooth user experience across devices.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "yellow-text-gradient",
        },
        {
          name: "D3.js",
          color: "purple-text-gradient",
        },
        {
          name: "JWT",
          color: "orange-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "Razorpay",
          color: "green-text-gradient",
        }
      ],
      image: EMS,
      source_link: "https://github.com/GaneshMohta/EVENT_MANAGEMENT_SYSTEM",
      source_code_link: "https://github.com/GaneshMohta/EVENT_MANAGEMENT_SYSTEM",
    },
    {
      name: "Drums Kit",
      description:
        "A basic mini Project using javaScript to play a music as you love",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "html css",
          color: "pink-text-gradient",
        },

      ],
      image: Drum,
      source_link: "https://ganeshmohta.github.io/drums_kit_js_mini_proj/",
      source_code_link: "https://github.com/GaneshMohta/drums_kit_js_mini_proj",
    },
    {
      name: "Simon",
      description:
        "A basic mini Project using javaScript to train your brain and improve the memory",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "html css",
          color: "pink-text-gradient",
        },

      ],
      image: Simon,
      source_link: "https://ganeshmohta.github.io/Basic_Simon_JS/",
      source_code_link: "https://github.com/GaneshMohta/Basic_Simon_JS",
    },
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: ThreeD,
      source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
    },
  ];

  const experiences = [
    {
      title: "Mern Stack ",
      company_name: "Better Tomorrow",
      icon: Bt,
      iconBg: "#E6DEDD",
      date: " August(2024)",
      link: "",
      points: [
        "Completed a 15-day internship at THE BETTER TOMORROW training institute as a MERN stack developer. Gained practical experience in MongoDB, ExpressJS, ReactJS, and NodeJS during the internship. Developed proficiency in building scalable and efficient web applications using the MERN stack. Acquired hands-on knowledge in database management, server-side scripting, and front-end development to contribute effectively to software projects."
      ],

    },
  ];

  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Electrical and Electronic",
      marks:
        "CGPA : 7.9 / 10",
      name: "Sri Eshwar College of Engineering, Coimbatore",
      year: "(2022 - 2026)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 89%",
      name: "Nandhi Matric Higher Secondary School, Erode",
      year: "2022",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1092px-TamilNadu_Logo.svg.png",
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      marks:
        "Percentage : 85 %",
      name: "Nandhi Matric Higher Secondary School, Erode",
      year: "2020",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1092px-TamilNadu_Logo.svg.png",
    },
  ];

  export { list, profiles, technologies, experiences, educations, achievements };
