import {Selector, t} from 'testcafe'

class ForgotPasswordPage{
	constructor() {
		this.linkToPassword= Selector('a').withText('Forgot your password ?')
		this.email_input = Selector('#user_email')
		this.message = Selector('div').innerText
	}
}
export default ForgotPasswordPage