const table = document.getElementById('dynamic-table');

// Define the labels for the first row
const labels = [
    "Label 1", "Label 2", "Label 3", "Label 4",
    "Label 5", "Label 6", "Label 7", "Label 8",
    "Label 9", "Label 10", "Label 11", "Label 12",
    "Label 13", "Label 14"
];

for (let i = 0; i < 14; i++) {
    const row = document.createElement('tr');

    // Create 14 columns in each row
    for (let j = 0; j < 14; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td'); // Use 'th' for the first row

        // Set text for the first row using labels
        if (i === 0) {
            cell.textContent = labels[j]; // Use the predefined labels for the first row
        } else {
            cell.textContent = ``; // Keep other cells empty initially
        }

        row.appendChild(cell);
    }

    table.appendChild(row);
}

function toggleDropdown(contentClass) {
    const content = document.querySelector(`.${contentClass}`);
    if (content.classList.contains('active')) {
        content.classList.remove('active');
    } else {
        content.classList.add('active');
    }
}
