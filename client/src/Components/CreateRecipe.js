import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateRecipe() {
    const [recipe, setRecipes] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setRecipes({... recipe, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        createRecipe();
    }

    async function createRecipe() {
        try {
            const res = await axios.post('http://localhost:8080/recipes', recipe);
            console.log(res.data);
            setRecipes([res.data]);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    return(
        <div>
            Enter recipe here.
            <form 
                className='recipe-form'
                onChange={ (e) => handleChange(e) }
                onSubmit={ (e) => handleSubmit(e) }>
                <label>
                    Name: 
                    <input type="text" name="name" />
                </label>
                <label>
                    Cuisine: 
                    <input type="text" name="cuisine" />
                </label>
                <label>
                    Ingredient 1: 
                    <input type="text" name="ingredient1" />
                </label>
                <label>
                    Ingredient 2: 
                    <input type="text" name="ingredient2" />
                </label>
                <label>
                    Ingredient 3: 
                    <input type="text" name="ingredient3" />
                </label>
                <label>
                    Ingredient 4: 
                    <input type="text" name="ingredient4" />
                </label>
                <label>
                    Ingredient 5: 
                    <input type="text" name="ingredient5" />
                </label>
                <label>
                    URL: 
                    <input type="text" name="url" />
                </label>
                <input type="submit" value="Submit Recipe" className = 'submitRecipe' />
            </form>
        </div>
    )
}

export default CreateRecipe;