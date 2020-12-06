export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote]
		case 'REMOVE_QUOTE':
			let idx = state.findIndex(quote => quote.id === action.quoteId)
			return [...state.slice(0, idx), ...state.slice(idx + 1)]
		case 'UPVOTE_QUOTE':
			let idx1 = state.findIndex(quote => quote.id === action.quoteId)
			return [
				...state.slice(0, idx1),
				{
					...state[idx1],
					votes: state[idx1].votes + 1
				},
				...state.slice(idx1 + 1)
			]
		case 'DOWNVOTE_QUOTE':
			let idx2 = state.findIndex(quote => quote.id === action.quoteId)
			if (state[idx2].votes > 0) {
				return [
					...state.slice(0, idx2),
					{
						...state[idx2],
						votes: state[idx2].votes - 1
					},
					...state.slice(idx2 + 1)
				]
			} else {
				return state;
			}
		default:
			return state;
	}
}
