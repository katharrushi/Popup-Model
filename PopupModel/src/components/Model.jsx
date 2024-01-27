import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Download } from 'lucide-react';

const Model = ({ onClose }) => {
  const modelRef = useRef();
  const [email, setEmail] = useState('');

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const downloadPdf = () => {
    // Validate email address (you may use a more robust validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const pdfUrl = 'https://drive.google.com/file/d/1mzPuVYb8NVvS7T_hbLKviZ-qQwsyjY-i/view?usp=drive_link';


    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; 
    link.download = 'your-ebook.pdf';

   
    link.click();
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='mt-10 flex flex-col gap-5 text-white'>
        <button className='place-self-end' onClick={onClose}>
          {' '}
          <X size={30} />
        </button>
        <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
          <h1 className='text-3xl font-extrabold'>DOWNLOAD FREE EBOOK</h1>
          <p className='text-3xl font-bold max-w-md text-center'>
            Want to Learn How to Crack Web Development Interviews Like a Pro!
          </p>
          <form>
            <input
              type='email'
              placeholder='Enter your email'
              required
              value={email}
              onChange={handleEmailChange}
              className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
            />
            <button
              type='button' 
              onClick={downloadPdf}
              className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'
            >
              {' '}
              <Download /> Download eBook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
