import "./emailbody.styles.css";

const EmailBody = ({ activeEmail }) => {
    const { from, subject, address, time, message} = activeEmail;

    if (!activeEmail.id) {
        return (
            <div className="emailbody">
                <h4>Choose email from sidebar.</h4>
            </div>
        )
    } else {
        return (
            <div className='emailbody'>
                <h2>
                    <span>{from}</span>
                    <p>{address}</p>
                </h2>
                <h3>
                    <span>Subject: {subject}</span>
                    <p>{time}</p>
                </h3>
                <p></p>
                <p>{message}</p>
            </div>
        )
    }

};

export default EmailBody;