import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
