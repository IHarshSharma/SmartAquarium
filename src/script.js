function toggleVisibility() {
    var codeSection = document.getElementById('codeSection');
    var codeText = document.getElementById('show-code-btn');
    if (codeSection.style.display == 'none') {
        codeText.innerText = 'Hide Code';
        codeText.style.backgroundColor = 'grey';
        codeSection.style.display = 'block'; // Show the code section
    } else {
        codeText.innerText = 'Show Code';
        codeText.style.backgroundColor = '#0d6efd';
        codeSection.style.display = 'none'; // Hide the code section
    }
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
