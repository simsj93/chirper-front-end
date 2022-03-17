import React from 'react'; 

export default function Chirp({chirp}) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>You</h5>
            <p className='card-text'>{chirp.msg} </p>
            </div>
        </div>
    )
}
