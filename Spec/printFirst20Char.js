function testPrintFirst20Char() {
  function noteDouble(string) {
    this._noteText = string;
  }

  noteDouble.prototype = {
    showNote: function() {
      return this._noteText;
    }
  }

  function noteListDouble() {
    this._notes = [];
  }

  noteListDouble.prototype = {
    showNotes: function() {
      return this._notes;
    },
    addNote: function(note) {
      return this._notes.push(note);
    },
  }

  var testNote = new noteDouble("how much of this can you see?");
  var testNoteList = new noteListDouble();
  var testNoteListView = new NoteListView(testNoteList);

  testNoteList.addNote(testNote);
  testNoteListView.getFirst20Char();
  console.log("testPrintFirst20Char: " + assert.isTrue(testNoteListView.printFirst20Char() === "<li><div>how much of this can</div></li>"  ));
};
testPrintFirst20Char();
