import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Avatar, Switch} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {LightMode} from "./LightMode";
const Header = () => {
    // const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <div className={styles.head}>
            <LightMode/>
            {/*<div className={styles.switcher}>*/}
            {/*    <Switch*/}
            {/*        {...label}*/}
            {/*        defaultChecked color="warning"*/}
            {/*    />*/}
            {/*    Dark Mode*/}
            {/*</div>*/}
            <div className={styles.user}>
                <h4>Swyatoslaw</h4>
                <Avatar sx={{ bgcolor: deepOrange[900] }} variant="square">
                    S
                </Avatar>
            </div>
            <div className={styles.header}>
                <div className={styles.links}>
                    <NavLink  to={'movies'}>Movies</NavLink>
                    <NavLink  to={'genres'}>Genres</NavLink>
                </div>

            </div>
        </div>
    );
};

export {Header};