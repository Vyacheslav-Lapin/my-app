import Todo from "./domain/Todo";
import User from "./domain/User";

export const getFromServer = <T>(path: string): Promise<T> =>
    fetch(`https://jsonplaceholder.typicode.com/${path}`)
        .then(response => response.json());

export const getTodos = (): Promise<Todo[]> => getFromServer("todos");
export const getUsers = (): Promise<User[]> => getFromServer("users");
