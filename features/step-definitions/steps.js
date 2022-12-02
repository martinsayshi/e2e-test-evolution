const { Given, When, Then } = require('@wdio/cucumber-framework');

// Background 
Given(/^I'm on the home page$/, async () => {
    await browser.url(`https://www.newegg.com`);
});

// Search bar
When(/^I enter the word "Windows" in the search bar$/, async () => {
    await $('[title="Search Site"]').setValue("Windows");
});

When(/^I click the search button$/, async () => {
    const searchBtn = '.ico-search';
    try {
        await $(searchBtn).click();
    }
    catch(err) {
        const closeBtn = '.close';
        await $(closeBtn).click();
        await $(searchBtn).click();
    }
});

Then(/^I should see that at least one item appears$/, async () => {
    const result = 'div[class*="item-cell"]';
    await expect($(result)).toBeExisting();
});

// Logo Image to Main Page
When(/^I click on "Today's Best Deals" tab$/, async () => {
    const dealsBtn = '#trendingBanner_720202';
    try {
        await $(dealsBtn).click();
    }
    catch(err) {
        const closeBtn = '.close';
        await $(closeBtn).click();
        await $(dealsBtn).click();
    }
});

When(/^I click on the Internet shop logo$/, async () => {
    const logo = 'img[alt="Newegg"]';
    await $(logo).click();
});

Then(/^I should be taken to the main page$/, async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/'); 
});

