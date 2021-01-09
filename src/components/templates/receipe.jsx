import React from "react"

//import { Stack, Main, Sidebar } from 'layout'



import Header from "../header"
import "../layout.css"

const Layout = props => {
  const {
    pageContext: { Srno, RecipeName, TotalTimeInMins, Course },
  } = props

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <h1>
            {RecipeName} {TotalTimeInMins}
          </h1>
          <p>Age: {RecipeName}</p>
          <p>Location: {RecipeName}</p>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}
export default Layout