import React from 'react';
import { Menu, Dropdown, notification } from 'antd';
import { Link } from 'react-router-dom';
import Style from './index.scss';
console.log(Style);

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: true
    }
  }
  render() {
    const aboutMenu = (
      <Menu>
        <Menu.Item>关于我</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    );
    return (
      <nav className={Style['page-header']}>
        <div className={`${Style['header']} ${Style['toggle']}`}>
          <div className={Style['logo-space']}>
            {
              this.state.toggle?
              <Link className={Style['instagram']} to={'/'}/>
              :
              <Link className={Style['icon']} to={'/'}/>
            }
          </div>
          <div className={Style['search']}>
            <div className="search-block">
              <span className="block-icon"></span>
              <span className="block-text">搜索</span>
            </div>
          </div>
          <div className={Style['navigate']}>
            <Link className={Style['explore']} to={"/"} />
            <Link className={Style['love']} to={"/"} />
            <Dropdown overlay={aboutMenu}>
              <Link className={Style['user']} to={'/about'} />
            </Dropdown>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
