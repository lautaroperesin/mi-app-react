import React from 'react';
import { useRef } from 'react';

function Form({onSubmitHandler}) {
    const taskInput = useRef();

    const onSubmitHandlerEvent = (event) => {
        onSubmitHandler(event);
        taskInput.current.value = '';
    }

    return(
        <form onSubmit={onSubmitHandlerEvent} className="formulario">
            <input ref={taskInput} name="taskName" type="text" placeholder="Write your tasks"/>
            <button>CREATE</button>
        </form>
    );
}

export default Form;