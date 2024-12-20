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
      <li><a href="mailto:rrpinnamraju@gmail.com">rrpinnamraju@gmail.com</a></li>
      <li><a href="https://www.linkedin.com/in/pinnamaraju-sai-venkata-ramaraju-3ba2b7282/">Linkedn</a></li>
      <li><a href="https://github.com/RamaRaju2/">GitHub</a></li>
     </ul>
  </div>

  </>)
}

export default Contact;
