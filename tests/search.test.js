import { Selector } from 'testcafe'
import NavBar from '../page-objects/components/NavBar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'


const navBar = new NavBar()
const searchResultsPage = new SearchResultsPage()
fixture`Search online banking`
	.page('http://zero.webappsecurity.com/index.html')

test('Search t', async t => {
//	const search_box = Selector('#searchTerm')
	/*const results = Selector('h2').innerText
	const link = Selector('div').innerText
	const online_banking_tab = Selector('#onlineBankingMenu')*/

	/*await t.typeText(navBar.search_box, 'online bank', {paste:true})
	await t.pressKey('enter')*/
	await navBar.search('online bank')


	await t.expect(searchResultsPage.resultsTitle.exists).ok()
	await t.expect(navBar.search_box.exists).ok()
	await t.expect(searchResultsPage.linkText.innerText).contains('Zero - Free Access to Online Banking')




})