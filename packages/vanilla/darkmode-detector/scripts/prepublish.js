const path = require('path');
const prePublish = require('../../../../bundling/prepublish');

prePublish('darkmode-detector', path.join(__dirname, '../'));
