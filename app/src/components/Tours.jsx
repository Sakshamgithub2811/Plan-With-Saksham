import { Fragment } from "react"
import React from 'react'
import Card from "./Card"


const Tours = ({ tours, removeTour }) => {
  return (
    <Fragment>
      <div className="container">
       <h2 className="title">Plan With Saksham</h2>
      <div className="cards">
        {
          tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour}></Card>
          })
        }
      </div>
      </div>
    </Fragment>
  )
}

export default Tours
