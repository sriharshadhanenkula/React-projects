import './index.css'
import {Component} from 'react'
import ThumbnailsList from '../ThumbnailsList/index'

class Gallery extends Component {
  state = {selectedId: 0}

  updateGallery = id => {
    this.setState({selectedId: id})
  }

  render() {
    const {photosData} = this.props
    const {selectedId} = this.state
    console.log(selectedId)
    const myItem = photosData[selectedId]
    // console.log(myItem)
    const {imageUrl, imageAltText} = myItem

    return (
      <div className="main-container">
        <div>
          <img className="main-image" src={imageUrl} alt={imageAltText} />
          <ThumbnailsList
            photosData={photosData}
            selectedId={selectedId}
            updateGallery={this.updateGallery}
          />
        </div>
      </div>
    )
  }
}

export default Gallery
