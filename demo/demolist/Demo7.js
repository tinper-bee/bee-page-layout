/**
 * @title Navbar和Menus的组合
 * @description 示例采取navbar与menus的组合，达到一种PC端常用的复合导航菜单。导航添加了常用的搜索表单消息提醒等组件。
 *
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import Menu from 'bee-menus';
import FormControl from 'bee-form-control';
import Badge from 'bee-badge';
import Icon from 'bee-icon';
import Navbar from 'bee-Navbar';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuToggle = Menu.MenuToggle;
const SideContainer = Menu.SideContainer;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;


class Demo7 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: "选项 1"
        }
    }

    onToggle = (value) => {
        this.setState({expanded: !this.state.expanded});
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    handleMenuClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div id="demo7">
                <Menu className="sub-inline" onClick={this.handleClick.bind(this)} style={{ width: 70 }} mode="vertical">
                    <SubMenu  key="sub1" title={<span className="first-menu"><Icon type="uf-pc-2" /><span>组织</span></span>}>
                        <Menu.Item key="1">选项 1</Menu.Item>
                        <Menu.Item key="2">选项 2</Menu.Item>
                        <Menu.Item key="3">选项 3</Menu.Item>
                        <Menu.Item key="4">选项 4</Menu.Item>
                        <Menu.Item key="11">选项 11</Menu.Item>
                        <Menu.Item key="12">选项 12</Menu.Item>
                        <Menu.Item key="13">选项 13</Menu.Item>
                        <Menu.Item key="14">选项 14</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span className="first-menu"><Icon type="uf-pc-2" /><span>组织</span></span>}>
                        <Menu.Item key="5">选项 5</Menu.Item>
                        <Menu.Item key="6">选项 6</Menu.Item>
                        <Menu.Item key="15">选项 15</Menu.Item>
                        <Menu.Item key="16">选项 16</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span className="first-menu"><Icon type="uf-pc-2" /><span>组织</span></span>}>
                        <Menu.Item key="9">选项 9</Menu.Item>
                        <Menu.Item key="19">选项 19</Menu.Item>
                        <Menu.Item key="10">选项 10</Menu.Item>
                        <Menu.Item key="11">选项 11</Menu.Item>
                        <Menu.Item key="12">选项 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Demo7;