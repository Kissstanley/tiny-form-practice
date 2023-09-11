import styles from "./Header.module.css"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.links}>
                <Link to={'movies'}>Movies</Link>
                <Link to={'genres'}>Genres</Link>
            </div>
            <div>
                <div>movie</div>
                <div>genre</div>
            </div>
        </div>
    );
};

export {Header};