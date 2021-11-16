{
    const welcome = () => {
        const welcome = document.querySelector('.welcome');
        console.log(welcome);
        setTimeout(() => { welcome.classList.remove('welcome')/* console.log('hello') */; }, 3000);
        setTimeout(() => { welcome.classList.add('animate__fadeOut')/* console.log('hello') */; }, 3000);
        setTimeout(() => { welcome.classList.add('hidden')/* console.log('hello') */; }, 4000);
    }

    const todo = () => {
        const todo = document.querySelector('.todo');
        console.log(todo);
        setTimeout(() => { todo.classList.remove('hidden')/* console.log('hello') */; }, 5000);
        setTimeout(() => { todo.classList.add('go_up')/* console.log('hello') */; }, 7000);


        const choices = document.querySelector('.choices');
        console.log(choices);
        setTimeout(() => { choices.classList.remove('hidden')/* console.log('hello') */; }, 9000);
        setTimeout(() => { choices.classList.add('buttons')/* console.log('hello') */; }, 9000);
        setTimeout(() => { todo.classList.remove('go_up'); }, 9000);
        setTimeout(() => { todo.classList.add('stick'); }, 9000);
    }

    const crystals = () => {
        const gems = document.querySelector('.gems');
        console.log(gems);
        setTimeout(() => { gems.classList.remove('hidden')/* console.log('hello') */; }, 10000);
        const purple = document.querySelector('.purple');
        setTimeout(() => { purple.classList.add('purple_transform')/* console.log('hello') */; }, 10010);
        const green = document.querySelector('.green');
        setTimeout(() => { green.classList.add('green_transform')/* console.log('hello') */; }, 10010);
        const yellow = document.querySelector('.yellow');
        setTimeout(() => { yellow.classList.add('yellow_transform')/* console.log('hello') */; }, 10010);
    }

    const init = () => {
        welcome()
        todo()
        crystals()
    }

    init();
}