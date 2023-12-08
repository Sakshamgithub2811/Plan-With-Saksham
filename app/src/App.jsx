import React, { Fragment, useState } from 'react';
import Tours from './components/Tours';
import data from './data';


const App = () => {

  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }

  if(tours.length === 0){
    return (
      <Fragment>
       <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
     
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </Fragment>
  )
}

export default App
