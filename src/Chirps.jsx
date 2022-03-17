import React from 'react'
import Chirp from './Chirp'; 

export default function Chirps ({ chirps }) {
    return (
        chirps.map(chirp => {
            return <Chirp key={chirp.id} chirp={chirp} />
        })
    )
}