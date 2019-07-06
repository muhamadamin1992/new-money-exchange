// PLEASE DON'T change function name
module.exports = function makeExchange( currency ) {
  'use strict';

  const COINS = [ 'H', 'Q', 'D', 'N', 'P' ],
  			COINSVALUES = [ 50, 25, 10, 5, 1 ];
  			
  let res = {},
  		i = 0;

  if ( currency > 10000  ) {
  	res.error = "You are rich, my friend! We don't have so much coins for exchange";
  	return res;
  }

  while ( currency > 0 ) {
  	let count = Math.floor( currency / COINSVALUES[i] );

		if ( count > 0 ) {
			currency -= COINSVALUES[i] * count;
			res[COINS[i]] = count;
		}

		i++;
  }

  return res;
}
