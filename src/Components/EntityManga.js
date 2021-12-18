import React from 'react';
import axios from 'axios';

export default class EntityManga extends React.Component {
  state = {
    manga: [],
  };

  componentDidMount() {
    axios
      .get(`https://kitsu.io/api/edge/trending/manga`)
      .then((res) => {
        const manga = res.data.data;
        this.setState({ manga });
      });
  }

  render() {
    return (
      <>
        {this.state.manga.map((manga) => (
          <div key={manga.id} className='card mx-3 mt-3' style={{width:"350px"}}>
            <img className='card-img-top' src={manga.attributes.posterImage.large} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>{manga.attributes.titles.en_jp || manga.attributes.titles.en}</h5>
              <a href='#' className='btn btn-primary'>
                View
              </a>
            </div>
          </div>
        ))}
      </>
    );
  }
}
