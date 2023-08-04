import * as React from 'react'
import { container } from "./layout.module.css"
import Header from "./header"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <Header />
        <div className={container}>
            <main>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout
