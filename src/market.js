import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { v4 } from 'uuid'

function CartApp(props) {
    const [itemList, setItemList] = useState([
        {id: v4(), name: "라면", count: "5"},
        {id: v4(), name: "생수(500ml)", count: "2"}
    ])
    const addListItem = (name) => setItemList(list => list.concat({id: v4(), name, count: 1}))
    const addItemCount = (id, amount) => setItemList(list => {
        return list.map(item => {
            if(item.id === id) {
                item = {...item, count: item.count + amount}
            }
            return item
        })
    })
    const deleteListItem = (id) => setItemList(list => {
        return list.filter(item => {
            return item.id !== id
        })
    })

    return (
        <div>
            <Input onButtonClick={addListItem} inputPlaceHolder="추가할 항목을 입력하세요." buttonLabel="검색" buttonColor="green"/> 
            {
                itemList.map(item => <CartItem 
                    handleCountChange={addItemCount} 
                    handleItemDelete={deleteListItem} 
                    item={item} />)
                // itemList.map(item => <div>{item.name} 수량 : {item.count}</div>)
            }   
        </div>
    )
}

function Input(props) {
    const [text, setText] = useState("")
    const handleOnChange = (e) => {setText(e.target.value)}

    return (
        <div>
            <input type="text" placeHolder={props.inputPlaceHolder} onChange={handleOnChange} value={text}/> 
            <button onClick={() => {
                props.onButtonClick(text) 
                setText("")
                }} style={{background:props.buttonColor}}>{props.buttonLabel}</button>
        </div>
    )
}

{/* props 대신 { item: { name, count } } 를 써도 됨*/ }
function CartItem(props) {
    return (
        <div>
            {props.item.name} 수량 : {props.item.count}
            {/* {name} 수량 : {count}/ */}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => props.handleCountChange(props.item.id, 1)}>+</button>
            &nbsp;
            <button onClick={() => {
                if(props.item.count === 1) props.handleItemDelete(props.item.id)
                else props.handleCountChange(props.item.id, -1)}}>-</button>
            &nbsp;
            <button onClick={() => props.handleItemDelete(props.item
                .id)}>x</button>
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))