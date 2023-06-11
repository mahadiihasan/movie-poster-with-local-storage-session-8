import React from 'react';

const Home = () => {
    return (
        <>
        <div className="movie-container text-center">
            <div className="movie-card card p-5">
                <div className="movie-poster w-50 m-auto">
                    <img className='w-50' src='https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg' alt="" />
                </div>
                <h3>Dark Knight</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <div className="timeAndRating d-flex justify-content-between">
                    <p className='mx-auto'>Watch Time: </p>
                    <p className='mx-auto'>Rating: </p>
                </div>
                <button className='btn btn-info w-50 m-auto'>Book Now</button>
            </div>
        </div>
        </>
    );
};

export default Home;