// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {myApp} = this.props
    const {appName, imageUrl} = myApp
    return (
      <li className="app-item">
        <img className="app-image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
