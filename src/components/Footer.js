import React from "react";
import '../styles/Footer.css';

const styles = {
    footerStyle: {
      background: 'light blue',
      fontSize: '50px',
    },
  };

  function Footer() {
    return (
        <footer style={styles.footerStyle} className="footer text-center">
        <a href="https://github.com/jfujan">Github</a>
        </footer>
    );
    }

export default Footer;