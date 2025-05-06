import { LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

import logo from '../public/images/logo-main.png';

export default function Intro({ onFinish }) {
  const [hideLogo, setHideLogo] = useState(false);
  const [hideBackground, setHideBackground] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setHideLogo(true); // Hide the logo after 3 seconds
    }, 3000); // Same time as the fade duration

    const bgTimer = setTimeout(() => {
      setHideBackground(true); // Trigger background fade out after logo disappears
      if (onFinish) onFinish(); // Notify that the intro is complete
    }, 2000); // Start background fade out a bit after the logo disappears

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(bgTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${hideBackground ? 'animate-fadeOut' : ''}`}
    >
      {/* Background container */}
      <div
        className={`absolute inset-0 bg-white transition-all duration-1000 ${hideBackground ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Logo */}
      <img
        src={logo.src} // Replace with your logo path
        alt="Logo"
        className={` w-[25px] h-[25px] sm:w-32 h-32 ${hideLogo ? 'opacity-0' : 'animate-fade'}`}
        style={{ animationFillMode: 'forwards' }}
      />
    </div>
  );
}
