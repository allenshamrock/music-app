// import React, {useState , useEffect} from 'react'
// //import axios from "axios"
// const Home = () => {

// 	const[endPoint, setEndPoint] = useState ('')

// 	const[container, setContainer] = useState()

// 	const[isFetching, setIsFetching] = useState(false)

// 	useEffect(()=>{
//         console.log('Fetching');
// 		fetchMe()
// 	},[isFetching])
	
// const fetchMe = (endPoint ) =>{
//   fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${endPoint}&per_page=10&page=1`,{

// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '84c519c945msh92ea5d88a1ca5ecp19d27cjsn54d7ea5f78f0',
// 		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
// 	}
// })
// .then(response=>{ 
// 	//console.log(response);
// 	return(response.json());	
// })
// .then(data=>{
// 	 setContainer(data);
// 	//console.log(data.hits[1].result.artist_names);
// })

// .catch(error=>{
// 	console.log(error);
    
// })

// } 


   
// const onChangeHandler = (e) =>{
// 	setEndPoint(e.target.value)
// }

// const submitHandler = (e) =>{
//      e.preventDefault()
//     setIsFetching(!isFetching)
// }
//   return (
//    <div>
// 	<h1 className='text-red-500'>HOme</h1>
// 	<form onSubmit={submitHandler}>
// 		<input type="text" value={endPoint} onChange={onChangeHandler} />
// 		<button type='submit'> submit</button>
// 	</form>
//     {container?.hits?.map((item)=>(
//         <div>
//             <img src={item?.result?.header_image_url} alt="pic" />
//             <p>{item?.result?.artist_names}</p>
//             <p>{item?.result?.full_title}</p>
//         </div>
//     ))}
//    </div>
        
//   )
// }

// export default Home

