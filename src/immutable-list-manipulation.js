// Node에서 실행
// 리스트 데이터
let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]

// lst.push({id: 4, name: "Ken"})
// concat이 추가를 해주긴 하는데 새로운 배열을 만들어버림 → 새 변수에 넣어주어야 함
let newList = lst.concat({id: 4, name: "Ken"})    
console.log(lst)
console.log(newList)

newList2 = []
lst.forEach(item => newList2.push(item))
newList.push({id: 4, name: "Ken"})
console.log(newList2)


// 요소 내용 변경은 map 메소드를 이용하여 처리
let updatedId = 2
let updatedName = "Smith"
let updatedLst = lst.map(item => {
    if(item.id === updatedId) {
        // 다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
        // item.name = updatedName

        // 전개 연산자를 이용하여 값 복사 후 덮어쓰기 전략으로 새 객체를 생성하여 대입하기
        item = { ...item, name: updatedName }
    }
    return item
})
console.log("map =====")
console.log(lst) // 원본에 영향 X
console.log(updatedLst) // 새로운 객체
console.log(lst === updatedLst) // false