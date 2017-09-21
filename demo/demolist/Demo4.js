

import React, { Component } from 'react';
import Menu,{ Item as MenuItem, Divider, SubMenu, MenuItemGroup }  from 'bee-menus';
import FormControl from 'bee-form-control';
import Badge from 'bee-badge';
import Icon from 'bee-icon';

import Navbar from 'bee-Navbar';
import Dropdown from 'bee-dropdown';

const MenuToggle = Menu.MenuToggle;
const SideContainer = Menu.SideContainer;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;


class Demo4 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedkey: 1,
            expanded: false,
            current: 'mail',
            dropdownVisible:false
        }
    }

    handleSelect(index) {
        this.setState({selectedkey: index});
    } 

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }

    onSelectMenu = (key) => {
        debugger;
       console.log(`${key} selected`);

     }

    onVisibleChange = (visible) => {
       this.setState({dropdownVisible:visible});
    }
    onClick = (e) => {
      this.setState({dropdownVisible:true});
       console.log("onClick"+e);
    }


    render() {
        const menu1 = (
          <Menu className="horizontal-submenu"
            onClick={this.onClick}
            onSelect={this.onSelectMenu}>
            <MenuItem key="1">借款合同</MenuItem>
            <MenuItem key="2">抵/质押合同</MenuItem>
            <MenuItem key="3">担保合同</MenuItem>
            <MenuItem key="4">联保合同</MenuItem>
            <MenuItem key="5">合同审批</MenuItem>
            <MenuItem key="6">抵/质押合同跟踪</MenuItem>
          </Menu>
        );
        return (
            <div id="demo4">
                <Navbar expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
                    <Header>
                        <Brand>
                            <a href="#"><img style={{width:140}} src="//tinper.org/assets/images/tinperlogos32.png"/></a>
                        </Brand>
                    </Header>
                    <Nav selectedkey={this.state.selectedkey} onSelect={this.handleSelect.bind(this)}>
                        <NavItem eventKey={1}>组织 1</NavItem>
                        <NavItem eventKey={2}>组织 2</NavItem>
                        <NavItem eventKey={3}>
                            <Dropdown
                                overlayClassName="dropdown-menu"
                                trigger={['click']}
                                visible = {this.state.dropdownVisible}
                                overlay={menu1}
                                animation="slide-up"
                                onVisibleChange={this.onVisibleChange}>
                                <span   >点击显示</span>
                            </Dropdown>
                        </NavItem>
                        
                    </Nav>
                    
                    <Nav pullRight>
                        
                        <NavItem eventKey={3} className="icon-nav">
                            <a href="#"> <Icon type="uf uf-qm-c"></Icon> 帮助 </a>
                            <a className="" href="#"> 
                                <img alt="@ahua52" className="avatar float-left mr-1" src="https://avatars2.githubusercontent.com/u/19704104?v=4&amp;s=40" height="20" width="20" />
                                刘认华 
                            </a>
                        </NavItem>
                        
                    </Nav>
                </Navbar>
                <div className="inner-container"></div>
            </div>
        )
    }
}

export default Demo4;