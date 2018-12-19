var createHandler = require('fail-nicely');

export default function handleFailure () {
  function onSuccess (message) {
    // console.log(message);
  }
  return createHandler(onSuccess, {title: 'Ups!'});
}
