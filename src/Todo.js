// todo それぞれを管理.
import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {
    render() {
        
        console.log(this.props.done);
        //const className = this.props.done;
        //const link = this.props.done ? '元に戻す' : '完了！'
        let link2 = this.props.done　//done2　の値を代入する変数 link2。
        console.log(this.props.done);
        let Message
        if(link2 === 0){
             Message = <div>未実行</div>
        }else if(link2 === 1){
             Message = <div>実行中</div>
        }else if(link2 === 2){
             Message = <div>完了</div>
        }
        /* href="" hrefの指定をカラにすると現在のページに遷移する。つまり、ページがリロードされる。*/
        return( 
            <li>
                <span>{this.props.id}</span>
                <span>タスク名：{this.props.title} </span>　　
                <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{Message}</a>
                <p>タスク詳細：{this.props.desc}</p>
                <p>タスク追加日：{this.props.date}</p>
            </li>
        /*<li  className={className}> 
            <span>{this.props.id}</span>
            <span>：{this.props.title}　</span>
            <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>/>　　
            <p>{this.props.desc}</p>
        </li>*/
        );
      }

}

export default Todo