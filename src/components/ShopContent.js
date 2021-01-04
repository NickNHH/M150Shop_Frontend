import React, { useState, useEffect } from 'react'
import { SHOPURL, HOSTURL } from '../Constants'
import { useCart } from "../persistence/Cart";
import CartComponent from "./CartComponent";

export default function ShopContent() {
  const [ articles, setArticles ] = useState([]);
  const [ cart, addArticle, delArticle, delAllArticles ] = useCart();

  useEffect(() => {
    fetch(SHOPURL + "articles")
      .then(response => response.json())
      .then(articles => setArticles(articles))
      .catch(error => console.log(error))
  }, []);

  const handleAddArticleToCart = (article) => addArticle(article)

  const articleCards = articles.map(a => (
    <div className="card" key={a.id}>
      <img className="card-img-top" src={HOSTURL + a.image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{a.text}</h5>
        <p className="card-text">{a.description}</p>
          <button onClick={() => handleAddArticleToCart(a)} className="btn btn-primary">
            add to cart
          </button>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>BBW Shop</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h2>articles</h2>
          <p>list of available articles</p>
          <div className="card-columns">
            {articleCards}
          </div>
        </div>
        <div className="col-md-4">
          <CartComponent cart={ { cart, addArticle, delArticle, delAllArticles } } />
        </div>
      </div>
    </div>
  )
}
