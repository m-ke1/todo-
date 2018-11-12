//入力フォームの管理.
import React,{ Component }from 'react'
import './css/form.css'

class Form extends Component{
    render(){
        return( //<form onSubmit={this.props.handleSubmit}> を記述し、propsとして受け取った handleSUbmit を
                //onSubmit 時に発火するようにする。この時、App.js で定義した handleSubmit()の処理が動き、
                //Todo の投稿ができるようになった。
            <div className="form">
                <form  onSubmit={this.props.handleSubmit}>
                    <input name="title" type="text" placeholder="タスク名"/><br/>
                    <textarea name="desc" placeholder="タスク詳細"></textarea><br/>
                    <button type="submit">todoを作成</button>
                </form>
            </div>
        )　
    /*type属性はボタンの種類を指定する際に使用します。 type属性の値には、以下の３種類のいずれかを指定することができます。
     初期値はtype="submit"です。
    type="submit" …… フォーム入力内容を送信するサブミットボタン（初期値）
    type="reset" …… フォーム入力内容をリセットするリセットボタン
    type="button" …… 何もしない汎用的な押しボタン */      
    }
}
export default Form

/*入力フォームを作るコンポーネント
import React,{ Component }from 'react'
import './css/form.css'

export default Form
class Form extends Component{
    render(){
        return( //input：フォームを作る。button：追加ボタンの作成。submitの部分を変えることで機能が変わるはず。
        <div>
            <input name="title" type="text" placeholder="タスク名"/> 
            <input name="contents" type="text" placeholder="タスクの内容"/>
            <button type="submit">タスク追加</button>
        </div>  
        )
    }
}*/