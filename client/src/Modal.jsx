import React, { useState, useEffect, useRef } from 'react';

const modalBtn = {
  border: 'solid white',
  background: 'white',
  padding: '8px 16px',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'absolute',
  right: 0,
  top: 0,
};

const Modal = ({ picture }) => {
  const [popUp, setPopUp] = useState(false);
  const outside = useRef();

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setPopUp(false);
  };

  const enlarge = () => {
    setPopUp(!popUp);
  };

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);

    return () => {
      getClick();
    };
  }, []);

  return (

    <span>
      <img
        ref={outside}
        onClick={enlarge}
        onKeyDown={enlarge}
        src={picture}
        alt="IssaPicture"
      />
      {popUp ? (
        <div className="backdrop">
          <img
            className="modal"
            src={picture}
            alt="IssaModal"
          />
          <button
            className="modalBtn"
            type="button"
            label="close"
            onClick={enlarge}
            onKeyDown={enlarge}
          >
            X
          </button>
        </div>
      ) : null}
    </span>

  );
};
export default Modal;
