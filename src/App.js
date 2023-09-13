import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
    const [lista, setLista] = useState([]);

    const onNewTodo = (value) => {
        setLista([
            ...lista,
            { id: new Date().getTime(), title: value, checked: false },
        ]);
    };

    const ontoggle = (todo) => {
        setLista(
            lista.map((objeto) =>
                objeto.id === todo.id
                    ? { ...objeto, checked: !todo.checked }
                    : objeto
            )
        );
    };
    const onRemove = (todo) => {
        setLista(lista.filter((objeto) => objeto.id !== todo.id));
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">todo</h1>
            </header>
            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />
                <TodoList
                    lista={lista}
                    ontoggle={ontoggle}
                    onRemove={onRemove}
                />
            </section>
        </section>
    );
}

export default App;
