const express = require('express')
const nameRouter = express.Router()
const faker = require('faker')
const { generator } = require('./utils')
// baseurl = /api/name/


nameRouter.get('/firstname/:count?', (request, response) => {
    const firstNames = generator(request.params.count, faker.name.firstName)
   

    response.json({
        firstNames
    })
})


module.exports = {
    nameRouter
}


//http://localhost:3000/api/name/firstname/1

