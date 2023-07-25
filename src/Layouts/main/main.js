import React, { Fragment } from 'react'
import { Footer, Header } from '../../Components'

const Main = ({children}) => {
  return (
    <Fragment>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
    </Fragment>
  )
}

export default Main