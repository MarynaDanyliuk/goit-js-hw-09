const refs = {
  form: document.querySelector(`form`),
  button: document.querySelector(`button[type="submit"]`),
  inputDelay: document.querySelector(`input[name="delay"]`),
  inputStep: document.querySelector(`input[name="step"]`),
  inputAmount: document.querySelector(`input[name="amount"]`),
};

console.log(refs.form);
console.log(refs.button);
console.log(refs.inputDelay);
console.log(refs.inputStep);
console.log(refs.inputAmount);

refs.button.addEventListener(`submit`, createPromise);

const delay = refs.inputDelay.value;
const step = refs.inputStep.value;
const position = 5;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    setInterval(() => {
      if (shouldResolve) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, step);
  }, delay);
}
promise.then(
  // onResolve will run third or not at all
  result => {
    console.log('onResolve call inside promise.then()');
    console.log(result); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log('onReject call inside promise.then()');
    console.log(error); // "Error! Error passed to reject function"
  }
);
// Promise.then(result => {
//   console.log(result);
// });

console.log(createPromise(position, delay));
