import {Selector, t} from 'testcafe'

class NavBar {
	constructor() {
		this.search_box=Selector('#searchTerm')
		this.signIn_button= Selector('#signin_button')
	}

	async search(text){
		await t.typeText(this.search_box,text, {paste:true, replace:true})
			.pressKey('enter')
	}
}

export default NavBar