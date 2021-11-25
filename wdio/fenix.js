describe('Test', () => {
    it('Shoptet journey', async () => {
        await browser.url(`https://fenix.myshoptet.com/`);

        await $('.add-to-cart-button').click();
        //await browser.debug()

        const elem = await $('#continue-order-button');
        await elem.waitForExist({timeoutMsg: 'Not available.'});
        // await elem.click();
        // const elem2 = await $('#continue-order-button');
        // await elem2.waitForExist({timeoutMsg: 'Not available.'});
        // await elem.click();
        await browser.url(`https://fenix.myshoptet.com/kosik`);
        await $('#continue-order-button').click();
    });
});

