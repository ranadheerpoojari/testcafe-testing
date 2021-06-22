import {Selector} from 'testcafe'

fixture `Feedback form filling`
		.page('http://zero.webappsecurity.com/feedback.html')

test.skip('filling the form', async t =>{

	const username_input = Selector('#name')
	const email_input = Selector('#email')
	const subject_input = Selector('#subject')
	const comment_input = Selector('#comment')
	const submit_button = Selector('input').withAttribute('value','Send Message')
	const message = Selector('div').innerText

	await t.typeText(username_input, 'dhannu')
	await t.typeText(email_input, 'dhannu@gmail.com',{paste:true})
	await t.typeText(subject_input, 'Hi Ranadheer Poojari',{paste:true})
	await t.typeText(comment_input, 'Do u have any questions?', {paste:true})
	await t.click(submit_button)

	await t.expect(message).contains('dhannu')

})