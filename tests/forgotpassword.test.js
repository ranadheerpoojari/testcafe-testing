import {Selector} from 'testcafe'

fixture `Forgot Password`
			.page('http://zero.webappsecurity.com/index.html')

test.skip('Retrieve the password',async t => {

	const signin_button = Selector('#signin_button')
	const verify_text = Selector('.page-header').innerText
	const linkToPassword= Selector('a').withText('Forgot your password ?')
	const email_input = Selector('#user_email')
	const message = Selector('div').innerText


	await t.click(signin_button)
	await t.expect(verify_text).eql('Log in to ZeroBank')
	await t.click(linkToPassword)
	await t.expect(verify_text).eql('Forgotten Password')
	await t.typeText(email_input, 'qwert@gmail.com')
	await t.pressKey('enter')
	await t.expect(message).contains('qwert@gmail.com')
	await t.expect(email_input.exists).notOk()
	
})