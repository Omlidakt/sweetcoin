const templatec = document.createElement('template');
templatec.innerHTML = `
<style>
@import "css/mini-default.min.css";

.card {
    border-radius: 0.2rem;
}
.card:hover{
    opacity:25%;
    transition: 0.6s;
}
</style>
<div class="card">
    <div class="section">
        <slot name="coinName"></slot>
        <slot name="symbol"></slot>
    </div>
    <div class="section">
        <small>Current Price</small>
        <slot name="currentPrice"></slot>
    </div>
    <div class="section">
        <small>High</small>
        <slot name="high24H"></slot>
        <small>Low</small>
        <slot name="low24H"></slot>
    </div>
</div>`;
class CoinCard extends HTMLElement
{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templatec.content.cloneNode(true));
    }
}
window.customElements.define('coin-card', CoinCard);