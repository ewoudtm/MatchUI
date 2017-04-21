import { CALL_API, PATCH } from '../../middleware/api'

export default (userId, student) => {
  return {
    [CALL_API]: {
      service: 'users',
      method: PATCH,
      type: 'USER_UPDATED',
      authenticate: true,
      params: {student: student},
      id: userId,
    }
  }
}
