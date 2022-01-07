import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            } return todo;
        });
        this.setState({ todos: updatedTodos })
    }

    toggleCompleted(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } return todo;
        });
        this.setState({ todos: updatedTodos })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo
                task={todo.task}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompleted}
            />
        });
        return (
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;