import React from 'react'
import Comment from './Comment'


const CommetsList = ({comments}) => {
  return comments.map((comment,index)=>  (
  <div key={index}>
  <Comment  data={comment}/>
  <div className='ml-5 pl-5 border border-l-black  '>re
    <CommetsList comments={comment.replies}/>
  </div>
  </div>
  ))
  
}

export default CommetsList