import logo from './Logo/Opinions.png'
import Navbar from './Navbar/Navbar';
import IsAuthed from './IsAuthed/IsAuthed';
import s from './Header.module.css'
import {useEffect, useState} from "react";

function Header(){
    const [pageIsScrolled, setPageIsScrolled] = useState(0)

    useEffect(() => {
        window.onscroll = () => {
            setPageIsScrolled(window.pageYOffset)
        }
    }, [])

    return(
        <header className={!pageIsScrolled ? s.header : `${s.header} ${s.headerScroll}`}>
            <img src={logo} alt={logo} style={{width: "150px"}}/>
            <Navbar/>
            <IsAuthed/>
        </header>
    )
}

export default Header