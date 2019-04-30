// import something from './test-image-output';

const something = require('./test-image-output');

var imageString = something.toString();
var Client = require('instagram-private-api').V1;
var device = new Client.Device('muppet_express');
var storage = new Client.CookieFileStorage(__dirname + '/cookies/muppet_express.json');
var session = new Client.Session(device, storage)

console.log(imageString);

// session.getAccount()
// 	.then(function(account){
// 		console.log(account.params);
// 	})
// Session.create(device:Device, storage:CookieStorage, username: 'muppet_express', 'Keyb0ardS0cks!')
//
// And go for login
 Client.Session.create(device, storage, 'muppet_express', 'Keyb0ardS0cks!')
	.then(function(session) {
   		// Now you have a session, we can follow / unfollow, anything...
		// And we want to follow Instagram official profile
		return [session, Client.Account.searchForUser(session, 'instagram')]
	})
	.spread(function(session, account) {
		return Client.Relationship.create(session, account.id);
	})
	.then(function(relationship) {
		console.log(relationship.params)
		// {followedBy: ... , following: ... }
		// Yey, you just followed @instagram
	})


	// JPEG is the only supported format now, pull request for any other format welcomed!
	Client.Upload.photo(session, something)
		.then(function(upload) {
			// upload instanceof Client.Upload
			// nothing more than just keeping upload id
			console.log(upload.params.uploadId);
			return Client.Media.configurePhoto(session, upload.params.uploadId, 'hello where is my dog');
		})
		.then(function(medium) {
			// we configure medium, it is now visible with caption
			console.log(medium.params)
		})
		// .catch(function(err){
		// 	console.log('no');
		// })
