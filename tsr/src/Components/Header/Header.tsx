import style from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={style.Header}>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    )
};

export  {Header};