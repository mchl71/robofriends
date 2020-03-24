import React from 'react'
import './Card.css'

const Card = ({ name, email, id }) => {
	return (
		<div className='cardContainer'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		)
}

export default Card