import React from "react";

const Company = ({name, perks, image}) => {
    return (
        <div className="company">
            <h1>{name}</h1>
            <ol>
                {perks.map(perk => (
                    <li>{perk}</li>
                ))}
            </ol>
            
            <img src={image} alt=""/>
        </div>
    );
}

export default Company;