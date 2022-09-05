export class HaloElement extends HTMLElement { constructor() { super() } };

export class HaloRouterElement extends HaloElement {
	static observedAttributes = ['route'];
	#slot = document.createElement('slot');

	constructor() {
		super();
		this.#slot.name = this.route ?? '';
		this.attachShadow({ mode: 'closed' }).appendChild(this.#slot);
	}

	get route( ) { return this.getAttribute('route'   ) }
	set route(_) { return this.setAttribute('route', _) }

	getRoute( ) { return this.route }
	setRoute(_) { this.route = _ }

	attributeChangedCallback(name, oldV, newV) {
		switch(name) {
			case 'route':
				this.#slot.name = newV;
				break;
			default:
				break;
		}
	}
}

customElements.define('halo-router', HaloRouterElement);
