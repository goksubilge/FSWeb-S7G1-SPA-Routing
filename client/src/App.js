import React, { useState, useEffect } from 'react';
import axios from 'axios';

import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import FilmListesi from './Filmler/FilmListesi';
import Film from './Filmler/Film';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler/') // Burayı Postman'le çalışın
        .then(response => {
          console.log(response.data)
          setMovieList(response.data)
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = id => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };
//1) FilmListesi prop olarak movies almış. o yüzden movies etiketini açıyorum FilmListesi divinin içine.
//2) sonra Film i import ettim, gidip baktığımda film bilgisi yükleniypr dedi. film.js de if (!movie) kısmı boş çünkü, yalnızca yazı var divin içinde. Onu düzenliyorum.

  return (
    <div>
      <KaydedilenlerListesi list={[ /* Burası esnek */]} />
      <div><Film/></div>
      <div><FilmListesi movies={movieList}/></div>
    </div>
  );
}
