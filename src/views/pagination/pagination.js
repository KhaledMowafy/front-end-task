import React, {useState, useEffect} from 'react';
import API from '../../API/API';
import './pagination.css';
function Pagination({nextPage, prevPage}) {
    

   

    

   
    return (
      <div className="card__footer">
            <div className="card__actions">
                <button type="button" onClick={prevPage}>&#60;&#60; Previous Page</button>
                <button type="button" onClick={nextPage}>Next Page &#62;&#62;</button>

            </div>
      </div>
    );
  }
  
  export default Pagination;
  