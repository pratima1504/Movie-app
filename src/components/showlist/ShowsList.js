import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShowsList.css';


const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);
  
  return (
    <div className="cards-wrapper">
      {shows.map((show) => (
        <div className="card" key={show.show.id}>
          <div className="card-image">
            <img src={show.show.image.medium} alt={show.show.name} />
          </div>
          <div className="bottom-card-elements">
            <div className="details">
              <h4>{show.show.name}</h4>
              <h6>Rating: {show.show.rating.average?`${show.show.rating.average}/10`:`TBD`}</h6>
              <h6>Duration (minutes): {show.show.runtime?show.show.runtime:`TBD`}</h6>
              <h6>Genres: {show.show.genres[0]}</h6>
              <h6>Year: {show.show.premiered}</h6>
            </div>
            <div className="bottom-card">

              <div className="rightside">
                <Link to={`/summary/${show.show.id}`}>
                  <button className="more-details-button">View Summary</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowsList;
