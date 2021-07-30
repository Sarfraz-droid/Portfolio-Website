import React from 'react'

function Svg(prop) {

    const styles = {
        position: 'absolute',
        top: prop.top?prop.top:'auto',
        left: prop.left? prop.left : 'auto',
        right: prop.right? prop.right : 'auto',
        bottom: prop.bottom? prop.bottom : 'auto',
        zIndex: prop.zIndex? prop.zIndex : 'inherit',
        transform: 'rotate(' + prop.rotate + 'deg)',
        transition: 'all 0.5s ease-in-out',

    };

    return (
        <img src={prop.src} style={styles} />
    )
}

export default Svg
