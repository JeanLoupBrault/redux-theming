import React from "react";
import styles from "./About.module.css";
import { connect } from "react-redux";
import { changeToDarkTheme, changeToLightTheme } from "../react-redux/config";

const About = props => {
    const { dispatch } = props;
    const changeTheme = changeTo => {
        switch (changeTo) {
            case "light":
                return dispatch(changeToLightTheme());
            case "dark":
                return dispatch(changeToDarkTheme());
            default:
                return dispatch(changeToLightTheme());
        }
    };

    return (
        <div className={styles.card}>
            <p className={styles.header}>Hello World</p>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => changeTheme("light")}
                    type="button"
                    className={`button ${styles.light}`}
                >
                    Light Theme
        </button>
                <button
                    onClick={() => changeTheme("dark")}
                    type="button"
                    className={`button ${styles.dark}`}
                >
                    Dark Theme
        </button>
            </div>
            <div className={styles.textContainer}>
                <p className={`text ${styles.info}`}>My Name Is Victor</p>
                <p className={`text ${styles.message}`}>
                    Explain Theming to me like a child
        </p>
                <p className={`text ${styles.error}`}>An error message</p>
            </div>
        </div>
    );
};

const connectedAbout = connect()(About);
export default connectedAbout;
