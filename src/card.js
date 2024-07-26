import React from "react";
import Nine from './nine';
import StarRating from './stars';
function CardUI(props) {
    
    const product = props.product;
    return (
        <div className="card" style={{ width: '250px',marginLeft: '16px', marginBottom: '16px' }} >
            <img src={product.image} alt="" width="150" height={150} className="mx-auto"
                style={{  borderRadius: '50px' }} />
            <div className="card-body">
                <h6 >{product.title.split(' ').slice(0, 3).join(' ')}</h6>
                <p>₹{product.price}</p>
                <div style={{display:'flex', direction:'row'}}>
                <StarRating rating={product.rating.rate} />

                    <p>({product.rating.count})</p>
                </div>
                <Nine/>

            </div>
        </div>
    );
}
export default CardUI;
