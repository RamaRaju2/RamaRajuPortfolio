import React from "react";

function Contact()
{
  return(<>

  <div className="page">
    <h2>Get In Touch</h2>
    {/* <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit" href>Send</button>
    </form>
     */}
     <ul>
      <li><a href="mailto:tusharhirawat1918@gmail.com">tusharhirawat1918@gmail.com</a></li>
      <li><a href="https://www.linkedin.com/in/tushar-hirawat-a09701309/">Linkedn</a></li>
      <li><a href="https://github.com/tuharhirawat/">GitHub</a></li>
     </ul>
  </div>

  </>)
}

export default Contact;
