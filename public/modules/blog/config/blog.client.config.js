'use strict';

// Configuring the Articles module
angular.module('blog').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', 'Blog', 'blog', 'external', '/blog');
    }
]);
