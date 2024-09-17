import React from 'react'
import Product from '../components/Product'
import Technical from '../components/Technical'
import Ordering from '../components/Ordering'
import Dimension from '../components/Dimension'
import Connection from '../components/Connection'
import { useId } from '../context/id'

function Desc() {

    const [id, setId] = useId();

    return (
        <>
            <div className='w-3/4'>
                <Product />
                <br />
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <Technical />
                    </div>
                    <div className="basis-1/2">
                        <Ordering />
                    </div>
                </div>
                <br />
                <div className="w-1/2">
                    <div className="">
                        <Connection />
                    </div>
                    <br />
                    <div className="">
                    <Dimension />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desc