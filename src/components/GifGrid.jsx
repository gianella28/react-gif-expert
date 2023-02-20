//import { useEffect,useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs( category);
    
    //console.log({ images, isLoading}); 
    
 // getGifs( category );
  
  return (
  <>
      <h3>{ category }</h3>
      {
       /*1 form 
       isLoading 
        ?( <h2>Cargando...</h2>)
        :null*/
        isLoading && (<h2>Cargando...</h2>)
      }
      

      <div className="card-grid">
        {/* 1 form
          images.map( imag => (
            <li key={imag.id}>{imag.title}</li>

          ))*/
        }

        {
          //2 form con desestructuracion
          images.map(( image )=> (
            //<li key={id}>{title}</li>
            <GifItem 
            key ={ image.id }
            // 1 form
           // title={image.title}
            //url={image.url} />
            //2 form sirve para esparcir todos los datos
            { ...image}
            />
          ))
        }
       
      </div>
  </>
  )
}
