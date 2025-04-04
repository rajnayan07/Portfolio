import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import listmaker from "../assets/img/GoCAB.png";
import findit from "../assets/img/YouMindMatrix.png";
import homevista from "../assets/img/HomeVista.png";
import savenotes from "../assets/img/AuthMern.png";
import whatbytes from "../assets/img/whatbytes.png";
import cartApp from "../assets/img/cart.png";
import sorting from "../assets/img/sorting.png";
import fitness from "../assets/img/fitness.png";
import detective from "../assets/img/detective.png";
import weather from "../assets/img/weather.png";
import Railway from "../assets/img/railway.jpeg"
import car from "../assets/img/carKharido.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "GoCAB",
      description: "A Cab booking Web Application",
      imgUrl: listmaker,
      repoUrl: "https://github.com/rajnayan07/GoCAB",
    },
    {
      title: "Your BenchMark",
      description: "A cognitive testing platform featuring memory and reaction tests",
      imgUrl: findit,
      repoUrl: "https://github.com/rajnayan07/Your-MindMatrix",
    },
    {
      title: "Home Vista",
      description: "a full-stack real estate platform for listing, browsing, buying, and selling properties",
      imgUrl: homevista,
      repoUrl: " https://github.com/rajnayan07/HomeVista",
    },
    {
      title: "Auth Mern",
      description: "A login & logout page",
      imgUrl: savenotes,
      repoUrl: "https://github.com/rajnayan07/AuthMern",
    },
    {
      title: "Car Kharido",
      description: " A full-stack web application for seamless car buying and selling with secure authentication and an intuitive user experience. ",
      imgUrl: car,
      repoUrl: "https://github.com/rajnayan07/CarKharido",
    },
  ];

  const projects2 = [
    {
      title: "WhatBytes",
      description: "A Education Platform's Web Application",
      imgUrl: whatbytes,
      repoUrl: "https://github.com/rajnayan07/WhatBytesAssigment",
    },
    {
      title: "Shopping Cart",
      description: "This shopping cart🛒 project is built using ReactJS and Redux Tool Kit",
      imgUrl: cartApp,
      repoUrl: " https://github.com/rajnayan07/ShoppingCart",
    },
    {
      title: "Sorting Visualizer",
      description: "where you can visualize the sorting.",
      imgUrl: sorting,
      repoUrl: "https://github.com/rajnayan07/Sorting-Visualizer",
    },
    {
      title: "Fitness Arena",
      description: "A gym website, implemented as a SPA using HTML, CSS, and JavaScript.",
      imgUrl: fitness,
      repoUrl: "https://github.com/rajnayan07/FitnessArena",
    },
    {
      title: "Dev Detective",
      description: "Page that provides GitHub profile details",
      imgUrl: detective,
      repoUrl: "https://github.com/rajnayan07/Dev-Detective",
    },
    {
      title: "Weather App",
      description: "where you can visualize the sorting.",
      imgUrl: weather,
      repoUrl: "https://github.com/rajnayan07/WeatherApp",
    },
  ];

  const projects3 = [
    {
      title: "Railway Tracking & Prediction System",
      description: "Railway Tracking & Arrival Time Prediction System",
      imgUrl: Railway,
      repoUrl: "https://github.com/rajnayan07/RailwayTimePrediction",
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2><br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">MERN Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Front-End Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Btech Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}