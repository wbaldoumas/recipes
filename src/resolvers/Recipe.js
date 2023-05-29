module.exports = {
  Recipe: {
    ingredients(recipe, _, { dataSources }) {
      return dataSources.recipesAPI.getRecipeIngredients(recipe.id);
    },
    relatedRecipes(recipe, _, { dataSources }) {
      const limit = 3;
      return dataSources.recipesAPI.getRelatedRecipes(recipe.id, limit);
    },
    __resolveReference: ({id}, {dataSources}) => {
      return dataSources.recipesAPI.getRecipe(id);
    },
  },
};
