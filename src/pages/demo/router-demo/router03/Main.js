import React from 'react'
import { Link } from "react-router-dom"

export default class Main extends React.Component {
    render() {
        return (
            <div>
                main page
                <br />
                <Link to="/main/text-id">嵌套路由1</Link>
                <Link to="/main/456">嵌套路由2</Link>
                <hr />
                {this.props.children}
            </div>
        )
    }
}