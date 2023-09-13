import React from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import './styles.css';

function TodoList({ lista, ontoggle, onRemove }) {
    return (
        <ul className="todo-list">
            {lista.map((paraFazer) => (
                <li key={paraFazer.id.toString()}>
                    <span
                        className={[
                            'todo',
                            paraFazer.checked ? 'checked' : '',
                        ].join(' ')}
                        onClick={() => ontoggle(paraFazer)}
                        onKeyPress={() => ontoggle(paraFazer)}
                        role="button"
                        tabIndex={0}
                    >
                        {paraFazer.title}
                    </span>
                    <button
                        className="remove"
                        type="button"
                        onClick={() => onRemove(paraFazer)}
                    >
                        <MdDelete size={28} />
                    </button>
                </li>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    lista: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    ontoggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default TodoList;
