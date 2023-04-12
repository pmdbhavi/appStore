import './index.css'

const TabItem = props => {
  const {details, clickTab, isActive} = props
  const {tabId, displayText} = details
  const tabButton = isActive ? 'selectButton' : 'button'
  const clickTabs = () => {
    clickTab(tabId)
  }

  return (
    <li className="tab">
      <button type="button" className={tabButton} onClick={clickTabs}>
        <p className="para">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
