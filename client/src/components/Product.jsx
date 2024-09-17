import React from 'react'
import Technical from './Technical'
import Ordering from './Ordering'

function Product() {
    return (
        <>
            <div className="block border-black border-4">
                <div className="flex flex-row">
                    <div className="basis-1/2 text-center border-black border-r-2">
                        Product image
                    </div>
                    <div className="basis-1/2 border-black border-l-2">
                        <p className='text-sm text-center font-semibold'>Product Heading</p>
                        <br />
                        <p className='text-sm'>Product Description</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product