// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked, date, initialClassName} = commentDetails
  const postedTime = formatDistanceToNow(date)

  const initial = name.slice(0, 1)
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const onClickLikeButton = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="comment-Container">
      <div className="comment-card">
        <p className={initialClassName}>{initial}</p>
        <h1 className="name">{name}</h1>
        <p className="time">{postedTime}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="icons-Container">
        <button
          type="button"
          className="like-button"
          onClick={onClickLikeButton}
        >
          <img src={likeImgUrl} alt="like" className="like-icon" />
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
