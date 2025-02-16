"use client"
import Product from './Product';

const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap p-5'>
                <Product/>
                <Product/>
                <Product/>
        </div>
    );
}
export default ProductList;