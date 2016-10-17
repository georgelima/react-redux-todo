export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text: text
  }
}

export function toggleTodo(item) {
  return {
    type: 'TOGGLE_TODO',
    item: item
  }
}
