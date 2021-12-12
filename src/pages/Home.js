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
                        <h2>Login Sistem Desain Rumah</h2>
                            <form onSubmit={() => alert(JSON.stringify(posts))}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                     <input name="username" placeholder="Masukan Username" value={username} onChange={(e) => onChange(e)} type="email" class="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input name="password" placeholder="Masukan Username" value={password} onChange={(e) => onChange(e)} type="password" class="form-control" />
                                </div>
                                <div className="mt-4">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>   
                                </div>
                            </form>
                        </div>
                </div>
            </div> 
        

       
    )
}

export default Home
