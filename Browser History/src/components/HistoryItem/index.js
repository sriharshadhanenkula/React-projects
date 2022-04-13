import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item-container">
      <div className="list-item-text-container">
        <p className="time">{timeAccessed}</p>
        <img className="list-item-image" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <button
        testid="delete"
        className="my-button"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
