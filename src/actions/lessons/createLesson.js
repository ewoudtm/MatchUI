import { CALL_API, CREATE } from '../../middleware/api'

export default (lesson) => {
  console.log(lesson)
  return {
    [CALL_API]: {
      service: 'lessons',
      method: CREATE,
      type: 'LESSON_CREATED',
      authenticate: true,
      params: {
        title: lesson.title,
        date: lesson.date,
       }
    }
  }
}
