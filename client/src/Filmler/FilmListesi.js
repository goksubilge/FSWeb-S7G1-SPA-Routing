import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
  }
// 8) https://v5.reactrouter.com/web/guides/quick-start kullanıyorum yine. nav kısmın link vermek için
// 9) amacım moviecard ların herhangi birisine tıkladığımda ilgili filmin listesine gidilmesini istiyorum! Link importu yaptım, Link kullanıcam. return ün altını nav lı linklere benziticem..

function FilmDetayları(props) {
  const { title, director, metascore ,id } = props.movie;

  return (
        //<Link to="/users">Users</Link> buna benzetiyorum 
        //{`/filmler/${id}`} bu gösterimback tick ile olan ekstra süslü parantez içinde.
        // const a id yi de ekledim.
    <Link to={`/filmler/${id}`} >
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
        Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
