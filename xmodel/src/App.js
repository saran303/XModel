import { useState } from 'react';
import './App.css';
import Card  from './Card/Card.jsx';

function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    
    <div className="modal" style={{ backgroundColor: `${openForm ? "#7f7f7f" : "#fff"}` }}>
      <div className="modal-content">
          <div className={openForm && "initialRender"}>
            <h1>User Details Model</h1>
            <button className="btn" onClick={() => setOpenForm(true)} >Open Form</button>
          </div>
          {openForm && <Card />}
      </div>
    </div>
  );
}

export default App;
