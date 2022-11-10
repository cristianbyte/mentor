import React from 'react';
import imgKickBoxing from '../images/wall333_color.jpg'
import imgMarcialesMix from '../images/wall666_color.jpg'
import imgMuayThai from '../images/wall999.jpg'

export default function Disciplinas() {

    return (
        <section  className='disciplina'>
            <div className='disciplina__box'>
                <img className='disciplina__box--img' src={imgMarcialesMix} alt='artes marciales mixtas' ></img>
                <h4>artes marciales mixtas</h4>
            </div>
            <div className='disciplina__box'>
                <img className='disciplina__box--img' src={imgMuayThai} alt='muay thai' ></img>
                <h4>muay thai</h4>
            </div>
            <div  className='disciplina__box'>
                <img className='disciplina__box--img' src={imgKickBoxing} alt='kick boxing' ></img>
                <h4>kick boxing</h4>
            </div>
        </section>
    );
}


