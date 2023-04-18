import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {val: 1}

  leftBtnClick = () => {
    const {val} = this.state
    if (val > 1) {
      this.setState(prevState => ({val: prevState.val - 1}))
    }
  }

  rightBtnClick = () => {
    const {val} = this.state
    const {reviewsList} = this.props
    if (val < reviewsList.length) {
      this.setState(prevState => ({val: prevState.val + 1}))
    }
  }

  render() {
    const {val} = this.state
    const {reviewsList} = this.props
    const Obj = reviewsList[val - 1]
    const {imgUrl, username, companyName, description} = Obj
    return (
      <div className="mainContainer">
        <h1 className="mainHead">Reviews</h1>
        <img src={imgUrl} alt={username} className="imageAlter" />
        <div className="arrowsAndNamesContainer">
          <button
            onClick={this.leftBtnClick}
            type="button"
            className="arrowBtn"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="nameCSS">{username}</p>
          <button
            onClick={this.rightBtnClick}
            type="button"
            className="arrowBtn"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="companyName">{companyName}</p>
        <p className="reviewCSS">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
