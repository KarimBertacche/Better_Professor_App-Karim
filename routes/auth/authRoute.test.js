const request = require('supertest');
const server = require('../../API/server');

describe('Auth Routes', () => {
    describe('Testing register endpoint' () => {
        it('validate body of the request', () => {
            return request(server).post('/api/auth/register')
                .expect(400)
                .expect({ 
                    message: 'Missing credentials to proceed with registration'
                });
        });

        it('validate email of the request', () => {
            return request(server).post('api/auth/register')
                .send({ email: 'karim', password: 'badPassword'})
                .expect(400)
                .expect({
                    message: 'Invalid email format'
                });
        });

        it('validate if user first & last name are present', () => {
            return request(server).post('api/auth/register')
                .send({ email: 'karim@live.com', password: 'badPassword'})
                .expect(400)
                .expect({
                    message: 'Oops! Invalid credetials, try again'
                });
        });

        it('validate if endpoint works correctly with right credentials', () => {
            return request(server).post('api/auth/register')
                .send({
                    firstName: 'Karim',
                    lastName: 'Bertacche',
                    email: 'karim@live.com',
                    password: 'badPassword',
                    role: 'reviewer'
                })
                .expect(201);
        });
    });

    describe('Testing login endpoint', () => {
        it('validate body of the request', () => {
            return request(server).post('/api/auth/login')
                .expect(400)
                .expect({ 
                    message: 'Missing credentials to proceed with registration'
                });
        });

        it('validate email of the request', () => {
            return request(server).post('api/auth/login')
                .send({ email: 'karim', password: 'badPassword'})
                .expect(400)
                .expect({
                    message: 'Invalid email format'
                });
        });

        it('validate if user first & last name are present', () => {
            return request(server).post('api/auth/login')
                .send({ email: 'karim@live.com', password: 'badPassword'})
                .expect(400)
                .expect({
                    message: 'Oops! Invalid credetials, try again'
                });
        });

        it('validate if endpoint works correctly with right credentials', () => {
            return request(server).post('api/auth/login')
                .send({
                    email: 'karim@live.com',
                    password: 'badPassword'
                })
                .expect(200);
        });
    });
});