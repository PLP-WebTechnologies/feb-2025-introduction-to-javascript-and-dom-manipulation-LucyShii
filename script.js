// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // ------------------------------------
    // Text Content Manipulation
    // ------------------------------------
    const changingText = document.getElementById('changingText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    
    // Array of different text messages to cycle through
    const textOptions = [
        "This text will change when you click the button.",
        "You clicked the button! The text has changed.",
        "Click again for another message!",
        "JavaScript makes DOM manipulation easy!",
        "You can dynamically update content without page reload."
    ];
    
    let textIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % textOptions.length;
        changingText.textContent = textOptions[textIndex];
    });

    // ------------------------------------
    // Style Manipulation
    // ------------------------------------
    const styledText = document.getElementById('styledText');
    const colorBtn = document.getElementById('colorBtn');
    const fontBtn = document.getElementById('fontBtn');
    const highlightBtn = document.getElementById('highlightBtn');
    
    // Array of colors to cycle through
    const colorOptions = ['#333', '#e74c3c', '#2ecc71', '#3498db', '#9b59b6'];
    let colorIndex = 0;
    
    // Array of fonts to cycle through
    const fontOptions = [
        'Arial, sans-serif',
        'Georgia, serif',
        'Courier New, monospace',
        'Trebuchet MS, sans-serif',
        'Impact, sans-serif'
    ];
    let fontIndex = 0;
    
    colorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colorOptions.length;
        styledText.style.color = colorOptions[colorIndex];
    });
    
    fontBtn.addEventListener('click', function() {
        fontIndex = (fontIndex + 1) % fontOptions.length;
        styledText.style.fontFamily = fontOptions[fontIndex];
    });
    
    highlightBtn.addEventListener('click', function() {
        styledText.classList.toggle('highlight');
    });

    // ------------------------------------
    // Adding and Removing Elements
    // ------------------------------------
    const elementContainer = document.getElementById('elementContainer');
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        
        // Create a new div element
        const newElement = document.createElement('div');
        newElement.id = 'dynamicElement';
        newElement.innerHTML = `
            <p>This is dynamic element #${elementCount}.</p>
            <p>Created at: ${new Date().toLocaleTimeString()}</p>
        `;
        
        // Apply some random styles to make it visually distinct
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        newElement.style.borderLeft = `5px solid ${randomColor}`;
        
        // Add the new element to the container
        elementContainer.appendChild(newElement);
        
        // Enable the remove button once we have elements
        removeElementBtn.disabled = false;
    });
    
    removeElementBtn.addEventListener('click', function() {
        const dynamicElement = document.getElementById('dynamicElement');
        
        if (dynamicElement) {
            dynamicElement.remove();
            elementCount--;
            
            // Disable the remove button if there are no more elements to remove
            if (elementCount === 0) {
                removeElementBtn.disabled = true;
            }
        }
    });

    // Initially disable the remove button since there are no elements yet
    removeElementBtn.disabled = true;
});