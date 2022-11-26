import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(`form`),
  button: document.querySelector(`button[type="submit"]`),
  inputDelay: document.querySelector(`input[name="delay"]`),
  inputStep: document.querySelector(`input[name="step"]`),
  inputAmount: document.querySelector(`input[name="amount"]`),
};

refs.form.addEventListener(`submit`, onFormSubmit);

const formElements = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay} ms`);
      }
    }, delay);
  });
}

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.target;
  let delay1 = Number(delay.value);
  let nextStep = Number(step.value);
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i + 1, delay1 + i * nextStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

// let delay = formElements.delay.value;
// let step = formElements.step.value;
// let amount = formElements.amount.value;
// let position = 0;

// const formData = {
//   delay: delay,
//   step: step,
//   amount: amount,
// };
// console.log(formData);

// const promises = [];

// function createPromises({ delay, step, amount }) {
//   // delay[0] = delay;
//   for (let position = 0; position <= amount; position += 1) {
//     delay[0] = delay;
//     delay[position] += step;

//     const promise = function createPromise(position, delay) {
//       const shouldResolve = Math.random() > 0.3;
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (shouldResolve) {
//             resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
//           } else {
//             reject(`❌ Rejected promise ${position} in ${delay} ms`);
//           }
//         }, delay);
//       });
//     };

//     // return promises.push(promise);
//   }
//   // return promises;
// }

// console.log(promises);
// console.log(createPromises({ delay, step, amount }));

// createPromise({ position, delay })
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay} ms`);
//   });

// const promises = promisesArray.map(promise => createPromise(position, delay));

// function createPromises({ delay, step, amount }) {
//   // let promisesArray = [];
//   // delay[0] = 0;
//   // for (let i = 0; i < amount; i += 1) {
//   //   console.log((delay[i] += step));
//   //   console.log(promise[i]);
//   //   promisesArray.push(promise[i]);
//   // }
//   // return;
// }

// console.log(promisesArray);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay} ms`);
//       }
//     }, delay);
//     // return promise;
//   });
// }

// createPromise(1, 1000)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay} ms`);
//   });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve('Success! Value passed to resolve function');
//       } else {
//         reject('Error! Error passed to reject function');
//       }
//     }, delay);
//   });
//   return promise;
// }

// function onSuccess(result) {
//   console.log(result);
// }
// function onError(result) {
//   console.log(result);
// }

// console.log(createPromise(5, refs.inputDelay.value));

// const promise = new Promise((resolve, reject) => {
//   const delay = refs.inputDelay.value;
//   const step = refs.inputStep.value;
//   const position = 5;
//   setTimeout(() => {}, delay);
//   function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }
//   console.log(createPromise(position, delay));
// });

// promise
//   .then(
//     result => {
//       console.log(`${result}`);
//     }
//     // error => {
//     //   console.log(`${error}`);
//     // }
//   )
//   .catch(console.log(`${error}`));

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Promise.then(result => {
//   console.log(result);
// });

// console.log(createPromise(position, delay));

// ___________________________________________
// promise.then(
//   // onResolve will run third or not at all
//   result => {
//     console.log('onResolve call inside promise.then()');
//     console.log(result); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// ________________________
