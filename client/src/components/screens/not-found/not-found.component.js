import { BaseScreen } from '../../../core/component/base-screen.component'

export class NotFound extends BaseScreen {
	constructor() {
		super({ title: 'Not Found |' })
	}
	/**
	 * Render the child component content
	 * @returns {HTMLElement}
	 */
	render() {
		return '<p>NotFound</p>'
	}
}
