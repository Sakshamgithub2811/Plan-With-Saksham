import { Fragment } from "react"
import React from 'react'
import Card from "./Card"


const Tours = ({ tours, removeTour }) => {
  return (
    <Fragment>
      <div>
        {
          tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour}></Card>
          })
        }
      </div>
    </Fragment>
  )
}

export default Tours
