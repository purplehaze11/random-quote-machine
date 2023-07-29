function QuoteContent({ text, author }) {
	return (
		<div>
			<span id='text'>{text}</span>
			<span id='author'>-{author}</span>
		</div>
	);
}

export default QuoteContent;
