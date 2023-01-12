import { useState } from "react";
import axios from "axios";

const AddPeep = ({ userProp }) => {

    const [peep, setPeep] = useState({
        name: ``,
        username: ``,
        peepDateTime: ``,
        message: ``,
    });

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    const handleChange = e => {
        const { name, value } = e.target;
        setPeep({
            ...peep,
            [name]: value,
            name: userProp.name,
            username: userProp.username,
            peepDateTime: `${hours}:${minutes}`,
        });
    }

    const addPeep = async (e) => {
        e.preventDefault();
        const { message } = peep;
        if (message) {
            const res = await axios.post(`http://localhost:4000/user`, peep);
            alert(res.data.message);
            setPeep({ message: '' });
            return;
        } else {
            alert(`Invalid input`);
        }
    }

    return (
        <>
            <section className="card text-center">
                <form className="form-group" onSubmit={addPeep} >
                    <div className="container mt-4 mb-5">
                        <div className="d-flex justify-content-center row">
                            <div className="feed-icon px-2"><i className="fa fa-long-arrow-up text-black-50"></i></div>
                        </div>
                        <div className="bg-white border mt-2">
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                    <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" />
                                        <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold"> Username:{userProp.username} </span>
                                            <span className="text-black-50 time"> Time:{hours}:{minutes} </span></div>
                                    </div>
                                    <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                                </div>
                            </div>
                            <div className="p-2 px-3">
                                <textarea type="text" className="form-control rounded-0 p-9" id="addEntry" rows="3" placeholder="What's on your mind?" name="message" value={peep.message} onChange={handleChange}>Message:</textarea>

                            </div>
                            <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                            <input className="btn btn-outline-primary float-end" type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}



export default AddPeep; 