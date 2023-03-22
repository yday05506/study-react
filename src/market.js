import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const cartItem = function({cart: {text}, idx, handleCartStatusToggle, handleCartRemove}) {
    return (
        <div>
            <button onClick={() => handleCartRemove(idx)}>X</button>
        </div>
    )
}

const CartList = function({items, handleCartStatusToggle, handleCartRemove}) {
    return (
        <ol>
            {
                items.map((cart, idx) => {
                    return (
                        <li key={idx}>
                            <cartItem idx = {idx} cart={cart}
                                handleCartStatusToggle = {handleCartStatusToggle}
                                handleCartRemove = {handleCartRemove}/>
                        </li>
                    )
                })
            }
        </ol>
    )
}

const CartAdder = function({handleCartAdd}) {
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return (
        <div>
            <input type='text' onChange={handleChange} value={input} />
            <button onClick={() => {
                handleCartAdd({text: input})
                setInput("")
            }}>+</button>
        </div>
    )
}

const CartApp = function(props) {
    const [carts, setCarts] = useState([
        {text:'사과'},
        {text:'바나나'}
    ])

    const handleCartAdd = newCart => setCarts(items => items.concat(newCart))
    const handleCartStatusToggle = cartIndex => {
        setCarts(items => {
            return items.map((cart, idx) => {
                if(idx === cartIndex) {
                    return {
                        ...cart
                    }
                }
                return cart
            })
        })
    }
    const handleCartRemove = cartIndex => {
        setCarts(items => {
            return items.filter((idx) => {
                return idx !== cartIndex
            })
        })
    }

    return (
        <div>
            <CartList items={carts}
                handleCartStatusToggle = {handleCartStatusToggle}
                handleCartRemove = {handleCartRemove} />
            <CartAdder handleCartAdd = {handleCartAdd} />
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))