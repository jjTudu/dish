import { graphql } from "gatsby"
export const indianFoodDatasetCsvFragment = graphql`
fragment IndianFoodDatasetCsvConnectionFragment on IndianFoodDatasetCsvConnection {
  nodes {
    CookTimeInMins
    Course
    Cuisine
    Diet
    Ingredients
    Instructions
    PrepTimeInMins
    RecipeName
    Servings
    Srno
    TotalTimeInMins
    TranslatedIngredients
    TranslatedInstructions
    TranslatedRecipeName
  }
}  `