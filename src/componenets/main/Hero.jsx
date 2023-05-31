import React, {useState , useEffect} from 'react'
import HeroSection from "../../assets/HeroSection.jpg"
//import axios from "axios"
const Home = () => {

	const[endPoint, setEndPoint] = useState ('')

	const[container, setContainer] = useState([])

    const[finalPoint, setFinalPoint] = useState("")

	useEffect(()=>{
       // console.log('Fetching');
		if(endPoint){
            fetchMe(endPoint)
        }
	},[finalPoint])
	
const fetchMe = (endPoint ) =>{
  fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${endPoint}&per_page=10&page=1`,{

	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84c519c945msh92ea5d88a1ca5ecp19d27cjsn54d7ea5f78f0',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
})
.then(response=>{ 
	//console.log(response);
	return(response.json());	
})
.then(data=>{
	 setContainer(data.hits);
	//console.log(data.hits[1].result.artist_names);
})

.catch(error=>{
	console.log(error);
    
})

} 


   
const onChangeHandler = (e) =>{
	setEndPoint(e.target.value)
}

const submitHandler = (e) =>{
     e.preventDefault()
   fetchMe(endPoint)
   setFinalPoint(endPoint)
}
  return (
   <div className='py-3 ml-10'>
	<form onSubmit={submitHandler} className='ml-4'>
		<input type="text" value={endPoint} onChange={onChangeHandler} />
		<button type='submit' className='ml-4'> submit</button>
	</form>
    {container.length > 0 ? (container.map((item)=>(
        <div>
            <img src={item.result.header_image_url} alt="pic" />
            <p>{item.result.full_title}</p>
        </div>
    ))
    ):(
        <p className='ml-4'>No result found</p>
    )}
    <img src={HeroSection} alt="" />
   </div>
        
  )
}

export default Home