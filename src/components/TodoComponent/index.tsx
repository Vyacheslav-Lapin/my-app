import React from 'react';
import Todo from "../../domain/Todo";

interface TodoComponentProps extends Todo {
    name: string;
}

export const TodoComponent = ({name: userName, title, completed}: TodoComponentProps) => <li>
    <span>User name: </span> {userName}<br/>
    <span>Title: </span> {title}<br/>
    <span>completed: </span> {completed}<br/>
</li>;

export default TodoComponent;