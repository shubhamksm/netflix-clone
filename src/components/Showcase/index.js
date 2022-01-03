import React from 'react';
import { get } from 'lodash';
import { IMAGE_BASE_PATH } from '../../api/constants';

const Showcase = ({ trendingMovies }) => {

    const movie = get(trendingMovies, 'results[0]', {});

    return <div className="showcase">
        <img src={`${IMAGE_BASE_PATH}original${movie.backdrop_path}`} />
    </div>
}

export default Showcase;