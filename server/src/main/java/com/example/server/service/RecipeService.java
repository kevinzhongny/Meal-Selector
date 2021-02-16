package com.example.server.service;

import com.example.server.model.Recipe;
import org.springframework.http.HttpStatus;

public interface RecipeService {
    Iterable<Recipe> getRecipes();
    Recipe getRecipeById(Long id);
    Recipe createRecipe(Recipe recipe);
    Recipe updateRecipe(Recipe recipe);
    HttpStatus deleteRecipe(Long id);
}
