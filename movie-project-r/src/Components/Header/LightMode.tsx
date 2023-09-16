import styles from "./Header.module.css";
import {Switch} from "@mui/material";
import React from "react";

const LightMode = () => {
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = ()=>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.checked){
            setDarkMode()
        }else {
            setLightMode()
        }
    }
    return (
        <div className={'dark_mode'}>
            <div className={styles.switcher}>
                <Switch
                    {...label}
                    defaultChecked color="warning"
                    onChange={toggleTheme}
                />
                Dark Mode
            </div>
        </div>
    );
};

export {LightMode};