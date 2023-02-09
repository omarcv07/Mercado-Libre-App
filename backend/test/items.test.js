const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('Testing Items Api Endpoints', () => {
    it('should return a list of items', async () => {
        const response = await request(app).get('/api/items').query({ q: 'iPhone' });
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.have.property('author');
        expect(response.body).to.have.property('categories');
        expect(response.body).to.have.property('items');
    });

    it('should return a single item with its description', async () => {
        const response = await request(app).get('/api/items/MLA1157690125');
        expect(response.statusCode).to.be.equal(200);
        expect(response.body).to.have.property('author');
        expect(response.body).to.have.property('item');
        expect(response.body).to.have.property('description');
    });
});
