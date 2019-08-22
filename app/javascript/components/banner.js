import Typed from 'typed.js';

const initTyped = () => {
  new Typed('#typed', {
    strings: ["Change your life", "Learn to code","Hello World !!!!!!!"],
    typeSpeed: 50,
    loop: true
  });
}


export { initTyped }