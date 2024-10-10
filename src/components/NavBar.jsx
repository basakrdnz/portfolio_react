import React, { useState } from 'react';

const NavBar = () => {
  const [position, setPosition] = useState({ top: 100, left: 20 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        top: e.clientY - 40, // Yüksekliğin yarısı
        left: e.clientX - 40, // Genişliğin yarısı
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Bırakıldığında sağ veya sola hizala
    const windowWidth = window.innerWidth;
    const targetPosition = position.left > windowWidth / 2 ? windowWidth - 100 : 20; // Sol veya sağa hizala
    setPosition((prevPos) => ({
      ...prevPos,
      left: targetPosition,
    }));
  };

  return (
    <nav
      className="navbar"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Fare menü dışına çıkarsa bırakmayı durdurur
    >
      <div className="bg-circle"></div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#" className="bookmark" data-text="About"></a>
        </li>
        <li className="nav-item">
          <a href="#Skills" className="bookmark" data-text="Skills"></a>
        </li>
        <li className="nav-item">
          <a href="#Projects" className="bookmark" data-text="Projects"></a>
        </li>
        <li className="nav-item">
          <a href="#Contact" className="bookmark" data-text="Contact"></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
