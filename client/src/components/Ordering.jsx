import React from 'react'
import axios from 'axios'
import { useId } from '../context/id.js'

function Ordering() {

  const [catno, setCatno] = useState("");
    const [des, setDes] = useState("");
    const [pac, setPac] = useState("");
    const [forceUpdate, setForceUpdate] = useState(0);

    const [id, setId] = useId();

    const handleSubmit = async(event) => {
      event.preventDefault();
      const ocat = event.target.cat;
      const odesc = event.target.desc;
      const opack = event.target.pack;
      try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/add-dimension`, { ocat, odesc, opack });
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
            <h3 className='uppercase text-center bg-slate-500 text-white'>Ordering Information</h3>
                <div className="flex flex-row">

                    <div className="basis-1/3">
                    <h4 className='uppercase  text-center bg-slate-200 text-slate-500'>Cat. No.</h4>
                        Parameter
                    </div>
                    <div className="basis-1/3">
                    <h4 className='uppercase text-center bg-slate-200 text-slate-500'>Description</h4>
                        value
                    </div>
                    <div className="basis-1/3">
                    <h4 className='uppercase text-center bg-slate-200 text-slate-500'>Std. Pack</h4>
                        Parameter
                    </div>

                </div>
                <div className=''>
                  <form>
                    <div className='flex flex-row'>
                      <div className='basis-1/3'>
                        <input type='text' name='cat' value={catno} onChange={ (e) => setCatno(e.target.value) } placeholder='Enter CAT no' />
                      </div>
                      <div className='basis-1/3'>
                        <input type='text' name='desc' value={des} onChange={ (e) => setDes(e.target.value) } placeholder='Enter description' />
                      </div>
                      <div className='basis-1/3'>
                        <input type='text' name='pack' value={pac} onChange={ (e) => setPac(e.target.value) } placeholder='Enter std pack' />
                      </div>
                    </div>
                    <div className='block'>
                      <button type='submit' className='text-center border-slate-500 text-slate-500 border-2 w-full'> ADD </button>
                    </div>

                  </form>

                </div>
            </div>
        </>
  )
}

export default Ordering