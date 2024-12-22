import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () =>{

    const [username , setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        // console.log(username);
        if(!username) return;
       
        dispatch(updateName(username));
        navigate("/menu");
    }
    return(
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-400 md:text-base">Welcome! Please start by telling us your name</p>
            <input type="text" placeholder="Your Fullname"
            value ={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="input mb-8 w-72"></input>
            {username !== "" &&(
                <div>
                    <Button type="primary">Start Ordering</Button>
                </div>
           )} 
        </form>
    )
}

export default CreateUser;