import { Selector } from 'testcafe'

fixture ('Getting started with TestCafe')
    .page ('https://devexpress.github.io/testcafe/example/')
    .before(async t =>{
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t => {
        // Run before each test
        await t.setTestSpeed(1) //it will slowdown the execution and useful for debug range 0.1 - 1
        await t.setPageLoadTimeout(0)

    })
    .after(async t => {
        // cleaning test data
        // loggging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('My first testcafe test', async t =>{
    const developer_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    //await t.takeScreenshot({ fullPage: true })
    //await t.takeElementScreenshot(submit_button)
    await t.typeText(developer_name_input, 'John')
    await t.click(submit_button)
    await t.expect(articleText).contains('John')
    await t.doubleClick('selector')
    await t.rightClick('selector')
    await t.drag('selector',200,0, { options })
    await t.hover('selector')
    await t.selectText('selector')
    await t.openWindow('url')
    await t.pressKey('delete')
    await t.navigateTo('url')
    await t.resizeWindow(1078,760)
    await t.takeElementScreenshot('selector')
    await t.takeScreenshot()


    // Assertions
    await t.expect('foo').eql('foo') //Deep equal
    await t.expect('foo').notEql('foo') // not equal
    await t.expect(true).ok()  //OK
    await t.expect(true).notOk() //Not Ok
    await t.expect('Ranadheer').contains('a')
    await t.expect('selector').notContains('a')
    await t.expect(10).gt(5)
    await t.expect(10).gte(10)
    await t.expect(10).lt(100)
    await t.expect(10).lte(10)
    await t.expect(10).within(1,100)
    await t.expect(10).notWithin(1,100)


})