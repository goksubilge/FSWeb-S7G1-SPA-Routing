import React from 'react';
import {Link} from 'react-router-dom';

// Link importlayıp button u sardım. + App.js de gidip kaydedilenlerListesini Rotuer ın içine aldım!
export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to='/' exact><div className="home-button">Anasayfa</div></Link>
    </div>
  );
}
