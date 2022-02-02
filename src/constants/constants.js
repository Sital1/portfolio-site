export const projects = [
  {
    title: 'Markdowner',
    description: "A full-stack website to visualize plain text as a markdown document. User can register their ID and create, edit,save, and delete documents. User can choose to make documents private or public. Uses microservice architecture. Uses 'Java' and 'Spring' for backend to make 'auth' microservice for authentication and 'doc' microservice for document handling. Spring Security and JWT for security. MongoDB and MongoAtlas for database. Angular is used to create frontend. Deployed in Heroku.",
      image: '/images/markdowner.PNG',
      tags: ['Spring', 'Angular', 'MongoDB', "Heroku", "RestAPI"],
    source: 'https://markdowner-frontend.herokuapp.com/home',
    visit: 'https://github.com/Sital1/markdown-project',
    id: 0,
  },
  {
    title: 'Reddit Clone',
    description:"A full-stack Reddit clone, that supports basic reddit functionality like user login/logout, creating subreddit and post, and commenting on those subreddit and post. Used 'Java' and 'Spring' for backend. Frontend was created using Angular.Deployed on Heroku.",
    image: '/images/reddit-clone.png',
    tags: ['Spring', 'Angular','MySql/Postgres','JWT',],
    source: 'https://reddit-cloned-frontend.herokuapp.com/',
    visit: 'https://github.com/Sital1/Markdowner-project',
    id: 1,
  },
  {
    title: 'Game of Life',
    description: "Used React to implement the famous Conway's Game of Life Algorithm and created an interface to visualize it. Learned various React concepts such as Hooks, Components, Conditional-Renderin while making it.",
      image: '/images/gameOfLife.png',
      tags: ['React', 'HTML','CSS','Javascript'],
    source: 'https://game-of-life.lsines.vercel.app',
    visit: 'https://github.com/Sital1/Game-of-Life',
    id: 2,
  },
  {
    title: 'Email Service',
    description: "This is my first full stack project in which I tried to clone the basic functionality of an Email service such as sending email, reading email, archiving it. Used 'Django' and 'Vanilla Javascript'. Lot a learned about 'APIs', 'JSON', 'Http Requests','HTMl' and 'CSS' ",
    image: '/images/emailService.PNG',
    tags: ['Javascript', 'Django', 'HTML', 'CSS', 'BOOTSTRAP'],
    source: 'https://github.com/Sital1/Email-Service',
    visit: 'https://github.com/Sital1/Email-Service',
    id: 3,
  },
];

// export const accomplishment = [
//   { number: 17, text: 'Open Source Projects'},
//   { number: 3, text: 'Fullstack Projects', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];