/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

define(function(require, exports, module) {

  // Load the test suite
  require('gclitest/suite');

  // Register the 'test' command
  require("test/commands").setup();

});
