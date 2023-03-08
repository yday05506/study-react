import ReactDOM from 'react-dom/client';

const name = 'John';
const element = <h1>Hello, {name}</h1>;

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

// undefined, null 출력 안 함
// boolean 값도 출력 안 함
const el = <div>
    {true}
    {false}
    {undefined}
    {null}
</div>

// 순수 js 영역
const JSXwithExpressions = (
    // js 영역
    <h1>
        {/* 주석 */}    
    {lst[0]}
    &nbsp;{person.name}
    &nbsp;{person.age}
    &nbsp;{2 + 2}
    &nbsp;{person.name.toUpperCase()}
    &nbsp;{person.name.length}
    &nbsp;{double(person.age)}
    </h1>)

const unreadMessages = ["hello", "world"];
const el2 = <div>
    <h1>Hello!</h1>
    {
    unreadMessages.length > 0 &&  
    <h2>You have {unreadMessages.length} unread messages.</h2>
    }
    {/* {
    unreadMessages.length > 0 ?  
    <h2>You have {unreadMessages.length} unread messages.</h2>
    :
    null
    } */}
</div>

// 노란색 {} : 속성에 js 코드를 넣어야 함
// 보라색 {} : 객체 전달
const el3 = <h1 style={{color: "red", backgroundColor: "blue "}}>Hello Style!</h1>;   // 객체를 전달해줘야 함

const root = ReactDOM.createRoot(document.getElementById('root'));  // root라는 아이디를 갖고 있는 아이를 갖고 옴
// root.render(<div>Hello</div>);
// root.render(element);
// root.render(JSXwithExpressions);
// root.render(el2);
root.render(el3);