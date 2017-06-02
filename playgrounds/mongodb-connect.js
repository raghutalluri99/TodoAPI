const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
	if(err){
		return console.log('unable to connect to db');
	}
	console.log('connected to the db');

	// db.collection('Todos').insertOne({
	// 	text : 'something to do',
	// 	completed : false
	// }, (err, res) => {
	// 	if(err){
	// 		return console.log('unable to insert data', err);
	// 	}
	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// db.collection('Todos').insertOne({
	// 	user: 'D rose',
	// 	age: '28',
	// 	location: 'chicago'
	// }, (err, res) => {
	// 	if(err){
	// 		return console.log('unable to insert user', err);
	// 	}
	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	db.collection('Todos').find({
		age: '28'
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('unable to fetch Todos', err);
	});

	db.close();
});