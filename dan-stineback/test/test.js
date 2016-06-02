// 'use strict';
//
// const chai = require('chai');
// const chaiHTTP = require('chai-http');
// const user = require('../model/user');
// const basic = require('../lib/basic-http');
//
//
// const mongoose = require('mongoose');
// chai.use(chaiHTTP);
//
// const expect = chai.expect;
// const request = chai.request;
// const dbPort = process.env.MONGOLAB_URI;
//
// process.env.MONGOLAB_URI = 'mongodb://localhost/test_db';
// require('../server');
//
//
// describe(' test', () => {
//   after((done)=> {
//     process.env.MONGOLAB_URI = dbPort;
//     mongoose.connection.db.dropDatabase(()=>{
//       done();
//     });
//   });
//   it('should sign in', (done) => {
//     request('localhost:3000')
//       .get('/signin')
//       .end((err, res)=>{
//         expect(err).to.eql(null);
//         expect(req.auth).to.eql(0);
//         done();
//       });
//   });
//   it('should post a user', (done) => {
//     let vic = {name: 'vic', password: 'vic'};
//     request('localhost:3000')
//       .post('/signup')
//       .send(vic)
//       .end((err, res)=>{
//         expect(err).to.eql(null);
//         expect(res).to.have.status(200);
//         expect(req.body).to.not.eql(0);
//         done();
//       });
//   });
// });
//
//
// //   describe('test that need data', ()=> {
// //     let testCat;
// //     beforeEach((done)=> {
// //       let newCat = new Cat({name: 'test', size: 'large'});
// //       newCat.save((err, Cat)=> {
// //         testCat = Cat;
// //         done();
// //       });
// //     });
// //     it('should return a updated cats', (done) => {
// //       testCat.name = 'updated';
// //       request('localhost:3000')
// //         .put('/cats/')
// //         .send(testCat)
// //         .end((err,res)=>{
// //           expect(err).to.eql(null);
// //           expect(res).to.have.status(200);
// //           expect(res.body.message).to.eql('successfully updated');
// //           done();
// //         });
// //     });
// //     it('should delete a cat', (done)=>{
// //       request('localhost:3000')
// //       .delete('/cats/' + testCat._id)
// //       .end((err, res)=>{
// //         expect(err).to.eql(null);
// //         expect(res).to.have.status(200);
// //         expect(res.body.message).to.eql('successfully deleted');
// //         done();
// //       });
// //     });
// //   });
// // });
// //
