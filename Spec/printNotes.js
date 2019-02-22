function testPrintNotes() {

  var testNote = new Note("Hello, buddy");
  var testNote = new Note("Hey")
  var testNoteList = new NoteList();
  var testNoteListView = new NoteListView(testNoteList);

  testNoteList.addNote(testNote);
  testNoteList.addNote(testNote);
  console.log("testPrintNotes: " + assert.isTrue(testNoteListView.printNotes(testNoteList) === "<ul>" + "<li><div>" + testNote.showNote() + "</div></li>" + "<li><div>" + testNote.showNote() + "</div></li>" + "</ul>" ));
};
testPrintNotes();
