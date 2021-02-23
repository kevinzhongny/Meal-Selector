import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
    const [recipes, setRecipes] = useState(null);

    async function getRecipes() {
        try {
            const res = await axios.get('https://calm-atoll-21972.herokuapp.com/recipes');
            setRecipes(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    useEffect(() => {
        getRecipes();
    }, [])

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    function selectRecipe(recipe, e) {
        e.preventDefault();
        setSelectedRecipe(recipe);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setSelectedRecipe({ ...selectedRecipe, [name]: value });
    }

    async function editRecipe(e) {
        e.preventDefault();
        try {
            const res = await axios.patch('https://calm-atoll-21972.herokuapp.com/recipes', selectedRecipe);
            console.log(res.data);
            getRecipes();
        } catch(e) {
            console.error(e, e.message);
        }
    }

    async function deleteRecipe(recipeId, e) {
        e.preventDefault();
        try {
            const res = await axios.delete('https://calm-atoll-21972.herokuapp.com/recipes/' + recipeId);
            console.log(res.data);
            getRecipes();
        } catch (e) {
            console.error(e, e.message);
        }
    }

    return(
        <div>
            { selectedRecipe && <form
                className='recipe-form'
                onChange={ (e) => handleChange(e) }
                onSubmit={ (e) => editRecipe(e) }>
                <label>
                    Name: 
                    <input type="text" name="name" defaultValue = { selectedRecipe.name }/>
                </label>
                <label>
                    Cuisine: 
                    <input type="text" name="cuisine" defaultValue = { selectedRecipe.cuisine }/>
                </label>
                <label>
                    Ingredient 1: 
                    <input type="text" name="ingredient1" defaultValue = { selectedRecipe.ingredient1 }/>
                </label>
                <label>
                    Ingredient 2: 
                    <input type="text" name="ingredient2" defaultValue = { selectedRecipe.ingredient2 }/>
                </label>
                <label>
                    Ingredient 3: 
                    <input type="text" name="ingredient3" defaultValue = { selectedRecipe.ingredient3 }/>
                </label>
                <label>
                    Ingredient 4: 
                    <input type="text" name="ingredient4" defaultValue = { selectedRecipe.ingredient4 }/>
                </label>
                <label>
                    Ingredient 5: 
                    <input type="text" name="ingredient5" defaultValue = { selectedRecipe.ingredient5 }/>
                </label>
                <label>
                    URL: 
                    <input type="text" name="url" defaultValue = { selectedRecipe.url }/>
                </label>
                <input type="submit" value="Edit Recipe" className = 'editRecipe' />
            </form>}
            { recipes && recipes.map(recipe => <Recipe recipe= { recipe } selectRecipe = { selectRecipe } deleteRecipe = { deleteRecipe } key= { recipe.id }/>)}
        </div>
    )
}

function Recipe({ recipe, deleteRecipe, selectRecipe }) {
    return(
        <div>
            <form>
                <span>
                    <ul><b>Name:</b> { recipe.name }<br></br>
                    <b>Cuisine:</b> { recipe.cuisine }<br></br>
                    <b>Ingredients:</b> { recipe.ingredient1 }, { recipe.ingredient2 }, { recipe.ingredient3 }, { recipe.ingredient4 }, { recipe.ingredient5 }<br></br>
                    <a href={ recipe.url }>{ recipe.url }</a><br></br>
                    <button onClick={ (e) => selectRecipe(recipe, e) }>Edit Recipe</button>
                    <button onClick={ (e) => deleteRecipe(recipe.id, e) }>Delete Recipe</button></ul>
                </span>
            </form>
        </div>
    )
}

export default Recipes;
