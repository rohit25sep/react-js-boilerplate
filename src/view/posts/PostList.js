import { Grid } from "@mui/material"
import React from "react"

import { PostCardView } from "view/posts/PostCardView"

export const PostList = props => {
  const { posts, onDeletePost, onUpdatePost } = props

  return (
    <>
      <Grid container>
        {posts.map(post => (
          <PostCardView
            data-test-id={post.title}
            key={post.id}
            post={post}
            onDeleteClick={onDeletePost}
            onUpdateClick={onUpdatePost}
          />
        ))}
      </Grid>
    </>
  )
}
