import React from 'react';

const SingleCard = ({movie, handleWatchTime}) => {
    // console.log(props);
    // const {poster, description, imdbRating, movieName, watchTime} = props.movie;

    return (
        <>

            <div className="movie-card card p-5 col-md-6">
                <div className="movie-poster w-50 m-auto">
                    <img className='w-50' src={movie.poster} alt="" />
                </div>
                <h3>{movie.movieName}</h3>
                <p>{movie.description}</p>
                <div className="timeAndRating d-flex justify-content-between">
                    <p className='mx-auto'>Watch Time: {movie.watchTime} min</p>
                    <p className='mx-auto'>Rating: {movie.imdbRating}</p>
                </div>
                <button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-info w-50 m-auto'>Book Now</button>
            </div>

        </>
    );
};

export default SingleCard;