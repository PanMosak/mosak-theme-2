"use strict";
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
Object.defineProperty(exports, "__esModule", { value: true });
var apputils_1 = require("@jupyterlab/apputils");
/**
 * A plugin for the Jupyter Dark Theme.
 */
var plugin = {
    id: 'mosak-theme:plugin',
    requires: [apputils_1.IThemeManager],
    activate: function (app, manager) {
        manager.register({
            name: 'Mosak Dark',
            load: function () {
                return manager.loadCSS('mosak-theme/style/index.css');
            },
            unload: function () {
                return Promise.resolve(void 0);
            }
        });
    },
    autoStart: true
};
exports.default = plugin;
//# sourceMappingURL=index.js.map