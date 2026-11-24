import React from 'react'

const Button = ({text,color='gray',children=null}) => {
    const onClickButton()=>{
        console.log(text);
        
    }
  return (
    <button
    style={{colo:color}}
    onClick={onClickButton}
    >
        {text}-{color}
        {children}
        </button>
  )
}

export default Button