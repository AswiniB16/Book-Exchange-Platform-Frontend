import React from 'react'
import science from '../../assets/science.jpg';
import romance from '../../assets/romance.jpg';
import poetry from '../../assets/poetry.png';
import horror from '../../assets/horror.png';
import fiction from '../../assets/fiction.jpg';
import fantacy from '../../assets/fantacy.jpg';
import mystery from '../../assets/mystery.png';
import './Category.css';

const Category = () => {
  return (
    <div className='category'>
      <div className="genre">
        <img src={fiction} alt="" />
      </div>
      <div className="genre">
        <img src={science} alt="" />
      </div>
      <div className="genre">
        <img src={fantacy} alt="" />
      </div>
      <div className="genre">
        <img src={romance} alt="" />
      </div>
      <div className="genre">
        <img src={poetry} alt="" />
      </div>
      <div className="genre">
        <img src={horror} alt="" />
      </div>
      <div className="genre">
        <img src={mystery} alt="" />
      </div>

    </div>
  )
}

export default Category
