import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { quiz as quizData } from '../components/quiz/FakeData'; 

const Quiz = () => {
    const [form, setForm] = useState({
      name: "",
      gender: "",
      address: "",
      status: "",
      profession: "",
      phone: "",
      lahan_kamar: "",
      lahan_parkiran: "",
      lahan_spek: "",
      kamar_parkiran: "",
      kamar_spek: "",
      parkiran_spek: ""
    });
    
    const {name,gender,address,status,profession,phone} = form;

    const onChange = ({target}) => {
      setForm({ ...form, [target.name]: target.value});
    };
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quiz, setQuiz] = useState(quizData);

    const {question, options, label} = quiz[currentIndex];

    const nextQuestion = () =>{
        if(quiz.length - 1 === currentIndex) return;
        setCurrentIndex(currentIndex + 1)
    }


    const sendData = async () => {
            await axios.post("https://spk-api.klikhub.id/calculate", form)
           
            }
        
    

    const previousQuestion = () =>{
        if(currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1)
    }

        const selectOption = (indexSelected, indexOptionSelected) =>{
            setQuiz(
            quiz.map((item, index) =>
            index === indexSelected
             ? {...item, selected: true,
                options: options.map((item, index) =>
                index === indexOptionSelected
                    ? {...item, selected: true}
                    : {...item, selected: false}
                    ),
                }
                : item,
            
            )
        )
        
    }
    
    return (
        <div className="container mt-4">
          <h2>Biodata</h2>
          <form>
              <div className="form-group">
                  <label>Nama</label> 
                <input name="name" placeholder="Masukan Nama" value={name} onChange={(e) => onChange(e)} type="text" class="form-control" />
              </div>
              <div className="form-group">
                  <label>Jenis Kelamin</label> 
                <select name="gender" value={gender} onChange={(e) => onChange(e)} class="form-control">
                    <option value="" holder>Pilih Jenis Kelamin</option>
                    <option value="Pria" holder>Pria</option>
                    <option value="wanita" holder>Wanita</option>
                </select>
              </div>
              
              <div className="form-group">
                  <label>address</label> 
                <input name="address" placeholder="Masukan address" value={address} onChange={(e) => onChange(e)} type="text" class="form-control" />
              </div>
              <div className="form-group">
                  <label>Status</label> 
                <select name="status" value={status} onChange={(e) => onChange(e)} class="form-control">
                    <option value="" holder>Pilih Status</option>
                    <option value="kawin" holder>Kawin</option>
                    <option value="belum_kawin" holder>Belum Kawin</option>
                </select>
              </div>
              <div className="form-group">
                  <label>profession</label> 
                <input name="profession" placeholder="Masukan profession" value={profession} onChange={(e) => onChange(e)} type="text" class="form-control" />
              </div>
              <div className="form-group">
                  <label>Nomor Telepon</label> 
                <input name="phone" placeholder="Masukan nomor telepon" value={phone} onChange={(e) => onChange(e)} type="number" class="form-control" />
              </div>
            
          </form>
            
            <h1 className="text-center my-3">Kuisioner Desain Rumah</h1>
            <div className="card">
                <div className="card-header" style={{fontSize: 25}}>{currentIndex +1}. {question}</div>
                <div className="card-body">
                    {options.map((item, index) => (
                        <div
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            fontSize: 18,
                        }}
                        key={index}
                        >
                            <div
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 100,
                                backgroundColor: item?.selected ? "greenyellow" : "grey",
                                cursor: 'pointer',
                                marginRight: 5,
                            }}
                             onClick={() => selectOption(currentIndex, index)}>
                            </div>
                            {item.title}
                        </div>
                        ))}
            
            {options.find(
                    option => option.correct && option.selected === option.correct
                ) ? (
                    <div className="form-group">
                    <label>Rasio Keyakinan Jawaban</label> 
                    <select name={label} value={form[label]} onChange={(e) => onChange(e)} class="form-control">
                        <option value="" holder>Pilih Rasio</option>
                        <option value="1/1" holder>1</option>
                        <option value="2/1" holder>2</option>
                        <option value="3/1" holder>3</option>
                        <option value="4/1" holder>4</option>
                        <option value="5/1" holder>5</option>
                        <option value="6/1" holder>6</option>
                        <option value="7/1" holder>7</option>
                        <option value="8/1" holder>8</option>
                        <option value="9/1" holder>9</option>
                    </select>
                        Jawaban anda : {options.find((item) => item.correct).title}
                </div>

                ) : (
                
                    <>
                    <div className="form-group">
                    <label>Rasio Keyakinan Jawaban</label>    
                    <select name={label} value={form[label]} onChange={(e) => onChange(e)} class="form-control">
                        <option value="" holder>Pilih Rasio</option>
                        <option value="1/1" holder>1</option>
                        <option value="1/2" holder>2</option>
                        <option value="1/3" holder>3</option>
                        <option value="1/4" holder>4</option>
                        <option value="1/5" holder>5</option>
                        <option value="1/6" holder>6</option>
                        <option value="1/7" holder>7</option>
                        <option value="1/8" holder>8</option>
                        <option value="1/9" holder>9</option>
                    </select>
                        Jawaban anda : {options.find(item => item.selected)?.title}
                </div>
                    </>
                )}
                    
            <div className="d-flex justify-content-between pt-3">
                <button className="btn btn-secondary col-sm-2" onClick={() => previousQuestion()} disabled={currentIndex === 0 ? true : false}>Previous</button>
                {quiz.length - 1 === currentIndex ?
                (<Link className="btn btn-success col-sm-2" to="/summary" onClick={() => sendData()}>Submit</Link>) : (<button className="btn btn-primary col-sm-2" onClick={() => nextQuestion()}>Next</button>)
                }
                </div>
            </div>
           
            </div>
        </div>
        
    )
}

export default Quiz
