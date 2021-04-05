const template = document.createElement('template');
template.innerHTML = `
<style>
@import "css/mini-default.min.css";
ul {
    list-style-type: none;
}
</style>
<div class="market-list">
<ul><slot name="list" />

<ul>
</div>`;
class MarketList extends HTMLElement
{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        
    }
}
window.customElements.define('market-list', MarketList);