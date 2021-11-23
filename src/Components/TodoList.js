import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
    const [movies, setMovies] = useState([]);
    
    const addMovie = (movie) =>{
        if(!movie.text || /^\s*$/.test(movie.text)){
            return;
        }
        const newMovies = [movie, ...movies];
        setMovies(newMovies);
    }

    const removeMovie = (id) => {
        const removeArr = [...movies].filter((movie) => movie.id !== id);
        setMovies(removeArr);
    }
    const completeMovies = id =>{
        let updatedMovies = movies.map((movie)=>{
            if (movie.id === id){
                movie.isComplete = !movie.isComplete
            }
            return movie;
        })
        setMovies(updatedMovies);
    }
    return (
        <div>
            <h1>Movies To Watch This Weekend</h1>
            <TodoForm onSubmit={addMovie} />
            <Todo movies={movies} completeMovies={completeMovies} removeMovie={removeMovie}/>
        </div>
    )
}

export default TodoList
