import React, { useState } from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdDelete } from 'react-icons/md';

function App() {
    const enter = 13;
    const esc = 27;
    const [value, setValue] = useState('');
    const [lista, setLista] = useState([]);

    const incluir = () => {
        setLista([
            ...lista,
            { id: new Date().getTime(), title: value, checked: false },
        ]);
    };
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const apagar = () => {
        setValue('');
    };
    const onKeyDown = (event) => {
        if (event.which === enter) {
            // eslint-disable-next-line no-console
            incluir();
        } else if (event.which === esc) {
            apagar();
        }
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">todo</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="Digite sua tarefa..."
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <ul className="todo-list">
                    {lista.map((paraFazer) => (
                        <li key={paraFazer.id.toString()}>
                            <span className="todo">{paraFazer.title}</span>
                            <button className="remove" type="button">
                                <MdDelete size={28} />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default App;
