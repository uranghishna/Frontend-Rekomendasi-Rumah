import React from 'react'

import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                        <h1>SELAMAT DATANG</h1>
                        <h2>Sistem Desain Rumah</h2>
                        <Link className="btn btn-success col-sm-2" to="/quiz">Mulai</Link>
                        </div>
                </div>
            </div> 
        

       
    )
}

export default Home
