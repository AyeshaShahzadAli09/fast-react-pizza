import { useSelector } from "react-redux";

const Username = () =>{

    const username = useSelector((state)=> state.user.username);

    if(!username) return null;

    return (
        <div className="text-sm hidden text-semibold md:block">{username}</div>
    )
}

export default Username;