import React from "react";
import Card from '../card/card.component'

import "./cardlist.styles.css";

const CardList = ({ emails, handleClick, active}) => (
    <div className="sidebar">
        {emails.map(email => (
            <Card key={email.id} 
            email={email}
            active={email.id === active}
            handleClick={handleClick}/>
        ))}
    </div>
);

export default CardList;