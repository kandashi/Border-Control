import {libWrapper} from './shim.js';

Hooks.once('init', async function() {
    libWrapper.register('Remove-Borders', 'Token.prototype._getBorderColor', borderRemove, 'OVERRIDE')
});

function borderRemove(wrapped, ...args) {

    return null
}
