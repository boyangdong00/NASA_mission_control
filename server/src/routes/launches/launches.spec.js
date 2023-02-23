const app = require('../../app');
const request = require('supertest');

describe('Test Get /launches', () => {
    test('it should respond with 200 sucess', async () =>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type',/json/)
        .expect(200);
    });
});

describe('Test POST /launch', () => {
    const payload = {
        mission: 'alien',
        rocket: 'NCC 1701',
        target: 'Kepler-186 f',
        launchDate: 'January 4, 2028'
    }
    const payloadWithoutDate = {
        mission: 'alien',
        rocket: 'NCC 1701',
        target: 'Kepler-186 f'
    }
    const payloadWrongDate = {
        mission: 'alien',
        rocket: 'NCC 1701',
        target: 'Kepler-186 f',
        launchDate: 'hell'
    }
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .post('/launches')
            .send(payload)
            .expect('Content-Type',/json/)
            .expect(201)

        const requestDate = new Date(payload.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);
        expect(response.body).toMatchObject(payloadWithoutDate)
    });

    test('It should catch missing required properties', async () =>  {
        const response = await request(app)
        .post('/launches')
        .send(payloadWithoutDate)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: 'missing required launch properties'
        })
    });
    test('It should catch invalid dates', async () => {
        const response = await request(app)
        .post('/launches')
        .send(payloadWrongDate)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: 'invalid date'
        })
    });
});