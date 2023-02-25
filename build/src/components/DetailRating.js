
import React from "react";

import fullstar from "../icons/star-solid.svg"
import emptystar from "../icons/star-regular.svg"


const DetailRating = props => {

    const [rated, setRated] = React.useState(false);

    const [userStars, setUserStars] = React.useState([]);
    const [userEmptyStars, setEmptyStars ]= React.useState([]);

    const handleRating = (e) => {

        let amount = parseInt(e.currentTarget.id);

        let tempUserStars  = [];
        let tempEmptyStars = [];

        for(let i = 0; i < amount; i++){
            tempUserStars.push("userFull"+i);
        }

        for(let i = 0; i < 5-amount; i++){
            tempEmptyStars.push("userEmpty"+i);
        }

        setUserStars(tempUserStars);
        setEmptyStars(tempEmptyStars);

        setRated(!rated);
    }



    const renderRated = () => {
        return ( 
            <div className="flex justify-center">
                {userStars.map((star) => 
                (<img className="opacity-50" style={{ height: 40, width: 40}} src= {fullstar}  alt="star" key={star}></img>)
            )}
                {userEmptyStars.map((star) => 
                (<img className="opacity-50" style={{ height: 40, width: 40}} src= {emptystar}  alt="star" key={star}></img>)
                )}
            </div>
        );
    };
    const renderNormal = () => {
            return (
                    <div className="flex justify-center">
                    <img className="hover:opacity-50" onClick={handleRating} id="1" style={{ height: 40, width: 40}} src={emptystar}  alt="star"></img>
                    <img className="hover:opacity-50" onClick={handleRating} id="2" style={{ height: 40, width: 40}} src={emptystar}  alt="star"></img>
                    <img className="hover:opacity-50" onClick={handleRating} id="3" style={{ height: 40, width: 40}} src={emptystar}  alt="star"></img>
                    <img className="hover:opacity-50" onClick={handleRating} id="4" style={{ height: 40, width: 40}} src={emptystar}  alt="star"></img>
                    <img className="hover:opacity-50" onClick={handleRating} id="5" style={{ height: 40, width: 40}} src={emptystar}  alt="star"></img>
                    </div>
            );
        }


   if (rated) {
      return renderRated();
   }
   else {
      return renderNormal();
   }
}

export default DetailRating