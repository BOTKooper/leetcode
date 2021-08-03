//@ts-check
'use strict';
const {danger, fail, warn} = require('danger');

const thisPr = {
    issue_number: danger.github.thisPR.number,
    owner: danger.github.thisPR.owner,
    repo: danger.github.thisPR.repo,
  };

let label = danger.github.pr.title.split(']')[0].slice(1);
if(label) {
    danger.github.api.issues.addLabels({
        labels: [label],
        ...thisPr,
    });

}
let taskNumber = null;

if(label === 'TASK') {
    const trimmed = danger.github.pr.title.slice('[TASK] #'.length)
    taskNumber = Number(trimmed.split(':')[0]);
    danger.github.api.issues.addLabels({
        labels: [taskNumber.toString()],
        ...thisPr,
    });
}

const docs = danger.git.fileMatch("**/*.md")
const app = danger.git.fileMatch("solves/**/*.js")
const taskTest = danger.git.fileMatch(`*/test/${taskNumber}.spec.js`)
const dangerfile = danger.git.fileMatch("dangerfile.js")

if(dangerfile.created && (danger.github.pr.user.login !== 'BOTKooper' && danger.github.pr.assignee.login !== 'BOTKooper')) {
    const body = "Who is trying to change the dangerfile here? \n@BOTKooper 👀"
    danger.github.api.issues.createComment({
        body,
        ...thisPr,
    })
    warn(body);
}

if (docs.edited) {
    const body = "Thanks for the docs, buddy!"
    danger.github.api.issues.createComment({
        body,
        ...thisPr,
    })
}

if(app.modified && taskNumber && !(taskTest.modified || taskTest.created)) {
    fail('Where are test changes, dear?')
}
