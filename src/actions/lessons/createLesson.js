import { CALL_API, CREATE } from '../../middleware/api'

export default (lesson) => {
  console.log(lesson)
  return {
    [CALL_API]: {
      service: 'lessons',
      method: CREATE,
      type: 'LESSONS_CREATED',
      authenticate: true,
      params: {
        title: lesson.title,
        date: lesson.date,
       }
    }
  }
}
