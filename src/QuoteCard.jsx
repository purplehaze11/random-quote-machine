import { useEffect, useState } from 'react';
import QuoteContent from './QuoteContent';

function QuoteCard() {
	const [quote, setQuote] = useState({});
	// In the github, the author of the github set the initial state as null, but it doesn't work here

	const getQuote = async () => {
		// We'll fetch the data from the api
		const res = await fetch('https://api.quotable.io/random');
		const quote = await res.json();
		setQuote(quote); // Then we'll set the quote to the object of quote
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<div id='quote-box'>
			<QuoteContent
				text={quote.content}
				author={quote.author}
			/>
			<a
				href=''
				id='tweet-quote'
			></a>
			<button
				id='new-quote'
				onClick={getQuote}
			>
				Next Quote
			</button>
		</div>
	);
}

export default QuoteCard;
