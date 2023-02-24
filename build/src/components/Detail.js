import React from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import HeaderApp from "./HeaderApp.js";
import Footer from"./Footer";
import theatreImage from "../theatre.jpg";

Modal.setAppElement('#root') //gets rid of an error regarding Modal

const Detail = props => {

// Modal code modified from: https://www.npmjs.com/package/react-modal 

const [open, setOpen] = React.useState(false);

const openModal = () => {
   setOpen(true);
}

const closeModal = () => {
   setOpen(false);

}


// Uses location state to pass a movie in from the list
const location = useLocation();

const movie = location.state;


//const poster = `https://image.tmdb.org/t/p/w154/${this.props.currentMovie.poster}`;

// currency format code taken from: https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo 
  return (
    <>
    <main className="grid gap-1 grid-cols-5 grid-rows-5 bg-cover bg-center w-full h-full justify-items-center bg-local gap-5"
    style={{ backgroundImage: `url(${theatreImage})` }}>
    <HeaderApp />
    <div className="col-span-5 row-span-5 min-w-[1000px] flex flex-row min- bg-red-900 shadow-lg justify-center items-center m-6 rounded-md">
    <img
            onClick={openModal}
            className="object-scale-down w-30 h-30 rounded-md m-6 "
            src={"https://image.tmdb.org/t/p/w342" + movie.poster}
            alt={movie.title}
          />
        <div className="bg-slate-50 rounded-md w-full m-5 h-full p-6 m-6 grid grid-cols-2 grid-rows-2 gap-5 content-evenly">
          <div>
            
            <h1 className="text-xl font-mono font-bold italic">{movie.title}</h1>
            <h3 className="font-mono">{movie.tagline}</h3>
            <br/>
            <button className="bg-slate-50 rounded-lg w-40 h-10 border-2 border-solid border-black font-mono">FAVORITE</button>
            <br/>
            <br/>
            <p className="font-mono"><strong>Released:</strong> {movie.release_date}</p>
            <p className="font-mono"><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p className="font-mono"><strong>Revenue:</strong> ${movie.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            <br/>
            <p className="font-mono"><strong>Overview:</strong></p>
            <p className="font-mono">{movie.details.overview}</p>
            <br />
            <p className="font-mono"><strong>Links:</strong></p>
            <a href={"https://www.themoviedb.org/movie/" + movie.tmdb_id}>TMDB</a>
            <br/>
            <a href={"https://www.imdb.com/title/" + movie.imdb_id}>IMDB</a>
            </div>

            <div>
              <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop} 
              alt="backdrop"
              className="rounded-md"
              >
              </img>
              <br />
              <div className="border-4 rounded-md w-full">
                Ratings go here
              </div>
              <br/>
              <Link to="/build/browse"><button className="bg-slate-50 rounded-lg w-40 h-10 border-2 border-solid border-black font-mono">BACK TO SEARCH</button></Link>

            </div>
        </div>
    
    </div>

    <Footer />
    
    <Modal
      className="fixed inset-x-0 mx-auto h-full shadow-lg w-full max-w-screen-sm p-4 mr-50"
      isOpen={open}
      onRequestClose={closeModal}
      contentLabel="Poster Image"
      style={{overlay:{
         backgroundColor: 'rgba(0, 0, 0, 0.75)' //change modal overlay color to black
      }}}
      >
      
      <div>
        <img
            className="object-scale-down rounded-sm "
            src={"https://image.tmdb.org/t/p/w500" + movie.poster}
            alt={movie.title}
          />
      </div>


   </Modal>
   </main>
    </>
  );
};

export default Detail;
