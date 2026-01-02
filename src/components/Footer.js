const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem",
        textAlign: "center",
        opacity: 0.6,
        fontSize: "0.9rem",
      }}
    >
      © {new Date().getFullYear()} SecondDate
    </footer>
  );
};

export default Footer;
