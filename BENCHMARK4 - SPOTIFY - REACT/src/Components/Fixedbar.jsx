import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'

export default class Fixedbar extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Bottombar />
            </div>
        )
    }
}
