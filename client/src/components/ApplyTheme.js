import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

const ApplyTheme = ({ theme, children }) => {
    // update the CSS variables
    const updateCSSVaraibles = theme => {
        const arrayOfVariableKeys = Object.keys(theme);
        const arrayOfVariableValues = Object.values(theme);

        //loop through each array key and set the CSS variables
        arrayOfVariableKeys.forEach((cssVariableKey, index) => {
            document.documentElement.style.setProperty(
                cssVariableKey,
                arrayOfVariableValues[index]
            );
        });
    };

    // on component mount and component update
    useEffect(() => {
        updateCSSVaraibles(theme);
    }, [theme]);
    return <Fragment>{children}</Fragment>;
};

// connect State to props
const mapStateToProps = state => ({
    theme: state
});

const connectedApplyTheme = connect(mapStateToProps)(ApplyTheme);

export default connectedApplyTheme;
