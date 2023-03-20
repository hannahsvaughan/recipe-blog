import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Stack align="middle">
            <div
              className="bg-light border"
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                lineHeight: "100px",
              }}
            >
              <a href="https://github.com/hannahsvaughan" target="blank">
                <li>
                  <FaGithub color="black" size="50px" />
                </li>
              </a>
              <a href="https://www.linkedin.com/hannahsvaughan" target="blank">
                <li>
                  <FaLinkedin color="black" size="50px" />
                </li>
              </a>
              <a href="https://www.instagram.com" target="blank">
                <li>
                  <FaInstagram color="black" size="50px" />
                </li>
              </a>
            </div>
            <br></br>
            <h6>
              <span className="text-black">© 2023 Hannah Vaughan</span>
            </h6>
          </Stack>
        </Container>
      </Navbar>
    </footer>
  );
}
