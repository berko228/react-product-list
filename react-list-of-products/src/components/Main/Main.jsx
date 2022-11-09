import React from 'react';
import './Main.scss';
import product_card from '../../data/product_data';


function Main() {
  const cardItem = product_card.map((item) => 
  <div 
  className="container__card card"
  key={item.id}
  data-qa="card"
  >
  <div className="card__ph">
    <img 
      className="card__ph photo" 
      src={item.imageUrl}
      alt="imac"
    >
    </img>
  </div>
    <h2 className="card__title">
      {item.name}
    </h2>
    <p className="card__code">
      Вага: {item.weight}
    </p>
    <div className="card__rating">
      <div className="stars stars--4">
        <div className="stars__star"></div>
        <div className="stars__star"></div>
        <div className="stars__star"></div>
        <div className="stars__star"></div>
        <div className="stars__star"></div>
      </div>
      <p className="rating">Відгуків: 5</p>
    </div>
    <div className="card__price price">
      <p className="price__text">Ціна:</p>
      <p className="price__sum">{item.price}</p>
    </div>
    <a
      className="card__button"
      href="#buy"
      data-qa="hover"
    >
      Купити
    </a>
  </div>
  );

  return(
    <main>
      <div className='page__container container'>
        {cardItem}
      </div>
    </main>
  )
}

export default Main;