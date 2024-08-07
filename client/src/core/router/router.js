import { Layout } from '@/components/layout/layout.component'
import { NotFound } from '@/components/screens/not-found/not-found.component'

import { $R } from '../rquery/rquery.lib'

import { ROUTES } from './routes.data'

export class Router {
	#routes = ROUTES
	#currentRoute = null
	#layout = null

	constructor() {
		window.addEventListener('popstate', () => {
			this.#handleChangeRoute()
		})

		this.#handleChangeRoute()
		this.#handleLinks()
	}

	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState({}, '', path)
			this.#handleChangeRoute()
		}
	}

	#handleLinks() {
		document.addEventListener('click', event => {
			const target = event.target.closest('a')
			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}

	getCurrentPath() {
		return window.location.pathname
	}

	#handleChangeRoute() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routes.find(route => route.path === path)
		if (!route) {
			route = {
				component: NotFound
			}
		}

		this.#currentRoute = route
		this.render()
	}

	render() {
		const component = new this.#currentRoute.component().render()

		if (!this.#layout) {
			this.#layout = new Layout({
				router: this,
				children: component
			}).render()

			$R('#app').html('').append(this.#layout)
		} else {
			$R('#content').html('').append(component)
		}
	}
}
