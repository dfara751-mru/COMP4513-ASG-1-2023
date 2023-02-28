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
         <div className='bg-slate-50 m-10 h-[600px] rounded-md text-center overflow-y-auto'>
            <p className='font-mono text-xl'><strong>Welcome to our React Movie Searching Site</strong></p>
            <p>Our COMP 4513: Advanced Web Development Assignment 1</p>
            <p>Mount Royal University</p>
            <br />
            <p className='font-mono '><strong>Technologies used:</strong></p>
            <ul>
               <li>React</li>
               <li>Create-React-App</li>
               <li>React-Router-DOM</li>
               <li>React-Modal</li>
               <li>Lodash</li>
               <li>Tailwind CSS</li>
               <li>Github Pages (for hosting)</li>
            </ul>
            <br />
            <p className='font-mono text-l'><strong>About the Devs:</strong></p>
            <div className='flex gap-32 border-4 m-5 p-8'>
            <p className='font-mono'><strong>Daniel Faratro</strong></p><a className="text-blue-800" href="https://github.com/dfara751-mru">Github Profile</a>
            </div>
            <div className='flex gap-32 border-4 m-5 p-8'>
            <p className='font-mono'><strong>Jordan Walker</strong></p><a className="text-blue-800" href="https://github.com/Jwalker457">Github Profile</a>
            </div>
            <p className='font-mono '><strong>Third Party Code Sources:</strong></p>
            <ul>
               <li> Loading GIF available under CCO 1.0 from: <a className="text-blue-800" href="https://commons.wikimedia.org/wiki/File:Youtube_loading_symbol_1_(wobbly).gif">https://commons.wikimedia.org</a></li>
               <li> Modal code modified from: <a className="text-blue-800" href="https://www.npmjs.com/package/react-modal">https://www.npmjs.com/</a></li>
               <li> Toggle visibility fade in animation derived from: <a className="text-blue-800" href="https://biagio.dev/posts/tailwindcss-react-modal">https://biagio.dev/</a></li>
               <li> Currency format code from: <a className="text-blue-800" href="https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expohttps://www.npmjs.com/package/react-modal">https://stackoverflow.com/</a></li>
               <li> Missing image source fallback code from: <a className="text-blue-800" href="https://stackoverflow.com/questions/29332660/react-update-state-if-image-not-found">https://stackoverflow.com/</a></li>
               <li> Panel toggle visibility fade animation from: <a className="text-blue-800" href="https://biagio.dev/posts/tailwindcss-react-modal">https://biagio.dev/</a></li>
            </ul>
         </div>
         <button className="bg-slate-300 rounded-lg w-20 h-10 border-2 border-solid border-black font-mono" onClick={closeModal}>CLOSE</button>
      </div>


   </Modal>
    </>
 ); 
} 
 
export default HeaderApp; 
