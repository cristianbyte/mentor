import React,{useRef,useState} from 'react';

export default function Header() {
    return (
        <header className='m__header'>
            <h3>dede 1999</h3>
            <h1>Las mejores <strong>experiencias</strong> de entrenamiento</h1>
            <h3>Tu camino hacia el siguiente nivel</h3>
            <buttom className='m__header-buttom'>Unirme Ahora</buttom>
            <div className='m__header-cm'>
                <div className='m__header-cm-Box'>
                    <span>02</span>
                    <p>cmb</p>
                </div>
                <div className='m__header-cm-Box'>
                    <span>07</span>
                    <p>fib</p>
                </div>
                <div className='m__header-cm-Box'>
                    <span>03</span>
                    <p>omb</p>
                </div>
                <div className='m__header-cm-Box'>
                    <span>04</span>
                    <p>amb</p>
                </div>
            </div>
        </header>
    );
}