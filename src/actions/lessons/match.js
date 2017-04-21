import { CALL_API, PATCH } from '../../middleware/api'

export default (lesson) => {
  console.log(lesson)
  return {
    [CALL_API]: {
      service: 'lessons',
      method: PATCH,
      type: 'LESSON_UPDATED',
      authenticate: true,
      params: {},
      id: lesson._id
    }
  }
}
