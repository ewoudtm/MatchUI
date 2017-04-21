import { CALL_API, PATCH } from '../../middleware/api'

export default (userId, admin) => {
  return {
    [CALL_API]: {
      service: 'users',
      method: PATCH,
      type: 'USER_UPDATED',
      authenticate: true,
      params: {admin: admin },
      id: userId,
    }
  }
}
