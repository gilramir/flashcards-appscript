# Flashcards for Google Sheets

Review the vocabulary on the **currently active sheet/tab** as shuffled flashcards.
The spreadsheet is never modified — shuffling happens in memory only.

## Card layout

Each row is one translation:

| Column | Meaning                                              |
|--------|------------------------------------------------------|
| A      | Front of card (e.g. Mandarin characters, Korean)     |
| B      | Back of card (e.g. pinyin, English)                  |
| C      | Optional. When present, back = `B + " / " + C`       |

- **Mandarin example:** A = 你好, B = nǐ hǎo, C = hello → back shows `nǐ hǎo / hello`
- **Korean example:** A = 안녕, B = hi (C empty) → back shows `hi`

Rows missing column A or column B are skipped, so header rows usually drop out
on their own (or just leave a blank row above your data).

## Install (copy/paste)

1. Open your Google Sheet → **Extensions ▸ Apps Script**.
2. Paste the contents of `Code.gs` into the `Code.gs` file in the editor.
3. **File ▸ New ▸ HTML file**, name it `Card` (no extension), paste in `Card.html`.
4. Save, then reload the spreadsheet.
5. A **Flashcards** menu appears → **Start Review (active sheet)**.
   The first run asks you to authorize the script.

## Install (clasp, optional)

```bash
npm install -g @google/clasp
clasp login
clasp create --type sheets --title "Flashcards"   # or: clasp clone <scriptId>
clasp push
```

## Usage

- Switch to the tab you want to review, then **Flashcards ▸ Start Review**.
- Click the card (or press **Space**) to flip between term and translation.
- **Previous / Next** buttons or **←/→** arrow keys move through the deck.
- **Shuffle & restart** button (or press **S**) reshuffles and jumps back to card 1.
  It re-reads the sheet, so any edits you made are picked up.
- The deck is reshuffled each time you start a review.
- Each tab is an independent deck — just switch tabs and start again.
