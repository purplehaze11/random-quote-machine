function QuoteContent({ text, author, color }) {
	return (
		<div id='content'>
			<span
				id='text'
				style={{ color: color }}
			>
				{text}
			</span>
			<span
				id='author'
				className='text-end'
				style={{ color: color }}
			>
				-{author}
			</span>
		</div>
	);
}

export default QuoteContent;
