import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/2';


interface Todo{
    id: number;
    title: string;
    completed: boolean;
}


axios.get(url).then(response => { //axios.get is asynchronus, therefore we get back a promise in return. To get a notification when the request is complete we chain a then response

const todo = response.data as Todo;//tells TS that the response will contain only the data types in the interface Todo.

const ID = todo.id;
const title = todo.title;
const finished = todo.completed;
logTodo(ID, title, finished);
});


const logTodo = (id: number, title: string, completed: boolean) =>{

    console.log(`
    the todo with ID: ${id}
    has a title of: ${title}
    Is it finished?: ${completed}
    `);
}; 