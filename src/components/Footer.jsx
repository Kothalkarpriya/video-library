import React from "react";
import "../assests/styles/footer.css";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <p>
        It is Video Library as a Project. I am trying to collect the
        FullStackDevelopement Content, to help students get Started with the
        concepts.
      </p>

      <h3>Created by Priya Kothalkar</h3>
      <p>Connect With me:</p>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/priyakothalkar/" alt="linkedin">
            <AiFillLinkedin className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PriyaKothalkar" alt="twitter">
            <AiFillTwitterCircle className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Kothalkarpriya" alt="github">
            <AiFillGithub className="social-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
