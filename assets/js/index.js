// Home page JavaScript
// Configuration
const cheatsheetFolder = 'cheetsheets/';

// Define cheatsheets metadata
const cheatsheets = [
    {
        file: 'kvm-cheatsheet.html',
        title: 'KVM',
        description: 'Kernel-based Virtual Machine commands and operations for managing virtual machines on Linux.',
        tags: ['Virtualization', 'Linux', 'VM']
    }
    // Add more cheatsheets here as you create them
    // Example:
    // {
    //     file: 'docker-cheatsheet.html',
    //     title: 'Docker',
    //     description: 'Container management and Docker CLI commands.',
    //     tags: ['Containers', 'DevOps']
    // }
];

// Function to create cheatsheet card
function createCheatsheetCard(cheatsheet, index) {
    const card = document.createElement('div');
    card.className = 'cheatsheet-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const tags = cheatsheet.tags ? cheatsheet.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join(' ') : '';
    
    card.innerHTML = `
        <h2>${cheatsheet.title}</h2>
        <p class="description">${cheatsheet.description}</p>
        <a href="${cheatsheetFolder}${cheatsheet.file}" class="cheatsheet-link">
            View Cheatsheet
        </a>
        ${tags ? `<div>${tags}</div>` : ''}
    `;
    
    return card;
}

// Function to load and display cheatsheets
function loadCheatsheets() {
    const container = document.getElementById('cheatsheets-container');
    
    if (cheatsheets.length === 0) {
        container.innerHTML = '<div class="no-cheatsheets">No cheatsheets available yet. Check back soon!</div>';
        return;
    }
    
    cheatsheets.forEach((cheatsheet, index) => {
        const card = createCheatsheetCard(cheatsheet, index);
        container.appendChild(card);
    });
}

// Load cheatsheets when page loads
document.addEventListener('DOMContentLoaded', loadCheatsheets);
