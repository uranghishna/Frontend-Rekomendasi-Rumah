import React, {useState, useEffect} from 'react'

const Home = () => {
    const [posts, setPosts] = useState({
        username: "",
        password: "",
    });
    

    const {username, password} = posts;

    const onChange = (e) => {
      setPosts({ ...posts, [e.target.name]: e.target.value});
    }
    
    return (
        <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h1>SELAMAT DATANG</h1>
                        <h2>Sistem Desain Rumah</h2>
                        </div>
                </div>
            </div> 
        

       
    )
}

export default Home
