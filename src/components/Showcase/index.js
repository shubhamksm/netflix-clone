import React from 'react';
import { get } from 'lodash';
import { IMAGE_BASE_PATH } from '../../api/constants';
import './Showcase.scss';

const Showcase = ({ trendingMovies }) => {

    const movie = get(trendingMovies, 'results[0]', {});

    return <div className="showcase">
        <div className="showcase__content">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
        <img src={`${IMAGE_BASE_PATH}original${movie.backdrop_path}`} />
    </div>
}

export default Showcase;