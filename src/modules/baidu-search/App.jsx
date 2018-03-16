import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

import 'antd-mobile/dist/antd-mobile.css';
//import 'antd-mobile/lib/date-picker/style/css';  
import jsonp from 'jsonp' ;


const {Item} = List ;

/**
 * 模拟百度搜索框
 */
class BaiduSearch extends Component{

    constructor(){
        super();
        console.log('构造函数');

        this.state = {sList:[]} ;
    }

    handleChange = (val) =>{        
        jsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}&cb=cb`
            ,{
                name:'cb'
            },
            (err,data)=>{
                this.setState({sList:data.s}) ;
            }
             
        ) 
    }
    
    render(){
        return (
            <div>
                <List renderHeader={()=>'模仿百度搜索框'}>
                    <InputItem
                        clear
                        placeholder='请输入搜索项'
                        onChange={this.handleChange}
                        ref='sKey'
                    >
                        关键字
                    </InputItem>
                    {
                        this.state.sList.map((o,i)=>{
                            return (
                                <Item key={i} onClick={()=>{alert("暂时还没做点击跳转过去")}}>{o}</Item>
                            ) ;
                        })
                    }
                </List>

            </div>
        ) ;
    }
}
//const BaiduSearch = createForm()(_BaiduSearch) ;
export default BaiduSearch ;