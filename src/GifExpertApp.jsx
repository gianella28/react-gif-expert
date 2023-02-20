import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch']);
  
  const onAddCategory = (NewCategory) => {
    //console.log(NewCategory)
    //categories.push(onNewCategory);
    //1 forma al final
    //setCategories([...categories,'Valorant']);
     //1.1 forma al inicio
      if ( categories.includes( NewCategory) ) return;
        setCategories([ NewCategory,...categories]);
    //2 forma
    //setCategories(cat => [...cat,'Valorant'])
  } 
  
  //console.log(categories);
  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
          //1 form
          setCategories={setCategories}
          //2 form
          onNewCategory = {event => onAddCategory(event) }
          
        />

        {/*Listado de Gif*/}
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
        { 
          categories.map( ( category)  => (
            <GifGrid 
              key={category} 
              category={category} 
            />
          ))
        }                            
          {/*Gif Item*/}
    </>
  )
}
