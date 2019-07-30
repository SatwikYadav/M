import React from 'react';
import {Mainbar} from './mainbar'
import {Sidebar} from './sidebar'

export class Homepage extends React.Component{
    render(){
        return(
            <div className='homepage'>
                <Mainbar></Mainbar>
                <Sidebar></Sidebar>
            </div>
        )
    }
}
