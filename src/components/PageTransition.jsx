
import React, { useEffect, useState } from 'react'

const PageTransition = ({activePage , children}) => {
    const[currentPage , setCurrentPage]= useState(activePage);
    const[transition , setTransition]=useState(false)

    useEffect(()=>{
        if(currentPage !== activePage){
            setTransition(true)
            setTimeout(()=>{
setCurrentPage(activePage);
setTransition(false);
            },500)
        }
    } , [activePage , currentPage])

  return (
    <div className='w-full h-full overflow-hidden relative' style={{backgroundImage:"url(images/pages-bg.png)"}}>
      <div className={`absolute w-full h-full transition-transform duration-500 ${transition ? '-translate-y-full':'translate-y-0'}`}>
{children[currentPage]}
      </div>
    </div>
  )
}

export default PageTransition
