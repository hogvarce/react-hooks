import React, {useState, useContext} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {FireBaseContext} from "../context/firebase/fireBaseContext";

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FireBaseContext);
    const submitHandler = e => {
        e.preventDefault();
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note been created', 'success');
            }).catch(() => {
                alert.show('Something goes wrong', 'danger');
            });
            setValue('')
        } else {
            alert.show('Enter the note');
        }
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter title"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}