import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Images } from '../../../constant';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  

  const form = useRef(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [sub, setSub] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_snuucdf';
    const templateId = 'template_x5aee9n';
    const userId = 'EWVAJyWbsv1IeL2Bj';

    const data = {
      from_name: name,
      from_email: email,
      from_tel: tel,
      from_sub: sub,
      to_name: 'Hajar', 
      to_email: 'hbensafy@gmail.com', 
      message: message,
    };
    console.log(data);

    emailjs.send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        
        setName('');
        setEmail('');
        setTel('');
        setSub('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };


  return (
    <div className="max-w-6xl mx-auto py-12 relative"  data-aos="fade-down">
      <div className="absolute top-0 left-0 w-24 h-24">
        <img src={Images.contact} alt="" className="text-yellow-300" />
      </div>
      <div className="absolute bottom-0 right-0 w-34 h-34">
        <img src={Images.contact1} alt="" className="text-purple-300" />
      </div>
      <h3 className="text-center text-[#f75023] text-3xl font-semibold mb-4">Contact Me</h3>
      <h2 className="text-center text-4xl font-bold mb-6">I Want To Hear From You</h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Please fill out the form on this section to contact with me. Or call between<br />
        9:00 a.m. and 8:00 p.m. ET, Monday through Friday
      </p>

      <div className="flex flex-col md:flex-row gap-[13vw] md:justify-center md:items-center ">
        <div className="md:w-1/3 space-y-6 w-full px-4">
          <div className="flex items-center gap-4 justify-center">
            <div className="w-[13vw] h-[9vh] md:w-[5vw] md:h-[10vh] bg-red-100 rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-9 h-9 text-[#f75023]" />
            </div>
            <div>
              <h4 className="text-2xl">Address</h4>
              <p className="text-gray-600">2040, Casablanca</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="md:w-[5vw] md:h-[10vh] w-[13vw] h-[9vh] bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Mail className="w-9 h-9 text-green-500" />
            </div>
            <div>
              <h4 className="text-2xl">Email</h4>
              <p className="text-gray-600">hbensafy@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="md:w-[5vw] md:h-[10vh] w-[13vw] h-[9vh] bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-9 h-9 text-blue-500" />
            </div>
            <div>
              <h4 className="text-2xl">Phone</h4>
              <p className="text-gray-600">+212 607067289</p>
            </div>
          </div>
        </div>

        <form className="md:w-2/3 space-y-4  pt-4 w-full px-4" ref={form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="ps-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:font-sans placeholder:text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ps-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:font-sans placeholder:text-lg"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Your Phone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="ps-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:font-sans placeholder:text-lg"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              className="ps-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:font-sans placeholder:text-lg"
              required
            />
          </div>
          <textarea
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full ps-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:font-sans placeholder:text-lg"
            required
          ></textarea>
          <button className="relative inline-flex items-center px-8 py-2 text-md rounded-full shadow-sm text-white border-[#f75023] bg-[#f75023] border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group" type="submit">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Submit Now
            </span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 bg-[#f8f7f3] group-hover:h-full" />
          </button>
        </form>
      </div>
    </div>
  );
};



export default Contact;