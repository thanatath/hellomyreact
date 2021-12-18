import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const SearchManga = () => {
  const searchValue = useSelector((state) => state.value);
  const [manga, setmanga] = useState({});
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://kitsu.io/api/edge/anime?filter[text]=' + searchValue
      );
      res.json().then((res) => {
        setmanga(res.data);
        setloaded(true);
      });
    }
    fetchData();
    console.log('Fetching data...');
  }, [searchValue]);

  return loaded ? (
    <span>
      <h3>Result from : {searchValue} </h3>
      {manga.map((manga) => (
        <div className='card mb-3' key={manga.id}>
          <div className='row no-gutters'>
            <div className='col-md-4'>
              <img
                src={manga.attributes.posterImage.small}
                className='card-img'
                alt='...'
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{manga.attributes.titles.en_jp}</h5>
                <p className='card-text'>{manga.attributes.synopsis}</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    {manga.attributes.startDate}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </span>
  ) : (
    <span>Loading...</span>
  );
};

export default SearchManga;
