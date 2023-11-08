class LiveScan{

    liveScan_tab = 'div:contains("Live Scan")'
    userAgent_dropdown = '.bulk-scan-settings>div:nth-child(2)>div:nth-child(2) .dropdown>button'
    chrome_Options = 'div:contains("Chrome")'
    links_textBox = 'textarea[id="bulkScan.scanUrls"]'
    scan_Button ='button[id="bulk-scan-submit-button"]'
    clearAll_Button = 'div[id="bulk-scan-clear-all-button"]'
    outputTileComponent = '.tiles-container>div'
    ipAddress = '.ip-and-status .d-flex>p'
    sourceUrl = '.card-value.long-text-ellipsis-1'



    setFilters(){
        cy.get(this.liveScan_tab).click()
        cy.get(this.userAgent_dropdown).click()
        cy.get(this.chrome_Options).find('a').eq('2').click()
    }

    enterLinks(...linkurl){ 
        for(let i of linkurl){
            cy.get(this.links_textBox).type(linkurl+{enter})
        }
        if(0 < linkurl.length || linkurl.length <=10){
            cy.get(this.scan_Button).click()
        }else{
            cy.get(this.scan_Button).should('be.disabled')
        } 
    }

    validateOutput(linkType,...linkurl){
        if(0 < linkurl.length || linkurl.length <=10){
            if(linkType== 'valid'){
                for(let i of linkurl){
                    //verify content on output tile
                    cy.get(this.outputTileComponent).eq(i).should('contain',['Source URL','IP Address','Hosting Provider','Disposition','Brand','Category'])
                    cy.get(this.ipAddress).invoke('text').as('ipAddress')
                    cy.get('@ipAddress').then((ip)=>{
                        console.log(ip)
                    })
                    cy.get(this.sourceUrl).should('contain',linkurl)

                }
            }else{
                cy.get(this.ipAddress).should('contain','--')
            }
        }
        

    }
}
module.exports = new LiveScan