import React,{useState} from "react";
import PropType from "prop-types";


export const AddCategory =  ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }

        console.log('Submit Hecho');

    }

    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange }
                />
            </form>
    )

    AddCategory.prototype = {
        setCategories: PropType.func.isRequired
    }

}