import React from 'react'

export const Pic=(props)=>
{
  let offsetX,offsetY
  const transfer=event=>
  {
    const element=event.target
    element.style.left = `${event.pageX-offsetX}px`
    element.style.top = `${event.pageY-offsetY}px`
  }
  const Lift=event=>
  {
    const element=event.target
    offsetX=event.clientX-element.getBoundingClientRect().left
    offsetY=event.clientY-element.getBoundingClientRect().top
    element.addEventListener('mousemove',transfer)
  }
  const PutDown=event=>{
    const element=event.target
    element.removeEventListener('mousemove',transfer)
  }

  return (
    <div  style={{backgroundImage: props.img ,width:"400px",height:"400px",position: "absolute",backgroundRepeat:"no-repeat"}} onMouseDown={Lift} onMouseUp={PutDown}/>
  )
}
