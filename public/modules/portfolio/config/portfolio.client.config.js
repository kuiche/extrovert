'use strict';

// Configuring the Articles module
angular.module('portfolio').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', 'Portfolio', 'portfolio', 'item', '/portfolio');
    }
]);
