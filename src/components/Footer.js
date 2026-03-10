import {
  Instagram,
  Mail,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "2.5rem 1.25rem",
        textAlign: "center",
        color: "rgba(255,255,255,0.75)",
        fontSize: "0.85rem",
      }}
    >
      {/* Social and App icons (external) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 22,
          marginBottom: "1.5rem",
        }}
      >
        <SocialIcon href="https://www.instagram.com/seconddate.in/">
          <Instagram size={22} />
        </SocialIcon>

        <SocialIcon href="mailto:dev.seconddate@gmail.com">
          <Mail size={22} />
        </SocialIcon>

        <SocialIcon href="https://play.google.com/store/apps/details?id=com.bongdate.bongDate&hl=en-US&ah=jIbw0EmQpsAX2ya_6H5-iBshoa0">
          <Play size={22} />
        </SocialIcon>
      </div>

      {/* Internal links (React Router) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: "1.2rem",
        }}
      >
        <Link to="/privacy-policy" style={linkStyle}>
          Privacy Policy
        </Link>

        <Link to="/child-safety" style={linkStyle}>
          Child Safety Policy
        </Link>

        <Link to="/terms" style={linkStyle}>
          Terms & Conditions
        </Link>

        <Link to="/contact" style={linkStyle}>
          Contact Us
        </Link>
      </div>

      {/* Copyright */}
      <div style={{ opacity: 0.55 }}>
        © {new Date().getFullYear()} SecondDate
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      width: 42,
      height: 42,
      borderRadius: 14,
      display: "grid",
      placeItems: "center",
      background:
        "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(236,72,153,0.35))",
      color: "#fff",
    }}
  >
    {children}
  </a>
);

const linkStyle = {
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontSize: "0.9rem",
};

export default Footer;