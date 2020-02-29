const url = 'stdout: INFO: Accepting connections at http://localhost:65339';

const regex = /http:\/\/.*/;

var found = url.match(regex);

console.log(found[0]);
