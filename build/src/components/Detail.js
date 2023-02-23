import React from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import HeaderApp from "./HeaderApp.js";
import Footer from"./Footer";

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
    <HeaderApp />
    <div className="col-span-5 row-span-5 min-w-[1000px] flex flex-row min- bg-red-900 shadow-lg justify-center items-center m-6 rounded-md">
    <img
            onClick={openModal}
            className="object-scale-down w-30 h-30 rounded-md m-6 "
            src={"https://image.tmdb.org/t/p/w342" + movie.poster}
            alt={movie.title}
          />
        <div className="bg-slate-50 rounded-md w-full m-5 h-full p-6 m-6">
            <h1 className="text-xl font-mono font-bold italic">{movie.title}</h1>
            <h3 className="font-mono">{movie.tagline}</h3>
            <br/>
            <p className="font-mono"><strong>Released:</strong> {movie.release_date}</p>
            <p className="font-mono"><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p className="font-mono"><strong>Revenue:</strong> ${movie.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            <br/>
            <p className="font-mono"><strong>Overview:</strong></p>
            <p className="font-mono">{movie.details.overview}</p>

        </div>
        <div className="bg-slate-50 rounded-md m-5 h-full p-6 m-6">

        </div>
        <Link to="/build/browse"><button className="bg-slate-50 rounded-lg w-40 h-10 border-2 border-solid border-black font-mono">BACK TO SEARCH</button></Link>
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
    </>
  );
};

export default Detail;
