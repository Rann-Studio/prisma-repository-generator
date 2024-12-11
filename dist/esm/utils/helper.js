export const upperCaseFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const lowerCaseFirst = (str) => str.charAt(0).toLocaleLowerCase() + str.slice(1);
export const prismaTypeToTs = (type) => {
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
