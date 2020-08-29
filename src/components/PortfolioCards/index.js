import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./PortfolioCards.css";
import weatherDashPic from "./weatherDashPic.jpg";
import inOrOutPic from "./inOrOut (1).jpg";
import burgerPic from "./burger.jpg";
import DirectoryPic from "./userDirectory.jpg";
import projectYou from "./projectYou.jpg";
import noteTaker from "./noteTaker.jpg";

export default function PortfolioCards() {
  const projects = [
    {
      name: "Weather Dashboard",
      description:
        "User provides city, is then provided the current forecast as well as the 5-day forecast.",
      repoLink: "https://github.com/ewirtz3/weather-dashboard",
      appLink: "https://ewirtz3.github.io/weather-dashboard/",
      imageSrc: weatherDashPic,
      imageAlt: "Weather Dashboard App",
    },
    {
      name: "Inside or Outside?",
      description:
        "Responsive application which takes in the user input to either provide a 5-day weather forecast or a random cocktail recipe.",
      repoLink: "https://github.com/ewirtz3/inside-or-outside",
      appLink: "https://ewirtz3.github.io/inside-or-outside/",
      imageSrc: inOrOutPic,
      imageAlt: "Cocktails or Weather app",
    },
    {
      name: "Burger Bonanza App",
      description:
        "Heroku-deployed app enables the user to add new burgers to the left side of the page. If the user clicks the Devour It! button, the burger's devoured status changes to true and it reappears ont he right side of the page. Utilizes Express.js, Express Handlebars, MySQL, and an ORM.",
      repoLink: "https://github.com/ewirtz3/burger",
      appLink: "https://intense-dusk-43049.herokuapp.com/",
      imageSrc: burgerPic,
      imageAlt: "Burger Builder App",
    },
    {
      name: "Dynamic Employee Directory",
      description:
        "React-based application that serves as an Employee Directory. Using class and functional React components, the page renders 200 employee info cards using an AJAX call via axios. The list may be sorted alphabetically or filtered by birth month.",
      repoLink: "https://github.com/ewirtz3/user-directory",
      appLink: "https://various-employees.herokuapp.com/",
      imageSrc: DirectoryPic,
      imageAlt: "Employee Directory App",
    },
    {
      name: "projectYOU",
      description:
        "Full-stack application serves as a simple tracker for the user to log their minutes of exercise, glasses of water intake, and hours of sleep all in one place. User information is created upon sign up and stored in a database, which is updated as the user logs their health milestones.",
      repoLink: "https://github.com/ewirtz3/projectYOU",
      appLink: "https://projectyou.herokuapp.com/",
      imageSrc: projectYou,
      imageAlt: "Fitness Tracker App",
    },
    {
      name: "Note Taker",
      description:
        "This app enables the user to write, save, and delete notes. Application utilizes Express.js to give user full CRUD method capabilities, writing, reading, updating, and deleting data to/from a JSON file.",
      repoLink: "https://github.com/ewirtz3/note-taker",
      appLink: "https://stark-meadow-19348.herokuapp.com/",
      imageSrc: noteTaker,
      imageAlt: "Note Taker App",
    },
  ];

  return (
    <Card.Group id="portfolio-cards">
      {projects.map((project, i) => {
        return (
          <Card key={i}>
            <Image src={project.imageSrc} wrapped />
            <Card.Content>
              <Card.Header>{project.name}</Card.Header>
              <Card.Description>{project.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View application
              </a>
              <br />
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project repository
              </a>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
}
