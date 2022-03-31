import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "../components/Typography";
import Card from "@mui/material/Card";
import project1 from "../assets/projects/1.jpg";
import project2 from "../assets/projects/2.jpg";
import project3 from "../assets/projects/3.jpg";
import project4 from "../assets/projects/4.jpg";
import project5 from "../assets/projects/5.jpg";
import project6 from "../assets/projects/6.jpg";
import project7 from "../assets/projects/7.jpg";
import project8 from "../assets/projects/8.jpg";

const projects = [
  { name: "E-learning", img: project3 },
  { name: "HNF", img: project4 },
  { name: "Technical Edu", img: project5 },
  { name: "Tax Bd", img: project6 },
];

function Projects() {
  return (
    <Container
      sx={{ mt: 8, mb: 4 }}
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        color="secondary.main"
        sx={{ mb: 4 }}
      >
        Latest <span className="span">Projects</span>
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" mb={6}>
        <span style={{ fontWeight: "500" }}>
          Ethics Advance Technology Limited (EATL)
        </span>{" "}
        is a private company and a leading enterprise with innovative ICT
        services and solutions provider in Bangladesh established in November
        1999. EATL has developed partnership and collaborations with Bangladesh
        based companies, private sector organizations, NGOs, donors, Government
        and also some of the world's renowned IT expertise organization.
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Grid>
    </Container>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <Grid item xs={6} md={3}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <div className="containerr">
          <img src={project.img} alt="Avatar" className="imagee" />
          <Typography p={1} align="center" bgcolor="primary.main" color="white">{project.name}</Typography>
          <div className="overlayy">
            <div className="textt">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{
                  textTransform: "capitalize",
                  mb: 2,
                  ml: 1,
                  borderRadius: 0,
                  boxShadow: 0,
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};
export default Projects;
