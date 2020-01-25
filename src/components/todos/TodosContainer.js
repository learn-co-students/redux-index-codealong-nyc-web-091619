import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class TodosContainer extends Component {

    createTodos = (todos) => {
        return todos.map((todo, id) => <Todo key={id} todo={todo} />)
    }

    render() {
        return (
            <div>
                <ul>
                    <label>Todo List:</label>
                    {this.createTodos(this.props.todos)}
                </ul>
            </div>
        )
    }
}

function msp(state) {
    return {
        todos: state.todos
    }
}

export default connect(msp)(TodosContainer)