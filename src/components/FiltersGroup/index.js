import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import './index.css'

class FiltersGroup extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchImage = () => {
    const {SearchTriggered} = this.props
    const {searchInput} = this.state
    SearchTriggered(searchInput)
  }

  onClickCategoryButton = event => {
    const categoryId = event.currentTarget.value
    const {categorySelected} = this.props
    categorySelected(categoryId)
  }

  onClickRatingButton = event => {
    const ratingId = event.currentTarget.value
    const {ratingSelected} = this.props
    ratingSelected(ratingId)
  }

  onClickClearFilter = () => {
    const {clearFilterClicked} = this.props
    clearFilterClicked()
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      const {SearchTriggered} = this.props
      const {searchInput} = this.state
      SearchTriggered(searchInput)
    }
  }

  render() {
    const {searchInput} = this.state
    const {categoryOptions, ratingsList} = this.props
    return (
      <div className="filters-group-container">
        <div className="searchInput-container">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onEnterSearch}
            value={searchInput}
          />

          <BsSearch className="search-icon" onClick={this.onClickSearchImage} />
        </div>
        <ul className="category-rating-container">
          <h1 className="category-rating-heading">Category</h1>
          {categoryOptions.map(each => (
            <li key={each.categoryId}>
              <button
                type="button"
                className="category-text-btn"
                value={each.categoryId}
                onClick={this.onClickCategoryButton}
              >
                <p>{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
        <ul className="category-rating-container">
          <h1 className="category-rating-heading">Rating</h1>
          {ratingsList.map(each => (
            <li key={each.ratingId}>
              <button
                type="button"
                className="rating-text-btn"
                value={each.ratingId}
                onClick={this.onClickRatingButton}
              >
                <img
                  src={each.imageUrl}
                  alt={`rating ${each.ratingId}`}
                  className="rating-image"
                />
                <p className="rating-text">& up</p>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="clear-btn"
          onClick={this.onClickClearFilter}
        >
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
