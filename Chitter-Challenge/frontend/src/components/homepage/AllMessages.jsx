const AllMessages = ({ messageProp }) => {
    const allmessages = messageProp.length && messageProp.map(messages => {
        const { _id, username, name, message, peepDateTime } = messages;
        // const time = new Date(parseInt(peepDateTime));


        return (
            <div className="m-4 card gedf-card" key={_id}>
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="ml-2">
                                <div className="h5 m-0" data-testid="user">@{messages.username}</div>
                                <div className="h7 text-muted" data-testid="name">{messages.name}</div>
                            </div>
                            <div>
                                <div className="text-muted h7 mb-2 w-100"> <i className="fa fa-clock-o"></i>{messages.peepDateTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text" data-testid="message">
                        {messages.message}
                    </p>
                </div>
                <div className="card-footer">
                    <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                    <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                    <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                </div>
            </div>
        )
    });

    return (
        <>
            {allmessages}
        </>
    )
}

export default AllMessages;