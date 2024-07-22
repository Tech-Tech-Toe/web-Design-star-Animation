document.getElementById('mySvg').addEventListener('click', function() {
    const path = this.querySelector('path');
    const currentFill = path.getAttribute('fill');
    const newColor = currentFill === '#B0B0B0' ? '#FFD700' : '#B0B0B0'; // Toggle between cement and golden
    path.setAttribute('fill', newColor);
});
