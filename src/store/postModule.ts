import { createStore, Module } from 'vuex'
import { IPost } from '@/types'
import createID from '../utils/createID'

interface INewPost {
    title: string,
    text: string
}

export const postModule: Module<any, any> = {
    state: () => ({
        posts: new Array<IPost>()
    }),
    mutations: {
        addPost(state: any, newPost: INewPost) {
            state.posts.push({
                id: createID(),
                title: newPost.title,
                text: newPost.text
            })
        },
        editPost(state: any, editedPost: IPost) {
            const editablePost = state.posts.find((post: IPost) => post.id === post.id)
            if (editablePost) {
                editablePost.title = editedPost.title
                editablePost.text = editedPost.text
            }
        },
        deletePost(state: any, postID: string) {
            state.posts = state.posts.filter((post: IPost) => post.id !== postID)
        }
    },
    getters: {
        allPosts(state: any) {
            return state.posts
        },
        getPost: (state) => (id: string) => {
            return state.posts.find((post: IPost) => post.id === id)
        }
    },
    namespaced: true
}