
import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const AppContainer = ({ isDrawerOpen, children }) => { 
    const drawerWidthVW = 56;
    const drawerWidthPX = 224;
    const [containerStyle, setContainerStyle] = useState()
   

    useEffect(() => {

        setContainerStyle({
            marginTop: '56px', // height header
            marginLeft: isDrawerOpen ? `calc(${drawerWidthPX}px)` : '0px', 
            width: isDrawerOpen ? `${window.innerWidth - drawerWidthPX}px` : '100vw',
            paddingLeft: "10px",
            transition: 'width 0.3s ease',
        })
    }, [isDrawerOpen])

    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};

AppContainer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default AppContainer;