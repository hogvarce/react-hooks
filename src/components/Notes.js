import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export const Notes = ({notes, onRemove}) => (
    <TransitionGroup component="ul" className="list-group">
        {notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >
                <li className="list-group-item note">
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button onClick={() => onRemove(note.id)} type="button" className="btn btn-danger btn-sm">&times;</button>
                </li>
            </CSSTransition>
        ))}
        
    </TransitionGroup>
)