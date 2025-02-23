import CreateUser from "../features/user/CreateUser"

const Home = () =>{
    return(
        <div className="my-10 text-center capitalize px-4 sm:my-16">
            <h1 className="mb-8  text-xl font-semibold md:text-3xl">The best pizza<br/>
                <span  className="text-yellow-500">Straight out of the oven , straight to you</span>
            </h1>
            <CreateUser/>
        </div>
    )
}

export default Home;