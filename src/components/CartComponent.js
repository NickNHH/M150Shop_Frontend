import React, {useContext} from 'react'

export default function CartContent(props) {
    const cart = props.cart.cart;
    const addArticle = props.cart.addArticle;
    const delArticle = props.cart.delArticle;
    const delAllArticles = props.cart.delAllArticles;

    if (!cart.cartEntries) {
        return (
            <React.Fragment>
                <p>Cart entries</p>
                <p>Cart is empty</p>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h2>My Cart</h2>

                {cart.cartEntries.map((ce, idx) =>
                    <div className="row" key={idx}>
                        <div className="col-1">{ce.count}</div>
                        <div className="col-8">{ce.article.text}</div>
                        <div className="col-1">
                            <button onClick={() => addArticle(ce.article)}>+</button>
                        </div>
                        <div className="col-1">
                            <button onClick={() => delArticle(ce.article)}>-</button>
                        </div>
                        <div className="col-1">
                            <button onClick={() => delAllArticles(ce.article)}>delete</button>
                        </div>
                    </div>
                )}

                <p style={{"marginTop": "10px"}}>
                    Cart contains {cart.cartEntries.length} {cart.cartEntries.length === 1 ? 'entry' : 'entries'}
                </p>

            </React.Fragment>
        );
    }
}



