import s from './Preloader.module.css'

function Preloader(){
    return(
        <div className={s.container}>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )


}

export default Preloader