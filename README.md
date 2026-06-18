# Flashcards for Google Sheets

You can use Google Sheets to track vocabulary words in two languages and
review them as flashcards. Each sheet (tab) in the Google Sheet doc is its
own deck of cards.

By using this app, you can review the vocabulary on the
**currently active sheet/tab** as shuffled flashcards.
The spreadsheet is never modified — shuffling happens in memory only.

**Note**: This app select specialized fonts for Chinese, Korean, and Thai,
as they look better than plain Arial.

## Card layout

Each row is one translation. It can have 2 columns, or 3.

Here is an example of 3 columns:

![Korean](images/fgs-sample-ko.png "Korean")

and 3 columns:

![Chinese](images/fgs-sample-zh.png "Chinese")

If 3,
columns B and C are combined into one card.

| Column | Meaning                                              |
|--------|------------------------------------------------------|
| A      | Front of card (e.g. Mandarin characters, Korean)     |
| B      | Back of card (e.g. pinyin, English)                  |
| C      | Optional. When present, back = `B + " / " + C`       |

- **Mandarin example:** A = 你好, B = nǐ hǎo, C = hello → back shows `nǐ hǎo / hello`
- **Korean example:** A = 안녕, B = hi (C empty) → back shows `hi`

Rows missing column A or column B are skipped, so header rows usually drop out
on their own (or just leave a blank row above your data).

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

## Installation Walkthrough

### Step 1: In your Google Sheet, press "Extensions"
![Step 1](images/fgs-inst-01.png "Step 1")

### Step 2: Press "Apps Script"
![Step 2](images/fgs-inst-02.png "Step 2")

### Step 3: It will be untitled; click "Untitle project"
![Step 3](images/fgs-inst-03.png "Step 3")

### Step 4: Give it any name (optional)
![Step 4](images/fgs-inst-04.png "Step 4")

### Step 5: You will have an empty Code.gs file
![Step 5](images/fgs-inst-05.png "Step 5")

### Step 6: In github.com select the Code.gs file and click the "copy"icon

[Link to Code.gs](https://github.com/gilramir/flashcards-appscript/blob/main/Code.gs)

![Step 6](images/fgs-inst-06.png "Step 6")


### Step 7: In your AppsScript, highlight the empty function
![Step 7](images/fgs-inst-07.png "Step 7")

### Step 8: Press CTRL-V to paste the new contents
![Step 8](images/fgs-inst-08.png "Step 8")

### Step 9: Press "+" to add a new file
![Step 9](images/fgs-inst-09.png "Step 9")

### Step 10: Select "HTML" as the new file type
![Step 10](images/fgs-inst-10.png "Step 10")

### Step 11: The new HTML file will have no name. Select "Untitled"
![Step 11](images/fgs-inst-11.png "Step 11")

### Step 12: Name it "Card" (without the ".html" extension)
![Step 12](images/fgs-inst-12.png "Step 12")

### Step 13: In github.com select the Card.html file and click the "copy"icon

[Link to Card.html](https://github.com/gilramir/flashcards-appscript/blob/main/Card.html)

![Step 13](images/fgs-inst-13.png "Step 13")

### Step 14: In your AppsScript, highlight the empty HTML contents
![Step 14](images/fgs-inst-14.png "Step 14")

### Step 15: Press CTRL-V to paste the new contents, then the disk icon for "Save"
![Step 15](images/fgs-inst-15.png "Step 15")

### Step 16: It is now "Saved to Drive"; you can close this web page.
![Step 16](images/fgs-inst-16.png "Step 16")

### Step 17: In your Google Sheet, reload the web page
![Step 17](images/fgs-inst-17.png "Step 17")

### Step 18: After it reloads, you now have a "Flashcards" menu item
![Step 18](images/fgs-inst-18.png "Step 18")

### Step 19: Click it, and click "Start Review (active sheet)"
![Step 19](images/fgs-inst-19.png "Step 19")

### Step 20: First time, you must click "OK" to authorize the app
![Step 20](images/fgs-inst-20.png "Step 20")

### Step 21: Click "Advanced"
![Step 21](images/fgs-inst-21.png "Step 21")

### Step 22: Click "Go to (your app name)"
![Step 22](images/fgs-inst-22.png "Step 22")

### Step 23: Check "Select all" to give the app permissions
![Step 23](images/fgs-inst-23.png "Step 23")

### Step 24: Click "Continue"
![Step 24](images/fgs-inst-24.png "Step 24")

### Step 25: Now you have Flashcards!
![Step 25](images/fgs-inst-25.png "Step 25")
