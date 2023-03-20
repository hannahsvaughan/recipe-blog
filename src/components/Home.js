import Button from "react-bootstrap/Button";
import React from "react";

function Home() {
  return (
    <div>
      {" "}
      <div
        className="bg-light border"
        style={{
          lineHeight: "250px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "50px",
        }}
      >
        {" "}
        Hi There! Welcome to my recipe blog.
        <Button variant="outline-secondary" size="lg" className="mx-auto" style={{ backgroundColor: "#ECC1A1" }}>
          View Recipes
        </Button>{" "}
        <br></br>
      </div>{" "}
    </div>
  );
}

export default Home;
