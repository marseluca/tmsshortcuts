// Debug: Log when the script loads
console.log('Textbox Navigator extension loaded');

// Function to get all editable elements (textareas, inputs, and contenteditable divs)
function getEditableElements() {
  const elements = [];
  
  // Get all textareas
  elements.push(...document.querySelectorAll('textarea'));
  
  // Get all text inputs
  elements.push(...document.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], input[type="url"], input[type="tel"], input[type="password"], input:not([type])'));
  
  // Get all contenteditable elements
  elements.push(...document.querySelectorAll('[contenteditable="true"]'));
  
  // Filter out hidden elements and sort by position on page
  return Array.from(elements).filter(el => {
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
  }).sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    // Sort by vertical position first, then horizontal
    if (Math.abs(rectA.top - rectB.top) > 10) {
      return rectA.top - rectB.top;
    }
    return rectA.left - rectB.left;
  });
}

// Function to check if element is editable
function isEditableElement(element) {
  if (!element) return false;
  
  const tagName = element.tagName;
  const isContentEditable = element.contentEditable === 'true';
  const isTextarea = tagName === 'TEXTAREA';
  const isTextInput = tagName === 'INPUT' && (
    !element.type || 
    ['text', 'email', 'search', 'url', 'tel', 'password'].includes(element.type)
  );
  
  return isContentEditable || isTextarea || isTextInput;
}

// Listen for keydown events on the entire document
document.addEventListener('keydown', function(e) {
  // Debug logging
  if (e.altKey && (e.key === 'j' || e.key === 'k')) {
    console.log('Textbox Navigator: Alt+' + e.key + ' detected, active element:', document.activeElement.tagName, 'contentEditable:', document.activeElement.contentEditable);
  }
  
  // Check if Alt+J is pressed (next field)
  if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === 'j' || e.key === 'J')) {
    if (isEditableElement(document.activeElement)) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Textbox Navigator: Moving to next field');
      
      const editableElements = getEditableElements();
      const currentIndex = editableElements.indexOf(document.activeElement);
      
      if (currentIndex !== -1 && currentIndex < editableElements.length - 1) {
        editableElements[currentIndex + 1].focus();
        console.log('Focused field', currentIndex + 2, 'of', editableElements.length);
      } else if (currentIndex === editableElements.length - 1) {
        editableElements[0].focus();
        console.log('Cycled to first field');
      }
    }
  }
  
  // Check if Alt+K is pressed (previous field)
  if (e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === 'k' || e.key === 'K')) {
    if (isEditableElement(document.activeElement)) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Textbox Navigator: Moving to previous field');
      
      const editableElements = getEditableElements();
      const currentIndex = editableElements.indexOf(document.activeElement);
      
      if (currentIndex > 0) {
        editableElements[currentIndex - 1].focus();
        console.log('Focused field', currentIndex, 'of', editableElements.length);
      } else if (currentIndex === 0) {
        editableElements[editableElements.length - 1].focus();
        console.log('Cycled to last field');
      }
    }
  }
}, true);
