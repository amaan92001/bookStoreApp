import React from 'react'
import List from '../../public/list.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'

const Course = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
               <div className=' pt-32 justify-center text-center items-center'>
               <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
               

               <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium ad esse asperiores sint eius iusto repellendus amet in nihil repudiandae velit aut sequi, atque odit et quia dicta dolore unde id sunt? Quo illum modi praesentium corrupti animi ex culpa similique distinctio maxime ad enim, quae nulla, natus assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga dolorem labore fugiat nobis iusto, sequi culpa totam ipsum. Ab temporibus ad optio, magni ut voluptates ex soluta at omnis.
               </p>

           <Link to='/'>
           <button className='mt-6 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300'>Back</button>
           </Link>
               </div>

               <div className='mt-12 gap-5 grid grid-cols-1 md:grid-cols-3'>
                {List.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))}
               </div>
            </div>
        </>
    )
}

export default Course
