import React from 'react'; 



const SingleMovie = function (props) {
    

    const handleFavorite = (e) => {
        props.saveFavorites(props.movie);
    }

    const handleView = (e) => {
        console.log("handle View!");
    }

    return (
      <li className="inline-block w-full is-one-third-desktop is-half-tablet">
          <div className="card-image">
            <figure className="image is-2by3">
              <img
                src={"https://image.tmdb.org/t/p/w92" + props.poster}
                alt={props.title}
              />
            </figure>
          </div>
          <div className="card-content has-text-centered content-rectangle">
            <h2 className="title is-6">
              {props.title} ({props.runtime} min)
            </h2>
            <p className="is-size-7">{props.tagline}</p>
          </div>
          <button onClick={handleView}>View</button><button onClick={handleFavorite}>❤</button>
          <footer className="card-footer">
            {/* <MovieLink id={props.tmdbID} /> */}
          </footer>
        
      </li>

/* <li className="column is-one-third-desktop is-half-tablet">
<div className="card">
  <div className="card-image">
    <figure className="image is-2by3">
      <img
        src={"https://image.tmdb.org/t/p/w92" + props.poster}
        alt={props.title}
      />
    </figure>
  </div>
  <div className="card-content has-text-centered content-rectangle">
    <h2 className="title is-6">
      {props.title} ({props.runtime} min)
    </h2>
    <p className="is-size-7">{props.tagline}</p>
  </div>
  <button onClick >View</button><button >❤</button>
  <footer className="card-footer">
     <MovieLink id={props.tmdbID} /> 
  </ footer>
</div>
</li> */



    );
  };

export default SingleMovie; 

