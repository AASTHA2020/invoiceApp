import { useContext } from "react";
import { StateContext } from '../context/stateContext';
import './Footer.css'; // Import the CSS file

export default function Footer() {
  const { name, email, website, phone, bankAccount, bankName } =
    useContext(StateContext);

  return (
    <footer className="footer">
      <p className="footer-text">
        Invoicer is built by{" "}
        <a
          href="https://tsbsankara.com"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Aastha Modi
        </a>
      </p>
    </footer>
  );
}
