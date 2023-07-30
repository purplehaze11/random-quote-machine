import { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';

function App() {
	const randColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
		Math.random() * 255
	)}, ${Math.floor(Math.random() * 255)})`;

	const [color, setColor] = useState(randColor);
	const [quote, setQuote] = useState({});
	// In the github, the author of the github set the initial state as null, but it doesn't work here
	// don't know why. But it works like it is now

	const changeColor = () => {
		setColor(
			(color) =>
				(color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
					Math.random() * 255
				)}, ${Math.floor(Math.random() * 255)})`)
		);
	};

	const getQuote = async () => {
		// We'll fetch the data from the api
		const res = await fetch('https://api.quotable.io/random?maxLength=100');
		const quote = await res.json();
		setQuote(quote); // Then we'll set the quote to the object of quote
	};

	useEffect(() => {
		// Used to set the initial quote
		getQuote();
	}, []);

	const colorAndQuote = () => {
		// This function are used to combine the changeColor and getQuote function
		changeColor();
		getQuote();
	};

	return (
		<div
			style={{
				height: '100dvh',
				width: '100%',
				backgroundColor: color
			}}
		>
			<QuoteCard
				colorAndQuote={colorAndQuote}
				quote={quote}
				color={color}
			/>
		</div>
	);
}

export default App;
