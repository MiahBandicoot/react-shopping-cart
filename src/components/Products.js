import React from 'react';

// Components
import Product from './Product';
import {useContext} from 'react'
import ProductContext from '../context/ProductContext';

const Products = props => {
	const {products, addItem} = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
