import React,{useState} from 'react';

export default function Navbar() {
    const [isOn, setIsOn] = useState(false)
    const [nav, setNav] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 50 ){
            setNav(true);
        }else{
            setNav(false)
        }
    }

    function buttonClick(){
        setIsOn(!isOn)
    }
    window.addEventListener('scroll',changeBackground)

    return (
        <nav className={nav ? 'm__nav navActive' : 'm__nav'}>
            <div className='m__logo'>mentor</div>
            <ul className={`${isOn ? 'm__nav-listActive' : ''} m__nav-list `} >
                <a href='#' className='m__nav-list--i'>disciplinas</a>
                <a href='#' className='m__nav-list--i'>servicios</a>
                <a href='#' className='m__nav-list--i'>planes</a>
            </ul>
            <span onClick={buttonClick} className={`${isOn ? 'active' : ''} m__menu-toggle`} id='menu' ></span>
        </nav>
    );
}