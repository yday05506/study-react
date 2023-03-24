import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { v4 } from 'uuid'

function CartApp(props) {
    const [itemList, setItemList] = useState([
        {id: v4(), name: "라면", count: "5"},
        {id: v4(), name: "생수(500ml)", count: "2"}
    ])
    const addListItem = (name) => setItemList(list => list.concat({id: v4(), name, count: 1}))

    return (
        <div>
            <Input onButtonClick={addListItem} inputPlaceHolder="추가할 항목을 입력하세요." buttonLabel="검색" buttonColor="green"/> 
            {
                itemList.map(item => <CartItem item={item} />)
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

function CartItem({ item: { name, count }} /*props */) {
    return (
        <div>
            {/* {props.item.name} 수량 : {props.item.count} */}
            {name} 수량 : {count}
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))