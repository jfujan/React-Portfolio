import React from "react";
import '../../styles/Page.css';

const styles = {
    pageStyles: {
      background: 'white',
    },
  };
  
  function AboutMe() {
    return (
      <section style={styles.pageStyles} className="pages">
        <h2>About Me</h2>
        <p>
          My name is Jake Fujan. I have been coding for about six months and have learned a lot and hope to continue to learn more. Linked above is my resume, my GitHub account, a way to get in contact with me, and a portfolio of all my deployed projects.
        </p>
        <p>
          I was born and raised in St. Cloud, Minnesota. After graduating high school, I moved to Ames, Iowa and attended Iowa State University, where I studied mechanical engineering. Due to the pandemic, I decided to take a brief hiatus from my studies. I have now completed to Fullstack Web Development Bootcamp at the University of Minnesota where I build this webpage and am looking for a job in UI/UX development.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
          ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
          earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </section>
    );
  }
  
  export default AboutMe;
  
