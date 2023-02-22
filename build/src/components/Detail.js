import React from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import HeaderApp from "./HeaderApp.js";

const Detail = props => {

const [open, setOpen] = React.useState(false);

const openModal = () => {
   setOpen(true);
}

const closeModal = () => {
   setOpen(false);

}

//const id = this.props.currentMovie;

//const poster = `https://image.tmdb.org/t/p/w154/${this.props.currentMovie.poster}`;



  return (
    <>
    <HeaderApp />
    <div className="flex flex-row bg-red-900 shadow-lg min-h-screen justify-center items-center m-6 rounded-md">
        <div className="bg-slate-50 rounded-md w-full m-5">
            something
        </div>
    </div>
    </>
  );
};

export default Detail;
