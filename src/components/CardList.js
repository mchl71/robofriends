import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({ robots }) => {
	const cardsArray = robots.map((user, i) => {
		return (
		  <Card 
				key={user.id} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
		  />
		)
	})

	return (
		<div className='cardListContainer'>
			{cardsArray}
		</div>
		)
}

export default CardList