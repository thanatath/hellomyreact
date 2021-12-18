import React from 'react';
import Searchmanga from '../Components/SearchManga.js';
import { useParams } from 'react-router-dom';
 

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        seachValue: props.seachValue,
      },
    };
  }
  render() {
    return (
      <span>
        

        <div className='col-12'>
          <div className='d-flex flex-row  flex-wrap justify-content-center '>
            <Searchmanga/>
          </div>
        </div>
      </span>
    );
  }
  componentDidMount() {
    console.log(localStorage.getItem("searchValue"));
     
 
  }
  
}



 
