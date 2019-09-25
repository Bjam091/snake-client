

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connection = connect();

setupInput(connection);
