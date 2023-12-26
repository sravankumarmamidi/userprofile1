import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDelete = () => {
    deleteUser(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button onClick={onDelete} type="button">
        <img
          alt="cross"
          className="delete-img"
          src="https://www.shutterstock.com/image-vector/x-letter-made-ink-mark-260nw-275374079.jpg"
        />
      </button>
    </li>
  )
}
export default UserProfile
