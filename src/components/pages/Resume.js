import React from "react";
import '../../styles/Page.css';

const styles = {
    pageStyles: {
      background: 'white',
    },
  };

  function Resume() {
    return (
      <section style={styles.pageStyles} className="pages">
        <h2>Resume</h2>
        <a href="resume2024.pdf">Resume</a>
    </section>
        );
    }

export default Resume;
