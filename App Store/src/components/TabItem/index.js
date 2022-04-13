// Write your code here
import './index.css'

const TabItem = props => {
  const {myTab, displayTabItems, isActive} = props
  const {tabId, displayText} = myTab

  const tabItemClicked = () => {
    displayTabItems(tabId)
  }

  const checkStyle = isActive ? 'update-Tab-name' : 'Tab-name'

  return (
    <li className="tab-item" onClick={tabItemClicked}>
      <button type="button" className={checkStyle}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
