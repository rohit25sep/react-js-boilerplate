import { useCallback } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { postsActions, selectPosts } from "store/slices/posts"

export const usePostService = () => {
  const dispatch = useAppDispatch()

  return {
    posts: useAppSelector(selectPosts),

    createPost: useCallback(
      post => {
        dispatch(postsActions.create({ title: post.title, body: post.body }))
      },
      [dispatch]
    ),

    fetchAllPosts: useCallback(() => {
      dispatch(postsActions.fetchAll())
    }, [dispatch]),

    deletePost: useCallback(
      post => {
        dispatch(postsActions.delete(post))
      },
      [dispatch]
    ),

    updatePost: useCallback(
      post => {
        dispatch(
          postsActions.update({
            ...post,
            body: `Updated at ${new Date().toISOString()}`
          })
        )
      },
      [dispatch]
    )
  }
}

export default usePostService
