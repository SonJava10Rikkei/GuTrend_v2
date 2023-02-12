/* config-overrides.js */
// Ghi đè cấu hình webpack

const { override, useBabelRc } = require("customize-cra");

module.exports = override(useBabelRc());
