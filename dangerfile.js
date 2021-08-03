'use strict';
const {danger, fail, message, warn} = require('danger');

if(danger.github) {
    const isTask = danger.github.pr.title.toLowerCase().startsWith('task #');
    if(isTask) {
        const taskNumber = danger.github.pr.title.slice('task #').split(':')[0];
        const hasNewTests = danger.git.created_files.find((file) => file.includes(`test/${taskNumber}.spec.js`));
        
        if(!hasNewTests) {
            warn('No tests added, create them please');
        }
    }
} else {
    console.error('No github found')
}
