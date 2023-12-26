import {Component} from 'react'
import UserProfile from './components/UserProfile'

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg',
    name: 'sravan kumar',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201601/prabhas-story_647_012016105845_0.jpg?VersionId=eBrazZZwkS4v9jviK7hLv_7FWvh8ro3X',
    name: 'sai charan',
    role: 'Senior Associate',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://telugu.samayam.com/thumb/73488281/senior-hero-suman-reveals-his-love-secrets-in-alitho-saradaga-latest-promo-73488281.jpg?imgsize=20711&width=1200&height=900&resizemode=75',
    name: 'kumar',
    role: 'Business',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://static.toiimg.com/thumb/63783688.cms?width=400&height=300&resizemode=4',
    name: 'kiran',
    role: 'Intermediate',
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2016/11/arijit-singh-1480416018.jpg',
    name: 'sai kumar',
    role: 'Graduate',
  },

  {
    uniqueNo: 6,
    imageUrl:
      'https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/09/Tirumala-Tirupati-Balaji-Temple-Timings.jpg',
    name: 'chinni',
    role: 'Gate',
  },
]
class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: intialUserDetailsList,
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredDataList = userDetailsList.filter(
      eachItem => eachItem.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredDataList})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)

    const SearchResults = userDetailsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="list-container">
        <h1 className="main-heading">User List</h1>
        <input
          onChange={this.onChangeInput}
          className="input-search"
          type="text"
          value={searchInput}
        />
        <ul>
          {SearchResults.map(eachItem => (
            <UserProfile
              deleteUser={this.deleteUser}
              userDetails={eachItem}
              key={eachItem.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
