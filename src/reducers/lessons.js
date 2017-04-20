import {
  SUBSCRIBED_TO_LESSONS_SERVICE,
  LESSON_CREATED,
  LESSON_UPDATED,
  LESSON_REMOVED
} from '../actions/lessons/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_LESSONS_SERVICE :
      return ([].concat(payload)).reverse()

    case LESSON_CREATED :
      const newLesson = Object.assign({}, payload)
      return state.concat([newLesson])

    case LESSON_UPDATED :
      return state.map((lesson) => {
        console.log(payload)
        if (lesson._id === payload._id) {
          return Object.assign({}, payload)
        }
        return lesson
      })

    case LESSON_REMOVED :
      return state.filter((lesson) => (lesson._id !== payload._id))

    default :
      return state
  }
}
