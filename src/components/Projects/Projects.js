import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { projects } from "../../constants/Constants";
import "./Projects.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className="projects">
      {projects.map((item) => (
        <a href={item.source} key={item.id} className="projects__cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                // alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <p></p>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="projects__tech"
                >
                  {item.tags}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default Projects;
