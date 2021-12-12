import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"

const QuizSummary = () => {
    const history = useHistory()

    const [usersData, setUsersData] =  useState([])

    const getusers = async () => {
        try {
            const {data} = await axios.get("https://spk-api.klikhub.id/history")
            
            setUsersData(data.result)
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getusers();
        history.push("/summary");
    }, [])
    
    return (
        <>

        <div className="my-3">
            <h1 className="text-center mb-3">Hasil Kuisioner</h1>
        <hr/>
            <div className="container" id="bio">
            <div className="row">
                <div className="col-sm-12">
                    <table class="table">
                            {usersData.map(user => (
                        <tbody key={user.id}>
                        <h4 className="mt-4">Nama : {user.name}</h4>
                        <h6>Jenis Kelamin : {user.gender}</h6>
                        <h6>Alamat : {user.address}</h6>
                        <h6>Status : {user.status}</h6>
                        <h6>Profesi : {user.profession}</h6>
                        <h6>Nomor Telepon : {user.phone}</h6>
                        <h6>Rekomendasi 1 : {user.first_recomendation.name}, {user.first_recomendation.type}, {user.first_recomendation.desc}</h6>
                        <h6>Rekomendasi 2 : {user.second_recomendation.name}, {user.second_recomendation.type}, {user.second_recomendation.desc}</h6>
                            <tr>    
                                <th colspan="2" className="text-center">Rekomendasi 1</th>
                                <th colspan="2" className="text-center">Rekomendasi 2</th>
                            </tr>
                            <tr>    
                                <th>Keterangan Bangunan</th>
                                <th>Spesifikasi Bahan</th>
                                <th>Keterangan Bangunan</th>
                                <th>Spesifikasi Bahan</th>
                            </tr>
                            <tr>    
                                <td>harga : {user.first_recomendation.interior_and_exterior.harga}</td>
                                <td>{user.first_recomendation.specification_recomendation[0]}</td>
                                <td>harga : {user.second_recomendation.interior_and_exterior.harga}</td>
                                <td>{user.second_recomendation.specification_recomendation[0]}</td>
                            </tr>
                            <tr >

                                <td>luas tanah : {user.first_recomendation.interior_and_exterior.luas_tanah}</td>
                                <td>{user.first_recomendation.specification_recomendation[1]}</td>
                                <td>luas tanah : {user.second_recomendation.interior_and_exterior.luas_tanah}</td>
                                <td>{user.second_recomendation.specification_recomendation[1]}</td>
                            </tr>
                            <tr>
                                <td>lebar muka : {user.first_recomendation.interior_and_exterior.lebar_muka}</td>
                                <td>{user.first_recomendation.specification_recomendation[2]}</td>
                                <td>lebar muka : {user.second_recomendation.interior_and_exterior.lebar_muka}</td>
                                <td>{user.second_recomendation.specification_recomendation[2]}</td>
                            </tr>
                            <tr>
                                <td>panjang bangunan : {user.first_recomendation.interior_and_exterior.panjang_bangunan}</td>
                                <td>{user.first_recomendation.specification_recomendation[3]}</td>
                                <td>panjang bangunan : {user.second_recomendation.interior_and_exterior.panjang_bangunan}</td>
                                <td>{user.second_recomendation.specification_recomendation[3]}</td>
                            </tr>
                            <tr>
                                <td>luas carport : {user.first_recomendation.interior_and_exterior.luas_carport}</td>
                                <td>{user.first_recomendation.specification_recomendation[4]}</td>
                                <td>luas carport : {user.second_recomendation.interior_and_exterior.luas_carport}</td>
                                <td>{user.second_recomendation.specification_recomendation[4]}</td>
                            </tr>
                            <tr>
                                <td>jumlah kamar : {user.first_recomendation.interior_and_exterior.jumlah_kamar_tidur}</td>
                                <td>{user.first_recomendation.specification_recomendation[5]}</td>
                                <td>jumlah kamar : {user.second_recomendation.interior_and_exterior.jumlah_kamar_tidur}</td>
                                <td>{user.second_recomendation.specification_recomendation[5]}</td>
                            </tr>
                            <tr>
                                <td>kamar mandi : {user.first_recomendation.interior_and_exterior.jumlah_kamar_mandi}</td>
                                <td>{user.first_recomendation.specification_recomendation[6]}</td>
                                <td>kamar mandi : {user.second_recomendation.interior_and_exterior.jumlah_kamar_mandi}</td>
                                <td>{user.second_recomendation.specification_recomendation[6]}</td>
                            </tr>
                            <tr>    
                                <th colspan="2" className="text-center">Gambar Rekomendasi 1</th>
                                <th colspan="2" className="text-center">Gambar Rekomendasi 2</th>
                            </tr>
                            <tr>    
                                <th className="text-center"><img src={user.first_recomendation?.imageUrls[0]} height={250} weight={250}></img></th>
                                <th className="text-center"><img src={user.first_recomendation?.imageUrls[1]} height={250} weight={250}></img></th>
                                <th className="text-center"><img src={user.second_recomendation?.imageUrls[0]} height={250} weight={250}></img></th>
                                <th className="text-center"><img src={user.second_recomendation?.imageUrls[1]} height={250} weight={250}></img></th>
                            </tr>
                            <tr>    
                                <th className="text-center"><img src={user.first_recomendation?.imageUrls[2]} height={250} weight={250}></img></th>
                                <th className="text-center"><img src={user.first_recomendation?.imageUrls[3]} height={250} weight={250}></img></th>
                                <th className="text-center"><img src={user.second_recomendation?.imageUrls[2]} height={250} weight={250}></img></th>
                                <th className="text-center"><img src={user.second_recomendation?.imageUrls[3]} height={250} weight={250}></img></th>
                            </tr>
                        </tbody>
                             ))}
                    </table>
                </div>
            </div>
        </div>
            
        </div>
        </>
    )
}

export default QuizSummary
