const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const receipeTemplate = path.resolve(`src/components/templates/receipe.jsx`)
  return graphql(
    `
    query FoodReceipe {
      allIndianFoodDatasetCsv {
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
        }
      }      
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create receipe pages.
    result.data.allIndianFoodDatasetCsv.nodes.forEach(receipe => {
      const slug = `/receipe/` +receipe.Srno+`-`+receipe.TotalTimeInMins+`-`+ receipe.RecipeName

      createPage({
        path: slug,
        component: receipeTemplate,
        context: {
          ...receipe,
        },
      })
    })
  })
}