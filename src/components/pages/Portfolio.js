import React from 'react';
import '../../styles/Page.css';

const styles = {
    pageStyles: {
      background: 'white',
    },
  };

export default function Portfolio() {
  return (
    <section style={styles.pageStyles} className="pages">
      <h2>Portfolio</h2>
      <div className="row m-3">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> 
        Note Taker
        </h5>
        <img src="note-taker.png" className='w-100'/>
        <p className="card-text">This app is useful for taking notes. Once you run the server using npm install then node server.js, you can give your note a title and text that will be saved into a database.</p>
        <a href="https://note-taker1323-2d89a96c38aa.herokuapp.com/" className="btn btn-primary">Live Link</a>
        <a href="https://github.com/jfujan/Note-Taker" className="btn btn-primary mx-5">GitHub</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Worday Planner</h5>
        <img src="WorkdayPlanner.png" className='w-100'/>
        <p className="card-text">This website is a work day planner that will show the current time, save your daily work schedule, and display each hour with a corresponding color for past, present, and future events based on the current time.</p>
        <a href="https://jfujan.github.io/Workday-Planner/" className="btn btn-primary">Live Link</a>
        <a href="https://github.com/jfujan/Workday-Planner" className="btn btn-primary mx-5">GitHub</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">J.A.T.E.</h5>
        <img src="jate.png" className='w-100'/>
        <p className="card-text">This app is a PWA text editor that can be used to create notes or code snippets with or without an internet connection.</p>
        <a href="https://jfujanjate-d049eed71a4e.herokuapp.com/" className="btn btn-primary">Live Link</a>
        <a href="https://github.com/jfujan/JATE" className="btn btn-primary mx-5">GitHub</a>
      </div>
    </div>
  </div>
</div>
<div className="row m-3">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">GymTrackr</h5>
        <img src="GymTrackr.jpg" className='w-100'/>
        <p className="card-text">This app allows users to create, record, and keep track of their workout routines and exercises to help them achieve their fitness goals.</p>
        <a href="https://gym-trackerr-c227a2e45128.herokuapp.com/" className="btn btn-primary">Live Link</a>
        <a href="https://github.com/keurid/GymTrackr" className="btn btn-primary mx-5">GitHub</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Netflix & Cocktails</h5>
        <img src="n&c.png" className='w-100'/>
        <p className="card-text">This website allows the user to search for a movie by a keyword and will generate a random cocktail along with the selected movie.</p>
        <a href="https://sirmodv.github.io/Netflix-Cocktail-s/" className="btn btn-primary">Live Link</a>
        <a href="https://github.com/SirModV/Netflix-Cocktail-s" className="btn btn-primary mx-5">GitHub</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Employee Database</h5>
        <img src="employeedb.png" className='w-100'/>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://drive.google.com/file/d/1k6jORngYr4LauqDxykG6VSkbC6DQlxqM/view" className="btn btn-primary">Video Demonstration</a>
        <a href="https://github.com/jfujan/Employee_db" className="btn btn-primary mx-5">GitHub</a>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
