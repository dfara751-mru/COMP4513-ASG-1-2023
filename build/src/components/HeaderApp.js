import React from 'react'; 
import Modal from 'react-modal';
import { Link } from 'react-router-dom'; 

// Modal code modified from: https://www.npmjs.com/package/react-modal 
 
const HeaderApp = function (props) { 

const [open, setOpen] = React.useState(false);

const openModal = () => {
   setOpen(true);
}

const closeModal = () => {
   setOpen(false);
}

 return ( 
   <>
    <div className="col-span-5 cols-start-1 flex flex-row justify-around w-full h-24 rounded-b-md bg-black/75 items-center content-center">
      <Link to="/build/home"><div className='text-4xl'>🎥</div></Link>
      <Link to="/build/home"><h3 className="text-white text-4xl font-mono font-bold italic">REACT MOVIE SEARCH</h3></Link>
      <button onClick={openModal} className="bg-slate-50 rounded-lg w-20 h-10 border-2 border-solid border-black font-mono">ABOUT</button>
    </div>
    <Modal
      className="fixed right-0 h-full bg-black/75 shadow-lg w-full max-w-screen-sm p-4 rounded-l-md mr-50"
      isOpen={open}
      onRequestClose={closeModal}
      contentLabel="About"
      style={{overlay:{
         backgroundColor: 'rgba(0, 0, 0, 0.75)' //change modal overlay color to black
      }}}
      >
      
      <div>
         <h1 className="text-white text-4xl font-mono font-bold italic">ABOUT</h1>
         <div className='bg-slate-50 m-10 h-60 rounded-md'>
            <p>We'll put stuff here eventually.</p>
         </div>
         <button className="bg-slate-300 rounded-lg w-20 h-10 border-2 border-solid border-black font-mono" onClick={closeModal}>CLOSE</button>
      </div>


   </Modal>
    </>
 ); 
} 
 
export default HeaderApp; 
