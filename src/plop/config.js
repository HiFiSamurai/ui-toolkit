var path = require('path');

module.exports = ( plop ) => {
    plop.setGenerator('component', {
        description: 'Create a new module',

        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is your component name?'
        },
        {
            type: 'input',
            name: 'app',
            default: 'app',
            message: 'What is your app name?'
        },
        {
            type: 'input',
            name: 'path',
            message: 'What is the output path?'
        }],

        actions: [{
            type: 'add',
            path: path.resolve(process.cwd(), '{{path}}/{{camelCase name}}/index.js'),
            templateFile: 'module.js'
        },
        {
            type: 'add',
            path: path.resolve(process.cwd(), '{{path}}/{{camelCase name}}/{{camelCase name}}.scss'),
            templateFile: 'module.scss'
        },
        {
            type: 'add',
            path: path.resolve(process.cwd(), '{{path}}/{{camelCase name}}/{{camelCase name}}.html'),
            templateFile: 'module.html'
        }]
    });
};
