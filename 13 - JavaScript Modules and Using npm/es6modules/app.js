import { uniq } from 'lodash';
import insane  from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';

import User, { createURL, gravatar } from './src/user';

const fred = new User('Freddy Al', 'frederickaalcantara@gmail.com', 'wesbos.com');
const profile = createURL(fred.name);
const image = gravatar(fred.email);
console.log(image);

// Named import: import { apiKey } from './src/config';
/* If you want to import more variables/functions, use 
	a comma. import { var1, var2 } */
// Default import: import apiKey from './src/config';

// You can name import variable/function anything you want if you used default export
// If you use named import it has to match the variable/function from the imported file


