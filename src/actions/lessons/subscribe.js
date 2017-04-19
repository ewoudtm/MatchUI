// src/actions/lessons/subscribe.js
import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_LESSONS_SERVICE = 'SUBSCRIBED_TO_LESSONS_SERVICE'
export const LESSON_CREATED = 'LESSON_CREATED'
export const LESSON_UPDATED = 'LESSON_UPDATED'
export const LESSON_REMOVED = 'LESSON_REMOVED'

const api = new API()
const lessons = api.service('lessons')

export default () => {
  return (dispatch) => {
    lessons.on('created', (lesson) => { dispatch(createdLesson(lesson)) })
    lessons.on('updated', (lesson) => { dispatch(updatedLesson(lesson)) })
    lessons.on('patched', (lesson) => { dispatch(updatedLesson(lesson)) })
    lessons.on('removed', (lesson) => { dispatch(removedLesson(lesson)) })

    dispatch({
      [CALL_API]: {
        service: 'lessons',
        method: FIND,
        type: SUBSCRIBED_TO_LESSONS_SERVICE,
        authenticate: true,
        params: {
          query: {
            $sort: { createdAt: -1},
            $limit: 25,
          },
        },
      }
    })
  }
}

const createdLesson = (lesson) => {
  return {
    type: LESSON_CREATED,
    payload: lesson
  }
}

const updatedLesson = (lesson) => {
  return {
    type: LESSON_UPDATED,
    payload: lesson
  }
}

const removedLesson = (lesson) => {
  return {
    type: LESSON_REMOVED,
    payload: lesson
  }
}
