/**
 * sails-generate-backend
 *
 * Usage:
 * + Automatically called by `sails new`
 *
 * @type {Object}
 */

module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: {

    '.': ['views'],
    './api/controllers': { folder: {}},
    './api/models': { folder: {}},
    './api/policies': { folder: {}},
    './api/services': { folder: {}},
    './api/responses': { folder: {}},

    './api/controllers/.gitkeep': { copy: '.gitkeep'},
    './api/models/.gitkeep': { copy: '.gitkeep'},
    './api/services/.gitkeep': { copy: '.gitkeep'},
    './config/connections.iced.md': { copy: 'config/connections.iced.md' },
    './config/models.iced.md': { copy: 'config/models.iced.md' },
    './config/blueprints.iced.md': { copy: 'config/blueprints.iced.md' },
    './config/bootstrap.iced.md': { copy: 'config/bootstrap.iced.md' },
    './config/cors.iced.md': { copy: 'config/cors.iced.md' },
    './config/csrf.iced.md': { copy: 'config/csrf.iced.md' },
    './config/http.iced.md': { copy: 'config/http.iced.md' },
    './config/globals.iced.md': { copy: 'config/globals.iced.md' },
    './config/i18n.iced.md': { copy: 'config/i18n.iced.md' },
    './config/local.iced.md': { copy: 'config/local.iced.md' },
    './config/log.iced.md': { copy: 'config/log.iced.md' },
    './config/policies.iced.md': { copy: 'config/policies.iced.md' },
    './config/routes.iced.md': { copy: 'config/routes.iced.md' },
    './config/sockets.iced.md': { copy: 'config/sockets.iced.md' },

    './config/session.iced.md': { template: 'config/session.iced.md' },
    './config/views.iced.md': { template: 'config/views.iced.md' },

    './config/locales/de.json': { copy: 'config/locales/de.json' },
    './config/locales/en.json': { copy: 'config/locales/en.json' },
    './config/locales/es.json': { copy: 'config/locales/es.json' },
    './config/locales/fr.json': { copy: 'config/locales/fr.json' },
    './config/locales/_README.md': { copy: 'config/locales/_README.md' },

    './api/policies/sessionAuth.iced.md': { copy: 'api/policies/sessionAuth.iced.md' },

    './api/responses/badRequest.iced.md': { copy: 'api/responses/badRequest.iced.md' },
    './api/responses/forbidden.iced.md': { copy: 'api/responses/forbidden.iced.md' },
    './api/responses/notFound.iced.md': { copy: 'api/responses/notFound.iced.md' },
    './api/responses/serverError.iced.md': { copy: 'api/responses/serverError.iced.md' },
    './api/responses/ok.iced.md': { copy: 'api/responses/ok.iced.md' },

    // Excluding `res.negotiate()` from the generated files for now,
    // since it's best if its definition is consistent between projects.
    // It can still be overridden by creating api/responses/negotiate.iced.md.
    // './api/responses/negotiate.iced.md': { copy: 'api/responses/negotiate.iced.md' },

  }
};

