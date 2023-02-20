import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setinputValue] = useState('')
    const onInputChange =({target}) =>{
        //console.log(target.value);
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length<=1)return;
        
        //console.log(inputValue);
        //setCategories( categories => [inputValue,...categories]);
        setinputValue('');
        onNewCategory( inputValue.trim())
        
    }
    return (
        //(event)=> onSubmit(event)
        <form onSubmit={onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange }
      
            />
        </form>
    )
}
