import React from 'react'
import MovieDetail from './MovieDetail'

function ColumnMovie() {

    let movies = [
        {
            title: 'Billy Elliot',
            length: 123,
            rating: 5,
            genres: ['Drama', 'Comedia'],
            awards: 2
        },
        {
            title: 'Alicia en el país de las maravillas',
            length: 142,
            rating: 4.8,
            genres: ['Drama', 'Acción', 'Comedia'],
            awards: 3
        }
    ]

    return (
        <div class="container">
            <div class="row text-center">
                <div class="col-4">Título</div>
                <div class="col-2">Duración</div>
                <div class="col-2">Rating</div>
                <div class="col-2">Género</div>
                <div class="col-2">Premios</div>
            </div>
            {movies.map((movie, i) =>
                <MovieDetail
                    key={i}
                    title={movie.title}
                    length={movie.length}
                    rating={movie.rating}
                    genres={movie.genres}
                    awards={movie.awards}
                    />
            )}

        </div>
    )
}

export default ColumnMovie