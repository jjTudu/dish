import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <StaticQuery
    query={graphql`
      {
        completelist: allIndianFoodDatasetCsv {          
            ...IndianFoodDatasetCsvConnectionFragment          
        }

        distinctCourse:allIndianFoodDatasetCsv {
          distinct(field: Course)
        }

      }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />


    <h1>Using a CSV as a data source in Gatsby</h1>
    <p>These people were found in the CSV file.</p>
    <ul>
      {data.completelist.nodes.length > 0 &&
        data.completelist.nodes.map(receipe => (
          <li>
            <Link to={`/receipe/${receipe.Srno}-${receipe.TotalTimeInMins}-${receipe.RecipeName}`}>
              {receipe.RecipeName}
            </Link>
          </li>
        ))}
    </ul>


  </Layout>
)