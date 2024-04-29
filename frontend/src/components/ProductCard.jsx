import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const {serial,name,availability,image} = product
    const availabilityText = availability ? 'True' : 'False';
    console.log(availability);
    return(
<>
            <div className="card m-1 p-3" style={{height:"350px"}}>
            <img src={image} className="card-img-top img-fluid" alt="..." style={{height: "200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Availability: {availabilityText}</h6>
                    
                    <Link to="#" className="card-link">Card link</Link>
                    <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>
            
        
        
        </>
    )
}

export default ProductCard

