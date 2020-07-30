
const toggle = () => {
    const search = document.querySelector('.search__input');
    search.classList.add('toggle');
    setTimeout(() => {
        search.classList.remove('toggle');
    }, 1)
}

export default toggle;