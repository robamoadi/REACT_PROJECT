import ColorContext from "./ColorContext";
import { useState  } from "react";

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('lightseagreen')

    return (
      <ColorContext.Provider value= {{color , setColor}}>
        {children}
      </ColorContext.Provider>
    )
  }

  export default ColorProvider

