import React, { useRef } from 'react';
import './ContactForm.css'; 
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const form = useRef();

  const notifySuccess = () => toast.success('Email sent successfully!');
  const notifyError = (message) => toast.error(message);

  const sendEmail = (e) => {
    e.preventDefault();

    const formFields = form.current;
    if (!formFields.from_name.value || !formFields.from_email.value || !formFields.message.value) {
      notifyError('Please fill in all fields before submitting.');
      return;
    }

    emailjs
      .sendForm('service_swxum3s', 'template_pvvn79h', form.current, 'vff0Xu_N3kg4cJVGD')
      .then(
        () => {
          notifySuccess();
          console.log('SUCCESS!');
        },
        (error) => {
          notifyError('Failed to send email. Please try again later.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" placeholder='name' />
      <label>Email</label>
      <input type="email" name="from_email" placeholder='email' />
      <label>Message</label>
      <textarea name="message" placeholder='type your messsage here.' />
      <button type="submit" value="Send">Submit</button>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ fontSize: '14px', borderRadius: '8px' }} 
      />
    </form>
  );
};

export default ContactForm;

