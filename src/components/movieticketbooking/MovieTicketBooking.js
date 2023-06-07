import React from 'react';
import './MovieTicketBooking.css';

const MovieTicketBooking = () => {
  return (
    <div className='div'>
    <h1 className='head-top'>Book the Show</h1>
    <div className="form-container"> 
      <form>
      
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="text">Movie Name
            <input type="text" className="form-control" id="inputEmail4" />
            </label>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4"className="text">Prefered Movie Language</label>
            <input type="text" className="form-control" id="inputPassword4" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress"className="text">Name</label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2"className="text">Number of Tickets</label>
          <input type="number" className="form-control" id="inputAddress2" />
        </div>
  
        <button type="submit" className="btn btn-primary">Book Tickets</button>
        
      </form>
    </div>
    </div>
    
  );
};

export default MovieTicketBooking;