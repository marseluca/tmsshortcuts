# Textbox Navigator Chrome Extension

Use **Alt+J** (next) and **Alt+K** (previous) to navigate between all text input fields on any webpage.

## What It Works With

This extension works with:
- ✅ Textareas (`<textarea>`)
- ✅ Text inputs (`<input type="text">`)
- ✅ Email, search, URL, tel, password inputs
- ✅ **Contenteditable divs** (rich text editors like the one in your screenshot)

## Installation Instructions

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right corner)
3. Click "Load unpacked"
4. Select the `textarea-navigator` folder
5. The extension is now installed!

## Usage

When focused in any text field:
- Press **Alt+J** to move to the **next** text field
- Press **Alt+K** to move to the **previous** text field
- Navigation cycles (wraps around from last to first and vice versa)
- Fields are sorted by their position on the page (top to bottom, left to right)

## Features

- Works on all websites
- Supports regular inputs, textareas, AND contenteditable elements
- Lightweight and fast
- No special permissions required
- Non-conflicting keyboard shortcuts
- Automatically skips hidden fields

## Why These Shortcuts?

- **Alt+J** and **Alt+K** don't conflict with any Chrome built-in shortcuts
- Inspired by vim navigation (j = down/next, k = up/previous)
- Alt key is safe to use and won't interfere with typing or browser operations

## Customization

If you want to modify the behavior (e.g., don't cycle back to the first textarea), edit the `content.js` file and remove the else-if block that handles the last textarea.
