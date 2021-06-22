import {Selector,t} from 'testcafe'

class LoginPage{
	constructor() {
		this.usernameInput = Selector('#user_login')
		this.passwordInput= Selector('#user_password')
		this.submitButton = Selector('.btn-primary')
		this.error_message = Selector('.alert-error')

	}

	async login(username,password){
		await t.typeText(this.usernameInput,username)
		await t.typeText(this.passwordInput,password)
		await t.click(this.submitButton)
	}
}

export default LoginPage