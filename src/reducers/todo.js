export default function todos(state = [], action) {
  switch(action.type) {
		case 'ADD_TODO':
			const new_state = state.concat({
				id: state.length,
				text: action.text,
				completed: false
			});
			return new_state;

		case 'TOGGLE_TODO':
			return [
				...state,
				...state[action.item.id].completed = !state[action.item.id].completed // ...Object.assign({}, ...state[action.item.id].completed = !state[action.item.id].completed)
      ];

		default:
			return state;
	}
};
