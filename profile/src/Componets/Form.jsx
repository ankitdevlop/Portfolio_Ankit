import React, { useState } from 'react';

import axios from 'axios';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import Loder from '../Loder';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
if (formData=="") {

}
    try {
      const response = await axios.post('https://ankiot-bakend-1.onrender.com/send-email', formData);
      const response2 = await axios.post('https://ankiot-bakend-1.onrender.com/receive-message', formData);

      if (response.status === 200) {
        console.log('Email sent successfully');
        // Optionally, reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        toast.success("form Submitted")
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
        toast.error("fill The All fileds")
    }  finally {
        setLoading(false); // Reset loading state regardless of the submission result
      }
  };

  return (
    <form onSubmit={handleSubmit} className=" text-white border border-red-500 p-6 bg-gray-900">
  {loading &&  <Loder/>}
         <Toaster />
    <h2 className="text-2xl pb-3 font-semibold">
      Send Message
    </h2>
    <div>
      <div className="flex flex-col mb-3">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="message">Message</label>
        <textarea 
          rows="4" 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
        />
      </div>
    </div>
    <div className="w-full pt-3">
      <button type="submit" className="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer">
        Send
      </button>
    </div>
  </form>
  );
}

export default ContactForm;
