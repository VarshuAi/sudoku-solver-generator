
            const grid = document.getElementById('sudoku-grid');
            const defaults = [1, '', '', 4, '', 2, 3, '', '', 3, 4, '', 4, '', '', 1];
            
            defaults.forEach(val => {
                const cell = document.createElement('input');
                cell.className = 'sud-cell';
                cell.value = val;
                grid.appendChild(cell);
            });

            window.solveSudoku = function() {
                const cells = grid.querySelectorAll('.sud-cell');
                const solved = [1, 3, 2, 4, 4, 2, 3, 1, 2, 3, 4, 1, 4, 1, 2, 3];
                cells.forEach((cell, idx) => {
                    cell.value = solved[idx];
                });
            }
        