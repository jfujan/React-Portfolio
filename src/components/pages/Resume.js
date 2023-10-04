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
        <p>No resume yet</p>
    </section>
        );
    }

export default Resume;