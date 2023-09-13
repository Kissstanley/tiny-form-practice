import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.links}>
                    <NavLink  to={'movies'}>Movies</NavLink>
                    <NavLink  to={'genres'}>Genres</NavLink>
             </div>
        </div>
    );
};

export {Header};