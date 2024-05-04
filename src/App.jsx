// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [modalHome, setModalHome] = useState(false);
//   const [modalAbout, setModalAbout] = useState(false);

//   const toggleModalHome = () => {
//     setModalHome(!modalHome);
//   };

//   const toggleModalAbout = () => {
//     setModalAbout(!modalAbout);
//   };

//   return (
//     <>
//       <div className="app">
//         <ul>
//           <a onClick={toggleModalHome} href="#">Home</a>
//           <a onClick={toggleModalAbout} href="#">About</a>
//           <a href="#">Faq</a>
//         </ul>
//         {modalHome && (
//           <div className="modal">
//             <p>This is the Home modal content</p>
//             <button onClick={toggleModalHome}>Close Modal</button>
//           </div>
//         )}
//         {modalAbout && (
//           <div className="modal2">
//             <p>This is the About modal content</p>
//             <button onClick={toggleModalAbout}>Close Modal</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";

function App() {
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    setModalPosition({ x: buttonRect.left, y: buttonRect.bottom });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="app">
        <ul className="navbar">
          <li>
            <button onClick={handleButtonClick}>Home</button>
          </li>
          <li>
            <button onClick={handleButtonClick}>About</button>
          </li>
          <li>
            <button onClick={handleButtonClick}>Faq</button>
          </li>
        </ul>
        {showModal && (
          <div className="modal" style={{ top: modalPosition.y, left: modalPosition.x }}>
            <p>This is the modal content</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
