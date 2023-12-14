
const Square = ({colorValue}) => {
   
    // colorValue = (color) => {
    //     if(color === '') return "Empty"
    // }

  return (
    <section
    className = "square"
    style={{backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : "Empty"}</p>
       {/* <p>{() => Square(colorValue)}</p>*/} 
    </section>
  )
}

export default Square