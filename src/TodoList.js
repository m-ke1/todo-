//todoリスト全体の管理.
import React,{ Component }from 'react';
import Todo from './Todo';

class TodoList extends Component{

    render(){　//関数 setTodoStatus をさらに Todo に渡す。
        /*親コンポーネントから渡されたものは this.props を使って受け取ることができる。
        map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。*/
        //done ={this.props.done}
        // {...props}:propsの値をすべて引き継ぐという意味
        console.log(this.props.done);
        const todos = this.props.todos.map( todo =>　
            <Todo
                key={todo.id}
                {...todo}    
                setTodoStatus={this.props.setTodoStatus}
                />
            )
    return(
        <div>
           {todos}
        </div> 
    );
    }
}

export default TodoList