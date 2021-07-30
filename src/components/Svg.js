import React from 'react'
import { useMediaQuery } from 'react-responsive'

function Svg(prop) {

    const styles = {
        position: prop.position? prop.position : 'absolute',
        top: prop.top?prop.top:'auto',
        left: prop.left? prop.left : 'auto',
        right: prop.right? prop.right : 'auto',
        bottom: prop.bottom? prop.bottom : 'auto',
        zIndex: prop.zIndex? prop.zIndex : 'inherit',
        transform: 'rotate(' + prop.rotate + 'deg)' + 'scale(' + prop.scale + ')',
        opacity: prop.opacity? prop.opacity : '1',        
    };

    const mediastyles = {
        position: prop.mpositions ? prop.mpositions : 'absolute',
        top: prop.mtop?prop.mtop:prop.top?prop.top:'auto',
        left: prop.mleft?prop.mleft:prop.left?prop.left:'auto',
        right: prop.mright?prop.mright:prop.right?prop.right:'auto',
        bottom: prop.mbottom?prop.mbottom:prop.bottom?prop.bottom:'auto',
        zIndex: prop.mzIndex?prop.mzIndex:prop.zIndex?prop.zIndex:'inherit',
        transform: 'rotate(' + prop.mrotate + 'deg)' + 'scale(' + prop.mscale + ')',


    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <img src={prop.src} style={isTabletOrMobile ? mediastyles : styles}  />
    )
}

export default Svg
