/**
 * @description 资料信息
 * @since 2020/12/01
 * @author 狗尾草
 */
import React,{ Component } from 'react';

class Profile extends Component{
  render(){
    return (
      <div className="profile-wrap">
        <h1>这里是个人资料信息</h1>
        <button onClick={this.handleJump.bind(this)}>跳转空间视野</button>
      </div>
    )
  }
  handleJump() {
    this.props.history.push('/place');
  }
}

export default Profile;
