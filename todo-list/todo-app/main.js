//html要素の取得を行えるようにjsでquerySelectorを使用する
const addTask = document.querySelector('.add');
const list = document.querySelector('.tasks');

//todoオブジェクトを追加する配列を作成する
let todos = [];

//To use stuffs below again
function addToDo(text){
    const todo = {
        id: Date.now(),
        text,
    };
    todos.push(todo)
}

//Enterが押下されたタイミングでToDoのタスクの追加・表示を行う
//eはイベントオブジェクトで操作イベントの様々な情報を保有している。
addTask.addEventListener('submit', e => {
    e.preventDefault(); // prevent default event in the browser because it doesn't have actions elem in html
    const text = addTask.add.value.trim(); //trim methods allows to remove space
    if (text !== ''){
        addToDo(text);
        addTask.reset();
        renderTodo();
    }
});

//Show Todo contents with this function
function renderTodo(){
    //add the empty obj here
    let temp = '';
    //show all todo contents which are added in the list
    todos.forEach(todo => {
        const html = `
        <input type="checkbox" id="${todo.id}" name="${todo.text}">
            <label for="${todo.id}">${todo.text}</label><br>
            <i class="delete"></i>
        `;
    temp += html;
    });
    list.innerHTML = temp;
}

//応用編
/*入力完了を確定するボタンを設けて別で確認ボタンを実装する
*/


