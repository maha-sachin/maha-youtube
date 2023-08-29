import React from 'react'
import Button from './Button'


// const lists = [All,Game,Music,Sports,Live,Cooking,Coding,Reactcode]
function ButtonList() {


  return (
    <div className='flex flex-wrap'>
     {/* const content = lists.map((list) =>
    <Button
    title={lists.name} />
      ); */}
      <Button name="All"/>
      <Button name="Game"/>
      <Button name="Songs"/>
      <Button name="News"/>
      <Button name="Game"/>
      <Button name="Songs"/>
      <Button name="News"/>
      
    </div>
  )
}

export default ButtonList