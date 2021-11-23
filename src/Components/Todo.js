import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti'

function Todo({movies, completeMovies, removeMovie}) {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    })
    return movies.map((movie, index) =>(
        <div className={movie.isComplete ? 'movie-row complete' : 'movie-row'} key={index}>
            <div key={movie.id} onClick={()=> completeMovies(movie.id)}>{movie.text}</div>
            <div>
                <RiCloseCircleLine onClick={()=>removeMovie(movie.id)} className='delete-icon'/>
                <TiEdit />
            </div>
        </div>
        
    )
    )
}

export default Todo
