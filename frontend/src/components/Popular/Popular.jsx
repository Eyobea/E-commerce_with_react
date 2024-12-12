import React from 'react';
import './Popular.css';
import data_product from '../assets/data';  // Importing data from assets folder
import Item from '../Item/Item';  // Importing the Item component

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMAN</h1>
            <hr />
            <div className='popular-item'>
                {data_product.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Popular;