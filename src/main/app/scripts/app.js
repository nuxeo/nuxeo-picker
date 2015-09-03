(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.searchTerm = '';

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  app.toggleSearch = function() {
    this.$.search.hidden = !this.$.search.hidden;
    if (!this.$.search.hidden) {
      this.async(function() {
        this.$.search.$.input.focus();
      });
    }
  };
})(document);
