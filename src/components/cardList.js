import React from "react";
import Card from "./card";

const cardList = ({robots})=>{
    
    return(
        <div>
            
            {
                robots.map((user, index) => {
                    //returning each card
                    return(
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                        />
                    )
                })
            }

        </div>
    );
}
export default cardList;