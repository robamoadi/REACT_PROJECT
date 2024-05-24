import { useState , useEffect , useContext } from "react";
import ColorContext from "../context/ColorContext";
const Display = () => {

   // const [color , setColor] = useState('lightseagreen')

   const {color} = useContext(ColorContext)

    return(
        <div style={{backgroundColor: color , color:'antiquewhite' , padding:'20px' }}>
        Prime Video
        </div>
    )
}

export {Display}