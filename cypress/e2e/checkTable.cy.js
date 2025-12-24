import TableUtils from '../support/utils/tableUtils.js'
const tableUtil =new TableUtils()

beforeEach(() => {
  cy.visit('https://practice.expandtesting.com/tables')
})

const expectedTableData = [
    ['Smith', 'John', 'jsmith@gmail.com', '$50.00', 'http://www.jsmith.com'],
    ['Bach', 'Frank', 'fbach@yahoo.com', '$51.00', 'http://www.frank.com'],
    ['Doe', 'Jason', 'jdoe@hotmail.com', '$100.00', 'http://www.jdoe.com'],
    ['Conway', 'Tim', 'tconway@earthlink.net', '$50.00', 'http://www.timconway.com']
]


describe('TABLE TEST', () => {
  it('TC-TABLE-001: To assert table value', () => {
//     tableUtil.chechTableVisible('#table2')
    
    
//     tableUtil.assertTableHeaders('#table2 .header', [ 'Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action'])

//     tableUtil.assertTableValues('#table2', expectedTableData)

//     tableUtil.assertTableActions({
//     tableSelector: '#table2',
//     columnSelector: 'td.action',
//     buttonText: ['Edit', 'Delete']
// })

const headers = ['Last Name','First Name','Email','Due','Web Site','Action']

const data = [
  ['Smith','John','jsmith@gmail.com','$50.00','http://www.jsmith.com'],
  ['Bach','Frank','fbach@yahoo.com','$51.00','http://www.frank.com'],
  ['Doe','Jason','jdoe@hotmail.com','$100.00','http://www.jdoe.com'],
  ['Conway','Tim','tconway@earthlink.net','$50.00','http://www.timconway.com']
]

tableUtil.assertFullTable({
    tableSelector: '#table2',
    expectedHeaders: headers,
    expectedData: data,
    actionColumnSelector: 'td.action',
    actionButtonText: ['Edit','Delete'],
    actionButtonSelector: ['.btn-primary','.btn-danger']
})




  })
})
