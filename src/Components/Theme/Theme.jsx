import React, { useState, useEffect } from 'react';
import './Theme.css';

const Theme = () => {
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    if (theme === 'dark') {
      if (document.body.classList.contains('lightTheme')) {
        document.body.classList.remove("lightTheme");
      }
      document.body.classList.add("darkTheme")
    } else {
      if (document.body.classList.contains('darkTheme')) {
        document.body.classList.remove("darkTheme");
      }
      document.body.classList.add("lightTheme");
    }
  }, [theme])

  return (
    <>
      <div className='theme-switch-container'>
        <div  id='theme-switcher'>
          <span id='theme-icon'><i className="las la-adjust"></i></span>
          <label className="switch">
            <input type="checkbox" onChange={handleChange} checked={checked} />
            <span className="slider round" />
          </label>
        </div>
        <div id='theme-text'>Actual theme is "{theme}"</div>
      </div>
    </>
  )
}

export default Theme;