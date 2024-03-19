import React from "react";
import IMG1 from "../../assets/download.jpeg";
import IMG2 from "../../assets/todolist.png";
import IMG3 from "../../assets/axios-crud.png";
import IMG4 from "../../assets/food-1050813_1280.jpg";
import IMG5 from "../../assets/url-shortener.png";
import IMG6 from "../../assets/library.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Diary Manager",
      img: IMG1,
      description:
        "Diary Manager is a MERN stack application that allows users to create, organize, and manage their daily entries seamlessly.With a user-friendly interface, it provides efficient diary management, enabling users to reflect on and navigate through their personal experiences effortlessly. .",
      technologies: "ReactJs,NodeJs,MongoDB,Express",
      link: "https://incredible-souffle-1f857e.netlify.app/",
      github: "https://github.com/Ajith31kumar/Diary-Manager-Frondend.git",
    },
    {
      id: 4,
      title: "Axios-Crud",
      img: IMG3,
      description:
        "Axios, a popular HTTP client library, is instrumental in facilitating CRUD (Create, Read, Update, Delete) operations in web applications. Leveraging Axios simplifies the process of interacting with backend APIs. It enables developers to seamlessly send asynchronous requests to servers, perform CRUD actions, and handle responses. ",
      technologies: "ReactJs,NodeJs,MongoDB,Express",
      link: "https://aesthetic-gumdrop-5069c1.netlify.app/",
      github: "https://github.com/Ajith31kumar/curd-frondend.git",
    },
    {
      id: 5,
      title: "URL-Shortener",
      img: IMG5,
      description:
        "The URL Shortener condenses lengthy links for simplicity and convenience, providing users with shortened, shareable URLs effortlessly.",
      technologies: "Reactjs,Nodejs,Mongodb,Express ",
      link: "https://euphonious-lily-ef59df.netlify.app/",
      github: "https://github.com/Ajith31kumar/URL-FE.git",
    },
    {
      id: 2,
      title: "Restaurant",
      img: IMG4,
      description:
        "In today's digital age, a full-stack restaurant application brings dining convenience to the fingertips of customers. With an easy-to-use interface, patrons can browse menus, place orders, and book tables effortlessly. Meanwhile, restaurant owners gain operational efficiency through centralized management of menus, orders, and reservations. ",
      technologies: "Reactjs,Nodejs,Mongodb,Express ",
      link: "https://stellular-salamander-a47605.netlify.app/",
      github: "https://github.com/Ajith31kumar/Redux-Task.git",
    },

    {
      id: 3,
      title: "To-Do App",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "React | NodeJs",
      link: "https://tangerine-lily-6ab678.netlify.app/",
      github: "https://github.com/Ajith31kumar/Todo-list.git",
    },

    {
      id: 6,
      title: "Books Library",
      img: IMG6,
      description:
        "The Books Library, enhanced with React Formik, seamlessly integrates a user-friendly form experience for efficient input and management of book-related data, offering a smooth and interactive interface.",
      technologies: "React Js | Formik",
      link: "https://library-formik.vercel.app/",
      github: "https://fabulous-cassata-3cbc46.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
