const supertest = require('supertest');
const app = require('../../app');
let users = require('../db/index')
const url = '/users'

jest.mock('../db/index',()=>({
    getUsersArray: jest.fn().mockReturnValue([{
        username: "kichu",
        age: 26,
        hobbies: [
            "cricket",
            "football"
        ],
        id: "46492721-1eb0-41a7-b15d-09d77cbca30d"
    }])
}))


describe('users', ()=>{
    let request;
    beforeAll(()=>{
        request = supertest(app);
        // usersArray = users;
    })

    beforeEach(()=>{
        users = []
    })

    test('should throw an error when request body is not proper',async ()=>{
        const body = {
            username : 'abc',
            hobbies: ['a','b','c']
        }

        const response = await request.post(url).send(body)
        expect(response.status).toBe(400)
    })

    test('should respond with success',async ()=>{
        const body = {
            username : 'abc',
            age:1,
            hobbies: ['a','b','c']
        }

        const response = await request.post(url).send(body)
        expect(response.status).toBe(200)
    })   
    
    test('should get all users',async ()=>{
        const response = await request.get(url)
        expect(response.status).toBe(200);
    })

    test('should get single user',async ()=>{
        const userId = "46492721-1eb0-41a7-b15d-09d77cbca30d"
        const response = await request.get(`${url}/${userId}`)
        expect(response.status).toBe(200);
    })

    test('should edit user',async ()=>{
        const body ={
            username: "kichu",
            age: 26,
            hobbies: [
                "cricket"
            ],
        }
        const userId = "46492721-1eb0-41a7-b15d-09d77cbca30d"
        const response = await request.put(`${url}/${userId}`).send(body);
        expect(response.status).toBe(200);
    })
    
    test('should delete user',async ()=>{
        const userId = "46492721-1eb0-41a7-b15d-09d77cbca30d"
        const response = await request.delete(`${url}/${userId}`);
        expect(response.status).toBe(200);
    })
})