import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
// const initialCommentsList = [
//   {
//     id: uuidv4(),
//     name: 'harish',
//     comment:
//       'Initially the list of comments should be zero and the inputs fields should be empty',
//     isLiked: false,
//   },
// ]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="bg-Container">
        <h1 className="main-heading">Comments</h1>
        <div className="app-Container">
          <form className="from" onSubmit={this.onAddComment}>
            <p>Say something 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="name-input"
              value={nameInput}
              onChange={this.onChangeNameInput}
            />
            <textarea
              cols="30"
              rows="12"
              className="textarea"
              placeholder="Your Comment"
              value={commentInput}
              onChange={this.onChangeCommentInput}
            >
              Harish
            </textarea>

            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div className="image-Container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <p className="heading">
          <span className="comments-count">{commentsList.length}</span>
          Comments
        </p>
        <ul className="comments-Container">
          {commentsList.map(eachContact => (
            <CommentItem
              key={eachContact.id}
              commentDetails={eachContact}
              toggleIsLiked={this.toggleIsLiked}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
