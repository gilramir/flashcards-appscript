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
2. At the top of the Apps Script screen, click where it says **"Untitled project"**
   and give it a name like **Flashcards**. (This is just a label so you can
   recognize it later — it doesn't affect how the app works.)
3. Paste the contents of `Code.gs` into the `Code.gs` file in the editor.
4. **File ▸ New ▸ HTML file**, name it `Card` (no extension), paste in `Card.html`.
5. Save, then reload the spreadsheet.
6. A **Flashcards** menu appears → **Start Review (active sheet)**.

### The first time you run it: "Authorization required"

The very first time you choose **Start Review**, Google shows a pop-up saying
**"Authorization required."** This is normal and expected — Google is just
asking your permission for the script to read the sheet you're reviewing.
You only have to do this once. Walk through it like this:

1. Click **Continue** (or **Review permissions**).
2. Choose your own Google account from the list.
3. You may see a warning screen: **"Google hasn't verified this app."** This
   appears for any personal script you write yourself; it does not mean
   anything is wrong. Click the small **"Advanced"** link, then click
   **"Go to Flashcards (unsafe)"** at the bottom. (The "unsafe" wording is
   Google's generic notice for unverified scripts — it's *your* script.)
4. On the final screen, click **Allow**.

After that the flashcard window opens. You won't be asked again unless you
change the script later.

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
- **Jump to row** button (or press **J**) moves the cursor to the source row of the
  current card — handy for fixing a typo you spotted. The counter shows the row number.
  After editing, press **S** to reshuffle and pick up the change.
- The deck is reshuffled each time you start a review.
- Each tab is an independent deck — just switch tabs and start again.
