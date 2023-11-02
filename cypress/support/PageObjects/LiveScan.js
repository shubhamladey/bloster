class LiveScan{

    liveScan_tab = 'div:contains("Live Scan")'
    userAgent_dropdown = '.bulk-scan-settings>div:nth-child(2)>div:nth-child(2) .dropdown>button'
    chrome_Options = 'div:contains("Chrome")'
    links_textBox = 'textarea[id="bulkScan.scanUrls"]'
    scan_Button ='button[id="bulk-scan-submit-button"]'
    clearAll_Button = 'div[id="bulk-scan-clear-all-button"]'



    scanLink(linkurl){
        cy.get(this.liveScan_tab).click()
        cy.get(this.userAgent_dropdown).click()
        cy.get(this.chrome_Options).find('a').eq('2').click()
        cy.get(this.links_textBox).type(linkurl)
        cy.get(this.scan_Button).click()

    }
}