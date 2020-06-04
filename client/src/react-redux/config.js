import { lightTheme, darkTheme } from "../themes";
import { createStore } from "redux";

//Actions to update theme
const changeToLightTheme = () => {
    return {
        type: "CHANGE_TO_LIGHT"
    };
};

const changeToDarkTheme = () => {
    return {
        type: "CHANGE_TO_DARK"
    };
};

//Set default theme object equal to root theme
const themeObject = lightTheme;

//Theme Reducer
const themeReducer = (state = themeObject, action) => {
    switch (action.type) {
        case "CHANGE_TO_LIGHT":
            return lightTheme;
        case "CHANGE_TO_DARK":
            return darkTheme;
        default:
            return state;
    }
};

//Configure The Store
const reduxStore = () => {
    const store = createStore(themeReducer);
    return store;
};

export { changeToDarkTheme, changeToLightTheme, reduxStore };
