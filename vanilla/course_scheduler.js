const table = document.getElementById('dynamic-table');

// Column labels for Monday to Friday
const columnLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

for (let i = 0; i < 11; i++) {
    const row = document.createElement('tr');

    // Create 6 columns in each row
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td'); // Use 'th' for the first row
        
        if (i === 0 && j > 0 && j <= columnLabels.length) {
            // Label the first row from column 2 onwards
            cell.textContent = columnLabels[j - 1];
        } else if (i > 0 && j === 0) {
            // Optional: Label rows if needed (e.g., Row 1, Row 2, ...)
            cell.textContent = `Row ${i}`;
        } else {
            // Empty content for other cells
            cell.textContent = '';
        }
        
        row.appendChild(cell);
    }

    table.appendChild(row);
}

// Function to update row labels manually
function updateRowLabels(labels) {
    const table = document.getElementById('dynamic-table'); // Get the table element

    // Loop through each label and update the corresponding row
    labels.forEach((label, index) => {
        // Skip the header row (row 0)
        const row = table.rows[index + 1]; // Access the correct row (index + 1 because index 0 is the header)
        const firstCell = row.cells[0]; // Access the first cell in the row
        firstCell.textContent = label; // Update the cell's content
    });
}

// Example usage: Update row labels after table creation
updateRowLabels(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']);


// Add a value to a specific cell
function updateCell(rowIndex, colIndex, value) {
    // Get the specified row
    const row = table.rows[rowIndex];
    
    // Get the cell in that row
    const cell = row.cells[colIndex];
    
    // Update the cell's content
    cell.textContent = value;
}

// Example: Change the value in row 2, column 3
updateCell(2, 3, 'New Value');

// Example: Change the value in row 4, column 2
updateCell(4, 2, 'Hello World!');
