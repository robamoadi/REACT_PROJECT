import {  useContext } from "react";
import ColorContext from "../context/ColorContext";

const ColorPicker = () =>{

    //const [color , setColor] = useState('lightseagreen')
    const {color , setColor} = useContext(ColorContext)

    return (
        <div >
        <select onChange={(e)=> setColor(e.target.value)} defaultValue='lightseagreen'>
        <option value='lightpink'>lightpink</option>
        <option value='lightseagreen'>lightgreen</option>
        <option value='plum'>plum</option>
        </select>
        <p>{color}</p>
        </div>
    )

}

export {ColorPicker}