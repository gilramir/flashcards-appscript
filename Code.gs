/**
 * Flashcards for Google Sheets
 * ---------------------------------
 * Reviews vocabulary on the CURRENTLY ACTIVE sheet/tab as shuffled flashcards.
 *
 * Each row is one translation:
 *   - Column A  -> front of card (e.g. Mandarin, Korean)
 *   - Column B  -> back of card  (e.g. pinyin, English)
 *   - Column C  -> optional; when present, back = B + " / " + C
 *
 * The spreadsheet is never modified. The shuffle happens in memory only.
 */

/**
 * Adds the custom menu when the spreadsheet is opened.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Flashcards')
    .addItem('Start Review (active sheet)', 'startReview')
    .addToUi();
}

/**
 * Launches the flashcard dialog for the active sheet.
 */
function startReview() {
  var html = HtmlService.createTemplateFromFile('Card')
    .evaluate()
    .setWidth(520)
    .setHeight(420);

  var sheetName = SpreadsheetApp.getActiveSheet().getName();
  SpreadsheetApp.getUi().showModelessDialog(html, 'Flashcards — ' + sheetName);
}

/**
 * Reads the active sheet and returns a shuffled deck.
 * Called from the client-side dialog when it loads.
 *
 * Each card records the 1-based source row and the sheet name so the
 * dialog can jump the cursor back to it for editing.
 *
 * @return {{sheet: string, cards: Array<{front: string, back: string, row: number}>}}
 */
function getCards() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var values = sheet.getDataRange().getValues();

  var cards = [];
  for (var i = 0; i < values.length; i++) {
    var a = String(values[i][0] == null ? '' : values[i][0]).trim();
    var b = String(values[i][1] == null ? '' : values[i][1]).trim();
    var c = String(values[i][2] == null ? '' : values[i][2]).trim();

    // Skip rows that don't have both a term and a translation.
    if (a === '' || b === '') {
      continue;
    }

    var back = c === '' ? b : b + ' / ' + c;
    cards.push({ front: a, back: back, row: i + 1 });
  }

  shuffle_(cards);
  return { sheet: sheet.getName(), cards: cards };
}

/**
 * Moves the cursor to the given row on the given sheet, so the user can
 * fix a typo they spotted on a card. Selects column A of that row.
 *
 * @param {string} sheetName
 * @param {number} row 1-based row number
 */
function jumpToRow(sheetName, row) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error('Sheet "' + sheetName + '" not found.');
  }
  ss.setActiveSheet(sheet);
  sheet.getRange(row, 1).activate();
}

/**
 * In-place Fisher–Yates shuffle. Does not touch the spreadsheet.
 *
 * @param {Array} arr
 * @private
 */
function shuffle_(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
