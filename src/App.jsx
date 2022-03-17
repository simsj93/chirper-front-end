import React, { useState, useRef } from 'react';
import Chirps from './Chirps';
import './styles.css'

const App = () => {
    const [chirps, setChirps] = useState([
        {id: 1, msg: "I'm not a super strong swimmer but I do fine."},
        {id:2,  msg: "I hope nobody notices I fundamentally don't understand React."},
         {id: 3, msg: "This is making me reconsider TEFL certification."}]); 

    const chirpRef = useRef(); 

    function getID() {
        return (chirps.length + 1)
    }; 

    function handleAddChirp (e) {
       const message = chirpRef.current.value
       console.log(message)
       setChirps(prevChirps  => {
           return [...prevChirps, {id: getID(), msg: message}]
       }); 
       chirpRef.current.value = ''; 
       console.log(chirps)
    }; 

    return (
        <div className='container mt-5'>
            <h2>Talk to Yourself With Chirper</h2>
            <div className='row g-3'>
                <div className='col-12'>
                    <input ref={chirpRef} type='text' className='form-control' id='inputfield' placeholder="What's on your mind?"></input>
                </div>
                <div className='col-12'>
                    <button onClick={handleAddChirp} className='mt-2 mb-2 btn btn-dark'>Cast Message Into Void</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Chirps chirps={chirps}/>
                </div>
            </div>
        </div>
    );

};

export default App; 