import React from "react";
import "./Card.css";

const Card = ({ele }) => {
     console.log(ele)

    return (
      <>
        <div className="box-container">
            <div className="card">
                <img src={ele.avatar}></img>
                <div className="data">
                
                    <h4>First Name:</h4>
                    <p>{ele.first_name}</p>
                    <br />
                </div>
                <div className="data">
                    <h4>Last Name:</h4>
                    <p>{ele.last_name}</p>
                </div>
                <div className="data">
                    
                    <h4>Email:</h4>
                    <p>{ele.email}</p>
                </div>
            </div>
       
        </div>
        </>
    );
};

export default Card;
