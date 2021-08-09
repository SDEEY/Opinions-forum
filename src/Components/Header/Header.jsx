import logo from './Logo/Opinions.png'
import Navbar from './Navbar/Navbar';
import IsAuthed from './IsAuthed/IsAuthed';
import s from './Header.module.css'

function Header(){
    return(
        <header className={s.header}>
            <img src={logo} alt={logo} style={{width: "150px"}}/>
            <Navbar/>
            <IsAuthed/>
        </header>
    )
}

export default Header