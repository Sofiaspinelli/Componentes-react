import React from 'react'
import PropTypes from 'prop-types'

function MovieDetail({ title, length, rating, genres, awards }) {
    return (
        <div className="row">
            <div className="col-4 text-start">{title}</div>
            <div className="col-2 text-center">{length}</div>
            <div className="col-2 text-center">{rating}</div>
            <div className="col-2"><ul>
                {genres.map((genre, i) =>
                    <li>{genre}</li>
                )}
            </ul>
            </div>
            <div className="col-2 text-center">{awards}</div>
        </div>
    )
}
MovieDetail.propTypes = {
    title: PropTypes.string,
    length: PropTypes.number,
    rating: PropTypes.number,
    genres: PropTypes.array,
    awards: PropTypes.number
}
MovieDetail.defaultProps = {
    title: 'Billy Elliot',
    length: 123,
    rating: 5,
    genres: ['Drama', 'Comedia'],
    awards: 2
}

export default MovieDetail
