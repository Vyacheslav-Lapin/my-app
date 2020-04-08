import React, {Component} from 'react';
import './index.css';
import Todo from "../../domain/Todo";
import User from "../../domain/User";
import TodoComponent from "../TodoComponent";
import {getTodos, getUsers} from "../../server";

interface TodoListState {
    todos: Todo[];
    users: User[];
    isLoaded: boolean;
}

export default class TodoList extends Component<any, TodoListState> {

    constructor(props: any) {
        super(props);
        this.state = {todos: [], users: [], isLoaded: false};
    }

    async componentDidMount() {
        this.setState({
            todos: await getTodos(),
            users: await getUsers(),
            isLoaded: true})
    }

    render() {
        const {todos, isLoaded} = this.state;
        return <ol>
            {isLoaded ? todos.map((todo, key) =>
                <TodoComponent {...{key}} {...todo} name={this.getUser(todo.userId).name} />) : null}
        </ol>;
    }

    getUser(id: number) {
        const {users} = this.state;
        return users.find(({id: userId}) => userId === id) || {name: ""};
    }
}
