# Textbox Navigator Chrome Extension

Use **Alt+J** (next) and **Alt+K** (previous) to navigate between all text input fields on any webpage.

## What It Works With

This extension works with:
- ✅ Textareas (`<textarea>`)
- ✅ Text inputs (`<input type="text">`)
- ✅ Email, search, URL, tel, password inputs
- ✅ **Contenteditable divs** (rich text editors like the one in your screenshot)

## Installation Instructions

### Step 1: Download and Extract
1. Download the `textarea-navigator.zip` file
2. Extract/unzip it to a folder on your computer (e.g., `Downloads/textarea-navigator`)
3. Remember where you saved this folder - you'll need it in the next steps

### Step 2: Install in Chrome
1. Open Google Chrome
2. In the address bar, type: `chrome://extensions/` and press Enter
3. In the top-right corner, toggle **"Developer mode"** to ON (the switch should turn blue)
4. Click the **"Load unpacked"** button (appears near the top-left after enabling Developer mode)
5. Navigate to and select the `textarea-navigator` folder you extracted in Step 1
6. Click **"Select Folder"** (or "Open" on Mac)

### Step 3: Verify Installation
- You should now see "Textbox Navigator" in your list of extensions
- The extension is now active and working on all websites!

### Updating the Extension
If you download an updated version:
1. Go to `chrome://extensions/`
2. Find "Textbox Navigator" in the list
3. Click the **refresh/reload icon** (circular arrow) on the extension card
4. The extension is now updated!

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

## Testing

Open the included `test.html` file in Chrome to test the extension with different types of input fields.

## Troubleshooting

**Extension not working?**
- Make sure Developer mode is enabled in `chrome://extensions/`
- Try reloading the extension (click the refresh icon)
- Check the browser console (F12) for debug messages
- Make sure you've extracted the zip file (Chrome can't load extensions directly from zip files)

**Still not working?**
- Open `test.html` in Chrome
- Press F12 to open the console
- Try Alt+J or Alt+K in a text field
- You should see console messages - if not, the extension isn't loading properly

## Why These Shortcuts?

- **Alt+J** and **Alt+K** don't conflict with any Chrome built-in shortcuts
- Inspired by vim navigation (j = down/next, k = up/previous)
- Alt key is safe to use and won't interfere with typing or browser operations

## Customization

If you want to modify the behavior (e.g., don't cycle back to the first textarea), edit the `content.js` file and remove the else-if block that handles the last textarea.
