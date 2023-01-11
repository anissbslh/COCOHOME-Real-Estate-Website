const Home = () => {

    let name = "mario";

    const handleClick = () => {
       // window.prompt("you clicked");
        name = "aniss"

    }

    const handleClickAgain = (name) => {
        alert(name);
    }

    

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>{
                handleClickAgain("aniss");
            }}>CLicke ME AGAIN (anonymous func)</button>
        </div>
     );
}
 
export default Home;