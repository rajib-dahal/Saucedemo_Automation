class ApiTest {

  headers() {
    return {
      Authorization: `Bearer ${Cypress.env('token')}`,
      'Content-Type': 'application/json'
    }
  }


  createUser(userData) {
    return cy.request({
      method: 'POST',
      url: this.baseUrl,
      headers: this.headers(),
      body: userData
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('email', userData.email)
      expect(res.body).to.have.property('name', userData.name)
      expect(res.body).to.have.property('gender', userData.gender)
      expect(res.body).to.have.property('status', userData.status)
      return res
    })
  }

  getUsers() {
    return cy.request({
      method: 'GET',
      url: this.baseUrl,
      headers: this.headers()
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an('array').and.not.be.empty
      const firstUser = res.body[0]
      expect(firstUser).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
      return res
    })
  }

  updateUser(userId, updatedData) {
    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/${userId}`,
      headers: this.headers(),
      body: updatedData
    })
  }

  deleteUser(userId) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/${userId}`,
      headers: this.headers()
    })
  }
}

export default new ApiTest()
