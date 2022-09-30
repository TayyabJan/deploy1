import React from 'react'
import { useNavigate,useParams,useSearchParams } from 'react-router-dom'

const Products = () => {
  const [searchParams]= useSearchParams();
  const navigation = useNavigate();
  console.log(Object.fromEntries([...searchParams]))
  const params = Object.fromEntries([...searchParams])
  const goback = () => {
    alert("Going Back;")
    navigation(-1)// for recent last   location
    //can also use / for home and /About instead of -1 for fixed location 
  }
  return (
    <div>Products: {params.sort}
    <p> Product: {searchParams.get("sort")}</p>
      
      {/* <button onClick={goback}>Go Back </button> */}
    </div>
    
  )
}

export default Products