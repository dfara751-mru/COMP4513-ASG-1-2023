import React from 'react'; 
import {useState} from 'react';
import About from './About.js'

// Modal code modified from: https://biagio.dev/posts/tailwindcss-react-modal
 
const HeaderApp = function (props) { 

const [open, setOpen] = React.useState(false);

 return ( 
   <>
    <div className="col-span-5 cols-start-1 flex flex-row justify-around w-full h-24 rounded-b-md bg-red-900 items-center content-center">
      <div className='text-4xl'>🎥</div>
      <h3 className="text-white text-4xl font-mono font-bold italic">REACT MOVIE SEARCH</h3>
      <button onClick={() => setOpen(true)} className="bg-slate-50 rounded-lg w-20 h-10 border-2 border-solid border-black font-mono">ABOUT</button>
    </div>
    <About open={open} onClose={() => setOpen(false)}/>
    </>
 ); 
} 
 
export default HeaderApp; 
