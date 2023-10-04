import React from 'react';
import '../../styles/Page.css';

const styles = {
    pageStyles: {
      background: 'white',
    },
  };

export default function Contact() {
  return (
    <section style={styles.pageStyles} className="pages">
      <h2>Contact Page</h2>
      <form className='w-50 mx-auto text-center'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="name" className="form-control" id="name"/>
  </div>
  <div className="mb-3">
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Message</label>
</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<p className='text-center'>I can be reached by phone at (320)200-8279 or by email at jfujan@outlook.com</p>
    </section>
  );
}
