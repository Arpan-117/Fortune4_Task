import React, { useState } from 'react'
import axios from 'axios'
import { useId } from '../context/id.js'

function Technical() {

    const [spec, setSpec] = useState("");
    const [unit, setUnit] = useState("");
    const [forceUpdate, setForceUpdate] = useState(0);

    const [id, setId] = useId();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const tspec = event.target.tspec;
        const tunit = event.target.tunit;
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/add-technical`, { tspec, tunit });
            if (res) {
                setId(res.data.id);
            }
        
            setForceUpdate(forceUpdate + 1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className=''>
            <h3 className='uppercase text-center bg-slate-500 text-white'>Technical Data</h3>
                <div className="flex flex-row">

                    <div className="basis-1/2">
                        Parameter
                    </div>
                    <div className="basis-1/2">
                        value
                    </div>

                </div>
                <div className=''>

                    <div className="block">

                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-row'>
                                <div className='basis-1/2'>
                                    <input type='text' name='tspec' value={spec} onChange={ (e) => setSpec(e.target.value) } placeholder='Enter parameter' />
                                </div>
                                <div className='basis-1/2'>
                                    <input type='text' name='tunit' value={unit} onChange={ (e) => setUnit(e.target.value) } placeholder='Enter value' />
                                </div>
                            </div>
                            <div className='block'>
                                <button type='submit' className='text-center border-slate-500 text-slate-500 border-2 w-full'> ADD </button>
                            </div>
                            
                        </form>


                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Technical