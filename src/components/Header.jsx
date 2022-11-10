import React,{useRef,useState} from 'react';

export default function Header() {
    return (
        <header className='m__header'>
            <h1>Las mejores <strong>experiencias</strong> de entrenamiento</h1>
            <h3>Tu camino hacia el siguiente nivel</h3>
            <buttom className='m__header-buttom'>Unirme Ahora</buttom>
        </header>
    );
}