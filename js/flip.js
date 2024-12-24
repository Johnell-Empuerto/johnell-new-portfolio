document.querySelectorAll('.grid').forEach(grid => {
    grid.addEventListener('click', () => {
        grid.classList.toggle('flip');
    });
});