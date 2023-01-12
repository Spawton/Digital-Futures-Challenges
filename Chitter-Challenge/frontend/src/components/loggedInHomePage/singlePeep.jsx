const SinglePeep = ({ message, username, time }) => {

    return (
        <>
            <span data-testid="user">{username}</span>
            <span data-testid="time">{time}</span>
            <span data-testid="message">{message}</span>

        </>
    )

}

export default SinglePeep; 