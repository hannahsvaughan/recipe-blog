import React from "react";
import { Card, Button } from "react-bootstrap";

// add image into the props to add a sampe image if you want to
const Recipe = (props) => {
  const { title, image, description, recipeLink } = props;
  return (
    <Card className="mt-3 mb-5 mx-3 p-1" style={{ border: "rounded" }}>
      <Card.Img variant="top" src={image} fluid={true} />
      <Card.Body align="middle">
        <Card.Title align="middle">{title}</Card.Title>
        <Card.Text align="middle">{description}</Card.Text>
        <Button
          variant="secondary"
          href={recipeLink}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          View Recipe
        </Button>{" "}
      </Card.Body>
    </Card>
  );
};

export default Recipe;
