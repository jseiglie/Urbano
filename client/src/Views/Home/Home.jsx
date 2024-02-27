import React, { useCallback, useEffect } from 'react'

export const Home = () => {

    const test = useCallback(async () => {
        // we will use nginx to redirect it to the proper URL
        const data = await fetch("/api/main/test");
        console.log(data);
        
      }, []);


      useEffect(() => {
        test();
      }, [])
  return (
    <div>Home</div>
  )
}
