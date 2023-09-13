import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function NewTodo({ onNewTodo }) {
    const [value, setValue] = useState('');
    const enter = 13;
    const esc = 27;

    const apagar = () => {
        setValue('');
    };
    const incluir = () => {
        if (onNewTodo) {
            onNewTodo(value);
            apagar();
        }
    };
    const onChange = (event) => {
        setValue(event.target.value);
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
        <input
            className="new-todo"
            placeholder="Digite sua tarefa..."
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
