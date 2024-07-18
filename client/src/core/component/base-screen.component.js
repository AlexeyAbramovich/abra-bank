import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Create a new BaseScreen instance
	 * @param {Object} options - The options for the base screen
	 * @param {string} options.title - The options for the base screen
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}
	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
