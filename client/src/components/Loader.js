import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import '../Loader.css';
import logo from "../components/images/logoimg.jpg";

const Loader = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);

  useImperativeHandle(ref, () => ({
    startLoading: () => setLoading(true),
    stopLoading: () => setLoading(false),
  }));

  useEffect(() => {
    // Simulating a 2-second delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${loading ? 'visible' : 'hidden'}`}>
    <div className="loader">
      <img alt="loader" src={logo} />
    </div>
   </div>
  );
});

export default Loader;
