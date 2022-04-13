import './index.css'
import {Component} from 'react'

class ThumbnailsList extends Component {
  thumbnail = () => {
    const {photosData, updateGallery, selectedId} = this.props

    return photosData.map(eachItem => {
      const {id, thumbnailUrl, thumbnailAltText} = eachItem
      const onClickThumbnail = () => {
        updateGallery(id)
      }

      const onSelected = () =>
        id === selectedId ? 'list-item selected-item' : 'list-item'

      return (
        <li className={onSelected()} key={id} onClick={onClickThumbnail}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="card">
        <h1 className="main-heading">Nature Photography</h1>
        <p className="paragraph">Nature Photography by Rahul</p>
        <ul className="list-container">{this.thumbnail()}</ul>
      </div>
    )
  }
}

export default ThumbnailsList
