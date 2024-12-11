export const upperCaseFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const lowerCaseFirst = (str: string) => str.charAt(0).toLocaleLowerCase() + str.slice(1);

export const prismaTypeToTs = (type: string): string => {
	switch (type) {
		case 'Int':
			return 'number';
		case 'String':
			return 'string';
		case 'Boolean':
			return 'boolean';
		case 'DateTime':
			return 'Date';
		default:
			return 'unknown';
	}
};
