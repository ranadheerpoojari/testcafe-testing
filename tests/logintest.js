import { Selector } from 'testcafe'
import NavBar from '../page-objects/components/NavBar'
import LoginPage from '../page-objects/pages/loginPage'


const loginPage = new LoginPage()
const navBar = new NavBar()

fixture`Login Test`
	.page('http://zero.webappsecurity.com/index.html')

test('User cannot login with invalid credentials', async t => {
	//await login('username', 'pass')
	await t.click(navBar.signIn_button)
	await loginPage.login('username', 'Password')
	await t.expect(loginPage.error_message.innerText).eql('Login and/or password are wrong.')
})

test.skip.timeouts({ pageLoadTimeout: 5000 })(
	'User login with valid credentials',
	async t => {
		await t.click(navBar.signIn_button)
		await loginPage.login('username', 'password')
		const accounts_tab = Selector('#account_summary_tab')
		await t.expect(accounts_tab.exists).ok()
		await t.expect(loginForm.exists).notOk()

		const user_icon = Selector('.icon-user')
		await t.click(user_icon)

		const loginoutButton = Selector('#logout_link')
		await t.click(loginoutButton)

		await t.expect(loginoutButton.exists).notOk()
		await t.expect(signin_button.exists).ok()
	},
)
