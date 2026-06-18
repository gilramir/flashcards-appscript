## Install (clasp, optional)

[clasp](https://github.com/google/clasp) lets you push Apps Script files from
the command line instead of copy-pasting through the browser editor.

### 1. Set up clasp

```bash
npm install -g @google/clasp
clasp login          # opens a browser window to authorize clasp
```

### 2. Attach to an existing spreadsheet

Get your spreadsheet ID from its URL:
`https://docs.google.com/spreadsheets/d/**<SPREADSHEET_ID>**/edit`

Then, from inside this repo's directory, create a new Apps Script project
bound to that spreadsheet:

```bash
clasp create --type sheets --title "Flashcards" --parentId <SPREADSHEET_ID>
```

This writes a `.clasp.json` file (with the new script's ID) into the current
directory. The script project is now linked to your spreadsheet.

### 3. Push the files

```bash
clasp push
```

This uploads `Code.gs`, `Card.html`, and `appsscript.json` to the script
project. Reload your spreadsheet and the **Flashcards** menu will appear.

---

**If the spreadsheet already has scripts you want to keep**, pull them down
first so you don't overwrite them:

```bash
# Find the script ID: Extensions ▸ Apps Script ▸ Project Settings ▸ Script ID
clasp clone <SCRIPT_ID>
# Then copy Code.gs and Card.html from this repo into the cloned directory,
# being careful not to clobber any existing .gs files you need.
clasp push
```
