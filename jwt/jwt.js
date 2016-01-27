var readline = require('readline');

var jwt = require('jwt-simple');
/*var user = 'lmj';
var pass = '123456';
var account = {
	foo: user,
	foo1: pass
};*/
var secret = 'WSN_SOFTWARE';

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Please enter your userName?', function(user) {
	/*console.log('Oh, so your userName is: ' + user);*/
	rl.question('Please enter your pass?', function(pass) {
		/*console.log('Oh, so your pass is: ' + pass);*/
		var account = {
			foo: user,
			foo1: pass
		};
		// encode
		var token = jwt.encode(account, secret, 'HS512'); /*HS256, HS384, HS512 and RS256*/
		console.log('The token generated is:\n' + token);

		// decode
		var decoded = jwt.decode(token, secret);
		console.log(decoded);
		console.log(decoded.foo);
		console.log(decoded.foo1);
		rl.close();
	})
});