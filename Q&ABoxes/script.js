const toggleButtons = document.querySelectorAll('.qna-toggle');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');
    })
})