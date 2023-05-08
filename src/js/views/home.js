import React, {useState, useEffect} from "react";
import { json } from "react-router";




export const Home = () => {
	
	const[characters, setCharacters]= useState ([])

	useEffect(()=>{

		async function loadWizzards(){
			try{
				const resp = await fetch('https://hp-api.onrender.com/api/characters')
				const data = await resp.json()
				setCharacters(data)
			}catch(err){
				console.log("ups")
			}
		}

		loadWizzards();
		
	}, [])


	return(
	<div className="text-center mt-5 d-flex flex-wrap">
		<h1>Harry Potter!</h1>
		{
			characters.length > 0 &&
			characters.map ((wizzard, ind)=> <Character item={wizzard} key={ind}/>)
		}
	
			 
	</div>
	)

};

const Character =(props)=>{

	return(
		<div className="text-center mt-5">

	<div className="container col-3">
	<div className="card-body">
    <h5 className="card-title">{props. item && props.item.name}</h5>
    <p className="card-text">{props.item.actor}</p>
    <button className="btn btn-primary">Go somewhere</button>
 	</div>
	</div>
			 
	</div>
	)
}