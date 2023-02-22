import React from 'react'; 

const Footer = function (props) {

    return(
    <div className="col-span-5 flex flex-row justify-around w-full h-12 rounded-md bg-red-900 items-center content-center">
        <a href="https://unsplash.com/photos/nLl5sJnElxY"
        className='text-slate-50 font-mono font-bold italic'>
            Image Credit: Simon Ray @unsplash.com
            </a>
    </div>
    );
}

export default Footer;