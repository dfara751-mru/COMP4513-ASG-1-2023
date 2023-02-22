// Modal code modified from: https://biagio.dev/posts/tailwindcss-react-modal

const About = ({open, onClose}) => {

    return (
        <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
            <div className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'} transition-opacity duration-300 ease-in-out`} onClick={onClose}>
            </div>
            <div className={`fixed right-0 h-full bg-red-900 shadow-lg w-full max-w-screen-sm p-4 rounded-l-md mr-50 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-300 ease-in-out`}>
                    <h1>About page</h1>
                    <p>Wooop wooop wooop</p>
            </div>
        </div>
    );
}

export default About;