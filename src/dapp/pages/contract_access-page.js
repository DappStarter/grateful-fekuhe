import CustomElement from '../../lib/components/shared/custom-element';
import './components/page-panel.js';
import '../../lib/components/shared/action-card.js';
import './components/page-body.js';
import '../../lib/components/widgets/account-widget.js';

export default class ContractAccessPage extends CustomElement {

    constructor(...args) {
        super([], ...args);
    }

    render() {
        let self = this;

        let uiHtml = {
            [CustomElement.UI_READ]: '',
            [CustomElement.UI_WRITE]: '',
            [CustomElement.UI_ADMIN]: ''
        }




/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ACCESS CONTROL: CONTRACT ACCESS  <<<<<<<<<<<<<<<<<<<<<<<<<<<*/
        uiHtml[CustomElement.UI_ADMIN] += 
`
        <action-card 
            title="Is Contract Authorized" description="Check if a contract is authorized"
            action="isContractAuthorized" method="${CustomElement.METHOD_GET}" fields="account">

            <account-widget 
                field="account" label="Contract" placeholder="Contract address">
            </account-widget>

        </action-card>

        <action-card 
            title="Authorize Contract" description="Authorize a contract (functions must check using requireContractAuthorized()"
            action="authorizeContract" method="${CustomElement.METHOD_POST}" fields="account">

            <account-widget
                field="account" label="Contract" placeholder="Account address of contract to authorize">
            </account-widget>
        
        </action-card>

        <action-card 
            title="Deauthorize Contract" description="Deauthorize a contract"
            action="deauthorizeContract" method="${CustomElement.METHOD_POST}" fields="account">

                <account-widget
                    field="account" label="Account" placeholder="Account address of contract to deauthorize">
                </account-widget>
            
        </action-card>        
        <div class="col-12 m-5"></div>

`

        let content = 
`
        <page-body title="${self.title}" category="${self.category}" description="${self.description}">
            ${uiHtml[CustomElement.UI_READ]}
            ${uiHtml[CustomElement.UI_WRITE]}
            ${uiHtml[CustomElement.UI_ADMIN]}
        </page-body>
        <page-panel id="resultPanel"></page-panel>
`
        self.innerHTML = content;
    }
}

customElements.define('contract-access-page', ContractAccessPage);

