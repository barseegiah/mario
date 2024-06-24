// script.js
function build(number) {
    number = parseInt(number);
    
    // Validate the number
    if (isNaN(number) || number < 1 || number > 8) {
        alert('Please enter a number between 1 and 8.');
        return;
    }
    
    const blockContainer = document.getElementById('blockContainer');
    blockContainer.innerHTML = ''; // Clear previous blocks

    for (let i = 1; i <= number; i++) {
        const row = document.createElement('div');
        row.className = 'row';

        // Create left blocks
        for (let j = 0; j < i; j++) {
            const block = document.createElement('div');
            block.className = 'block';
            row.appendChild(block);
        }

        // Add space between the two sides
        const space = document.createElement('div');
        space.style.flex = '1';
        row.appendChild(space);

        // Create right blocks
        for (let j = 0; j < i; j++) {
            const block = document.createElement('div');
            block.className = 'block';
            row.appendChild(block);
        }

        blockContainer.appendChild(row);
    }
}
