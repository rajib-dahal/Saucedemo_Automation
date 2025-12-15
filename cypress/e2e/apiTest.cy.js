import apiTest from '../pages/apiData'
import { CreateUser } from '../support/utils/utils'

describe('GoRest API Testing using Cypress', () => {

  let userId
  let userData

  beforeEach(() => {
    apiTest.baseUrl = Cypress.env('API_URL')
  })

  before(() => {
    const userUtil = new CreateUser()
    userData = userUtil.generateUser()
  })

  it('Create user', () => {
    apiTest.createUser(userData).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.email).to.eq(userData.email)
      userId = res.body.id
    })
  })

  it('Get users list', () => {
    apiTest.getUsers().then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an('array')
    })
  })

  it('Update user', () => {
    apiTest.updateUser(userId, {
      name: 'Updated Automation User'
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.name).to.eq('Updated Automation User')
    })
  })

  it('Delete user', () => {
    apiTest.deleteUser(userId).then((res) => {
      expect(res.status).to.eq(204)
    })
  })

})