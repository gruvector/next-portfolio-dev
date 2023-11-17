require('@graphql-codegen/typescript');
require('@graphql-codegen/typescript-operations');
const { schema } = require('@octokit/graphql-schema');
module.exports = schema.json;
