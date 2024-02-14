import React from "react";



const Card = (props) =>{
    const {id, name, email} = props;
    return (
    //Tachyons build in css like => bg-light-green
    <div className="bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
        <img alt="photo" src={`https://robohash.org/${id}`}></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
}
export default Card;