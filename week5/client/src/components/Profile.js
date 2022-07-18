import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"
import Comment from "./Comment"
import Issues from "./Issues"


export default function Profile(){
  const {user: {username}, addComment, comments } = useContext(UserContext)

  return (
    <div>
      <h1>Welcome @${username}!</h1>
      
      <h3>Add An Issue</h3>
      <Issues /> 
      <CommentForm addComment={addComment} /> 
      <h3>Your Comments</h3>
      <CommentList comments={comments} /> 
    </div>
  )
}

