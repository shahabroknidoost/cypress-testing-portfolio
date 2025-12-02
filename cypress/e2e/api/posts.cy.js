// cypress/e2e/api/posts.cy.js

describe('JSONPlaceholder API Tests', () => {
  
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  describe('GET Requests', () => {
    
    it('should fetch all posts', () => {
      cy.request('GET', `${baseUrl}/posts`).then((response) => {
        // Check status code
        expect(response.status).to.eq(200);
        // Check we got 100 posts
        expect(response.body).to.have.length(100);
        // Check post structure
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('title');
        expect(response.body[0]).to.have.property('body');
        expect(response.body[0]).to.have.property('userId');
      });
    });

    it('should fetch single post by ID', () => {
      cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
        expect(response.body.title).to.exist;
      });
    });

    it('should return 404 for non-existent post', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/posts/9999`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });

  describe('POST Requests', () => {
    
    it('should create a new post', () => {
      cy.request('POST', `${baseUrl}/posts`, {
        title: 'My Test Post',
        body: 'This is test content',
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('My Test Post');
        expect(response.body.id).to.exist;
      });
    });
  });

  describe('PUT Requests', () => {
    
    it('should update a post', () => {
      cy.request('PUT', `${baseUrl}/posts/1`, {
        id: 1,
        title: 'Updated Title',
        body: 'Updated content',
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('Updated Title');
      });
    });
  });

  describe('DELETE Requests', () => {
    
    it('should delete a post', () => {
      cy.request('DELETE', `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});