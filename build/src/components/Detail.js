import React from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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



//const poster = `https://image.tmdb.org/t/p/w154/${this.props.currentMovie.poster}`;

// currency format code taken from: https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo 
  return (
    <>
    <HeaderApp />
    <div className="col-span-5 row-span-5 min-w-[1000px] flex flex-row min- bg-red-900 shadow-lg justify-center items-center m-6 rounded-md">
    <img
            onClick={openModal}
            className="object-scale-down w-30 h-30 rounded-md m-6 "
            src={"https://image.tmdb.org/t/p/w342" + props.movie.poster}
            alt={props.movie.title}
          />
        <div className="bg-slate-50 rounded-md w-full m-5 h-full p-6 m-6">
            <h1 className="text-xl font-mono font-bold italic">{props.movie.title}</h1>
            <h3 className="font-mono">{props.movie.tagline}</h3>
            <p className="font-mono">Released: {props.movie.release_date}</p>
            <p className="font-mono">Runtime: {props.movie.runtime}</p>
            <p className="font-mono">Revenue: ${props.movie.revenue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            <p className="font-mono">Overview:</p>
            <p className="font-mono">{props.movie.details.overview}</p>

            <div>
              
            </div>

            <div>

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
            src={"https://image.tmdb.org/t/p/w500" + props.movie.poster}
            alt={props.movie.title}
          />
      </div>


   </Modal>
    </>
  );
};

export default Detail;
