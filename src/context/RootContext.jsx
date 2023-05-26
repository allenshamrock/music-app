import React,{createContext} from 'react'


  export  const RootContext = createContext({})
   export const RootContextProvider=({children})=>{

   
  return (
    <RootContext.Provider value={{}}>
      <div className="className='bg-red-400 min-h-screen w-screen">
      {children}
      </div>
  </RootContext.Provider>
  )
 
}
