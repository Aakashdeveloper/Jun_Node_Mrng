let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my get APi', () => {
  it('should be retrun status 200 for /',(done) => {
      chai
        .request('http://localhost:8776')
        .get('/')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err;
        })
  });

  it('should be retrun status 200 for /',(done) => {
    chai
      .request('http://localhost:8776')
      .put('/updateUser')
      .then((res) => {
          expect(res).to.have.status(200);
          done();
      })
      .catch((err) => {
          throw err;
      })
})
})
