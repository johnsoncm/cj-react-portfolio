import React from 'react';

export default function ContactForm(){
    return(
  <form>
      <h1>Contact Me!</h1>
      <input className="fName" type="text" name="name" placeholder="Full Name">
      </input>
      <input type="text" name="name" placeholder="Email">
      </input>
      <input type="text" name="name" placeholder="Phone Number">
      </input>
      <input type="text" name="name" placeholder="Website"></input>
      <p>Message</p>
      <textarea rows="4"></textarea>
      <button type="submit">Submit</button>
  </form>
      
    )
}