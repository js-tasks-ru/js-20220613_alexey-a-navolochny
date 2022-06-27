/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
	const new_array = path.split('.');
	
	return obj => {
		let result = obj;
		
		for(const val of new_array){
			if(result === undefined) { 
				break;
			}
			result = result[val];
		}
		return result;
	}
}
