'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      handleReset();
      setLoading(false);
    }
  };

  const handleReset = () => {
    setEmail('');
    setMessage('');
  };

  return (
    <div className="my-10 border-2 border-black rounded shadow-[4px_4px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col space-y-1.5 p-6">
        <h2 className="text-2xl font-bold">Send Me Your Message!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-black rounded p-2"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-black rounded p-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer bg-black transition-all duration-300 text-white font-semibold rounded p-2 hover:bg-gray-800 inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-white  gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
