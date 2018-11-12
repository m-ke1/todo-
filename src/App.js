//App全体を管理.

import React,{ Component } from 'react';
import TodoList from'./TodoList';
import Form from'./Form'
import './css/App.css'

class App extends Component{
    constructor(){  
        super() 
        const todos = []
        this.state = {　          
            todos: todos,
            countTodo: 1, //countTodo という todo の数をカウントする state を作成。idの代わりに使用する。
        }
        //this.resetTodo = this.resetTodo.bind(this);//bind(this)：bind(this)を記述することでresetTodoメソッドはAppコンポーネントのstateを参照できるようになる。
    }　

    handleSubmit(e){  //todoリストを「追加」するボタンで handleSubmit()の関数が呼び出される。
        console.log(e);
        e.preventDefault();　
        const title = e.target.title.value;　//e.target.(name属性).value でフォームの中身を取りだすことができる。
        const desc = e.target.desc.value;
        const todos = this.state.todos.slice(); //slice()でコピーされた新しい配列を作り、stateが直接変更されることを防ぐ。
        //console.log(todos);
        const countTodo = this.state.countTodo;

       todos.push({　//フォームに記入した内容が todos の配列に追加される
            id: countTodo,
            date:Date(),
            title: title,
            desc: desc,
            done:0,
        });

        this.setState({ todos })
        this.setState({ countTodo: countTodo + 1}) 
        e.target.title.value ='';　//フォームを空にする
        e.target.desc.value ='';
    } 
    
    /*Todoの完了/未完了を切り替える関数setTodoStatus()を定義。
      完了をクリックすることで setTodoStatus 関数が呼び出される。*/
    setTodoStatus(clickTodo){    
        console.log(clickTodo); 
        console.log(clickTodo.id); //clicktodo.id = タスク番号。state の id の値（=countTodoの値）。 
        const todos = this.state.todos.slice();
        const todo = todos[clickTodo.id - 1]; //配列は 0 から、id は 1 から始まるので、idから1を引いた数字で配列の Todo を取りだす。
        //todos[a.id - 1] = todo;
        console.log(todo);
        this.setState({todos});
        todo.done = todo.done + 1; 
        //console.log(todo.done);
    }

    resetTodo(){
        //console.log(this.countTodo);
        this.setState({
            todos: [],
            countTodo: 1, 
        });
        console.log(this.countTodo);
    }

    render(){
        return(　/*以下がブラウザにレンダリングする内容
                <Form handleSubmit={this.handleSubmit.bind(this)}/>とし、
                Form コンポーネントで handkeSubmit() という関数が使えるようにします。
                関数setTodoStatus を TodoList に渡す。*/
                //↓ className でクラス属性を設定できる。フォントや背景色などをクラス属性を利用して設定できる。
            <div className="app">
                <h1>Todoアプリ</h1>
                <Form handleSubmit={this.handleSubmit.bind(this)}/>
                <TodoList 
                    todos = {this.state.todos}
                    setTodoStatus={this.setTodoStatus.bind(this)}
                    />
                <button onClick={this.resetTodo.bind(this)}>全タスクをリセット</button>
            </div>
        );
    }    
}

export default App