import {Component} from 'react'
import HistoryItem from './components/HistoryItem'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {userInput: '', historyList: initialHistoryList}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  searchForUserInput = () => {
    const {userInput, historyList} = this.state

    const searchResult = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(userInput.toLowerCase()),
    )
    return searchResult
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: filteredList})
  }

  render() {
    const searchedResults = this.searchForUserInput()
    return (
      <div className="history-container-main-container">
        <div className="history-container-search-container">
          <div className="search-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search-container2">
            <div className="search-container2-search-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>

            <input
              className="search-container2-search-bar"
              placeholder="Search history"
              type="search"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="list-main-container">
          {searchedResults.length > 0 ? (
            <ul className="list-container">
              {searchedResults.map(eachItem => (
                <HistoryItem
                  historyItem={eachItem}
                  key={eachItem.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          ) : (
            <div className="error-container">
              <p className="error-text">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
