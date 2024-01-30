import './card.styles.css'

const Card = ({ email, handleClick, active}) => {
    const { from, subject, address, time, read} = email;

    return (
        <div className={read === 'true' ? (active === true ? "active preview" : "read preview") 
                : "unread preview"} onClick={() => handleClick(email)}>
                <h2>
                    <span>{from}</span>
                    <p>{address}</p>
                </h2>
                <h3>Subject: {subject}</h3>
                <p>{time}</p>
        </div>
    )
};

export default Card;