import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

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
      {/* Social icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 22,
          marginBottom: "1.5rem",
        }}
      >
        <SocialIcon href="https://instagram.com">
          <Instagram size={22} />
        </SocialIcon>

        <SocialIcon href="https://twitter.com">
          <Twitter size={22} />
        </SocialIcon>

        <SocialIcon href="https://linkedin.com">
          <Linkedin size={22} />
        </SocialIcon>

        <SocialIcon href="mailto:support@seconddate.app">
          <Mail size={22} />
        </SocialIcon>
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: "1.2rem",
        }}
      >
        <a href="/privacy-policy" style={linkStyle}>
          Privacy Policy
        </a>
        <a href="/terms" style={linkStyle}>
          Terms & Conditions
        </a>
        <a href="/contact" style={linkStyle}>
          Contact Us
        </a>
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
