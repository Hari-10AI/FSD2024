import React, { useEffect, useState } from 'react';
import CardUI from './card';
import Navigation from './navigation';

function Assign() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            if (res.ok) {
                const resData = await res.json();
                setData(resData);
                console.log(resData);
            } else {
                console.error('Failed to fetch data');
            }
        }
        fetchMyData();
    }, []);

    return (
        <><Navigation/>
        <div className='mt-4'  style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center'}}>
            
            {
                data.map((product, index) => (
                    <CardUI key={index} product={product} />
                ))
            }
        </div>
        </>
    );
}

export default Assign;