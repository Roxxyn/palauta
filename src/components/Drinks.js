import axios from 'axios'
import React, { useEffect, useState } from 'react'
const URL_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const URL_SEARCH = 'www.thecocktaildb.com/api/json/v1/1/'


export default function Drinks(props) {
const [name, setName] = useState('')
const [glass, setGlass] = useState('')
const [instructions, setInstructions] = useState('')
const [search, setSearch] = useState('')
const [ing1,setIng1]= useState('')
const [ing2,setIng2]= useState('')
const [ing3,setIng3]= useState('')
const [ing4,setIng4]= useState('')
const [ing5,setIng5]= useState('')
const [ing6,setIng6]= useState('')
const [ing7,setIng7]= useState('')
const [a1,seta1]= useState('')
const [a2,seta2]= useState('')
const [a3,seta3]= useState('')
const [a4,seta4]= useState('')
const [a5,seta5]= useState('')
const [a6,seta6]= useState('')
const [a7,seta7]= useState('')







useEffect(() => {


axios.get(URL_RANDOM)
.then((response) => {
    console.log(response.data)
    setName(response.data.drinks[0].strDrink);
    setGlass(response.data.drinks[0].strGlass);
    setInstructions(response.data.drinks[0].strInstructions)
    setIng1(response.data.drinks[0].strIngredient1)
    setIng2(response.data.drinks[0].strIngredient2)
    setIng3(response.data.drinks[0].strIngredient3)
    setIng4(response.data.drinks[0].strIngredient4)
    setIng5(response.data.drinks[0].strIngredient5)
    setIng6(response.data.drinks[0].strIngredient6)
    setIng7(response.data.drinks[0].strIngredient7)
    seta1(response.data.drinks[0].strMeasure1)
    seta2(response.data.drinks[0].strMeasure2)
    seta3(response.data.drinks[0].strMeasure3)
    seta4(response.data.drinks[0].strMeasure4)
    seta5(response.data.drinks[0].strMeasure5)
    seta6(response.data.drinks[0].strMeasure6)
    seta7(response.data.drinks[0].strMeasure7)
      
}).catch(error => {
    alert('Something went wrong, yolo')
})

}, [])


  return (

 <>
    <h3>Drink: {name}</h3>
    <h4>Glass</h4>
    <p>{glass}</p>
    <h4>Instructions</h4>
    <p>{instructions}</p>
    <h4>Ingredients</h4>
    <p>{ing1} {a1}</p>
    <p>{ing2} {a2}</p>
    <p>{ing3} {a3}</p>
    <p>{ing4} {a4}</p>
    <p>{ing5} {a5}</p>
    <p>{ing6} {a6}</p>
    <p>{ing7} {a7}</p>
</>
  )
}
