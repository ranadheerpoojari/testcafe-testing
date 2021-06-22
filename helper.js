import {t} from 'testcafe'
import xPathToCss from 'xpath-to-css'
import NavBar from './page-objects/components/NavBar'

const navBar= new NavBar()
export async function login(username, password) {

	const xpath_link = `//button[@id='signin_button']`
	const css_link = xPathToCss(xpath_link)
	console.log(css_link)
	await t.click(navBar.signIn_button)
	await t.typeText('#user_login',username, {paste: true})
	await t.typeText('#user_password',password,{paste: true})
	await t.click('.btn-primary')
}