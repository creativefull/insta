const Nightmare = require('nightmare');
function x () {
	const nightmare = new Nightmare({
		show: true,
		webPreferences: {
			partition: 'nopersist',
		}
	});
	
	const username = 'muzaki_graphic';
	const password = 'userbaru';
	const search = '#uiux';
	const comment = 'nice photos';
	const posts = 20;
	let totalLiked = 0;
	
	this.byHastag = () => {
		nightmare
			.goto('https://www.instagram.com/accounts/login/')
			.wait('input[name=username]')
			.insert('input[name=username]', username)
			.insert('input[name=password]', password)
			.click('button') // btn login
			.wait('input[placeholder=Search]')
			.insert('input[placeholder=Search]', search)
			.wait('.yCE8d')
			.click('.yCE8d') // top suggest
			.wait('._bz0w')
			.click('._bz0w a') // click post
			.wait('.fr66n');
	
		let runLike = () => {
			for (let i = 0; i < posts; i++) {
				nightmare
					.wait(1000)
					.click('.fr66n') // like
					// .wait('._5f5mN')
					// .click('._5f5mN') // follow
					// .insert('.Ypffh', comment) // comment
					// .type('.Ypffh', '\u000d')
					.wait(100)
					.click('.HBoOv'); // next
			}
		}
	
		runLike()
	
		nightmare
			.wait(1000)
			.end()
			.then(function () {
				console.log('success');
			})
			.catch(function (err) {
				console.log(err);
			});
	}
	
	this.explore = () => {
		nightmare
			.goto('https://www.instagram.com/accounts/login/')
			.wait('input[name=username]')
			.insert('input[name=username]', username)
			.insert('input[name=password]', password)
			.click('button') // btn login
			.wait('.XrOey')
			.click(".XrOey a")
			.wait('._bz0w')
			.click('._bz0w a') // click post
			.wait('.fr66n');
	
		let runLike = () => {
			for (let i = 0; i < posts; i++) {
				nightmare
					.wait(1000)
					.click('.fr66n') // like
					// .wait('._5f5mN')
					// .click('._5f5mN') // follow
					// .insert('.Ypffh', comment) // comment
					// .type('.Ypffh', '\u000d')
					.wait(100)
					.click('.HBoOv'); // next
			}
		}
	
		runLike()
	
		nightmare
			.wait(1000)
			.end()
			.then(function () {
				console.log('success');
			})
			.catch(function (err) {
				console.log(err);
			});    
	}	
}

// explore()
module.exports = x