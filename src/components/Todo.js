import React, { Component }  from 'react';

import { connect } from 'react-redux';

class Todo extends Component {
	constructor(props) {
	  super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dispatch = this.props.dispatch;
		this.addTodo = this.props.addTodo;
		this.toggleTodo = this.props.toggleTodo;
	}

	handleSubmit(e) {
		e.preventDefault();

		this.addTodo(this.refs.todo.value);

		this.refs.todo.value = '';
	}

	toogleTodo(item) {
		this.toggleTodo(item);
	}

	render(){
		return(
			<div className="jumbotron">
				<h1 className="text-center">Todo List</h1>
				<form>
					<input ref="todo" type="text" placeholder="enter you todo" className="form-control"/>
					<button onClick={ this.handleSubmit } type="submit" hidden>Send</button>
				</form>
				<ul className="list-group" style={{ marginTop: '20px' }}>
					{
						this.props.todos.map((item, index) => {
							if (item.completed === false) {
								return <li onClick={ () => this.toogleTodo(item) } style={{ cursor: 'pointer' }} className="list-group-item" key={ item.id }>{ item.text }</li>
							} else if (item.completed === true)  {
								return <li onClick={ () => this.toogleTodo(item) } style={{ cursor: 'pointer' }} className="list-group-item active" key={ item.id }>{ item.text }</li>
							} else {
								return null;
							}
						})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log(dispatch);
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
