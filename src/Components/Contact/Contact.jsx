import React ,{useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pv6t3d5', 'template_kmnwq9i', form.current, 'mdbXKI4T1CfRWr9R9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };




  return (
    <div className="contact-form" id="Contact">
        <div className="c-left">
           <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
           </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name" />
                <input type="text" name="user_email" className="user" placeholder="Email" />
                <textarea name="message" className="user" placeholder="Message" />
                <input type="submit" value="send" className="button" />
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact