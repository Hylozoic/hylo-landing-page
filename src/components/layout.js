import * as React from 'react'
import { container, main } from "./layout.module.css"
import Header from "./header"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <Header />
        <div className={container}>
            <main className={main}>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout
