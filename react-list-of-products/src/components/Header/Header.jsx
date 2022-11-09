import React from 'react';
import './Header.scss';
import Nav from '../Navigation/Nav';
import product_card from '../../data/product_data';


function Header() {
  const body = document.body;
  const { useState } = React;
  const [products, setProducts] = useState(product_card);
  
  const removeFromArr = (e) => {
    e.target.closest('div').querySelector('.card').remove()
  }

  const appendForm = () => {

    const noReload = (e) => {
      e.preventDefault();
    }
    const form = document.createElement('form');
    form.className = 'new-product-form'
  
    const labelId = document.createElement('label');
    labelId.innerText = 'ID продукту:';
    const idInput = document.createElement('input');
    idInput.name = 'id';
    idInput.type = 'number';
    idInput.minLength = 1;
    idInput.setAttribute('required', '');
    labelId.append(idInput);

    const labelUrl = document.createElement('label');
    labelUrl.innerText = 'Посилання на фотографію продукту:';
    const urlInput = document.createElement('input');
    urlInput.name = 'url';
    urlInput.type = 'text';
    urlInput.minLength = 4;
    urlInput.setAttribute('required', '');
    labelUrl.append(urlInput);

    const labelName = document.createElement('label');
    labelName.innerText = 'Назва продукту:';
    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameInput.type = 'text';
    nameInput.setAttribute('required', '');
    labelName.append(nameInput);

    const labelCount = document.createElement('label');
    labelCount.innerText = 'Кількість:';
    const countInput = document.createElement('input');
    countInput.name = 'count';
    countInput.type = 'number';
    countInput.setAttribute('required', '');
    labelCount.append(countInput);


    const labelWidth = document.createElement('label');
    labelWidth.innerText = 'Ширина:'
    const widthInput = document.createElement('input');
    widthInput.type = 'number';
    labelWidth.append(widthInput);

    const labelHeight = document.createElement('label');
    labelHeight.innerText = 'Висота:'
    const heightInput = document.createElement('input');
    heightInput.type = 'number'
    labelHeight.append(heightInput);

    const labelWeight = document.createElement('label');
    labelWeight.innerText = 'Вага:'
    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    labelWeight.append(weightInput);

    const labelComments = document.createElement('label')
    labelComments.innerText = 'Коментарі:'
    const comments = document.createElement('textarea');
    labelComments.append(comments)

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'form__button';
    button.innerText = 'Додати новий товар'

    const addNewGood = () => {
      const obj = {};
      obj.id = idInput.value;
      obj.imageUrl = urlInput.value;
      obj.name = nameInput.value;
      obj.count = countInput.value;
      obj.size.width = widthInput.value;
      obj.size.height = heightInput.value;
      obj.weight = weightInput.value;
      obj.comments = comments.value;

      setProducts(arr => arr.push(obj));
    }

    const sortByName = () => {
      const select = document.querySelector('.header__select')

      switch (select.value) {
        case 'Від дорогих':
         setProducts(arr => arr.sort((a, b) => b.price - a.price));
        break;
        case 'Від дешевих':
          setProducts(arr => arr.sort((a, b) => a.price - b.price));
        break;
      }
    }

    form.setAttribute('onSubmit', noReload);
    button.setAttribute('onClick', addNewGood);
    form.append(labelId, labelUrl, labelName, labelCount, labelWidth, labelHeight, labelWeight, labelComments, button);
    body.append(form)
  }

  return (
    <header className="header">
      <a 
        href="#home" 
        className="logo"
      >
        <>
        <img src="./images/logo.png" alt="MOYO"></img>
        </>
      </a>
      <Nav />
      <select className='header__select' 
        name="" 
        id=""
        // onClick={sortByName}
      >
        <option value="">Від дорогих</option>
        <option value="">Від дешевих</option>
        <option value="">За рейтингом</option>
        <option value="">За вагою</option>
      </select>
      <button 
        className='header__button add'
        onClick={appendForm}
      >
        Додати
      </button>
      <button 
        className='header__button delete'
        onClick={removeFromArr}
      >
        Видалити
      </button>
    </header>
  );
}


export default Header;
