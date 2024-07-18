const SITE_NAME = 'ABRA Bank'

export const getTitle = title => {
	return title ? `${title} ${SITE_NAME}` : SITE_NAME
}
