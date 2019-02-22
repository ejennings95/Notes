function testPrintNotes() {
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
  var testNote = new noteDouble("Hello, buddy");
  var testNote = new noteDouble("Hey")
  var testNoteList = new noteListDouble();
  var testNoteListView = new NoteListView(testNoteList);

  testNoteList.addNote(testNote);
  testNoteList.addNote(testNote);
  console.log("testPrintNotes: " + assert.isTrue(testNoteListView.printNotesInHTML(testNoteList) === "<ul>" + "<li><div>" + testNote.showNote() + "</div></li>" + "<li><div>" + testNote.showNote() + "</div></li>" + "</ul>" ));
};
testPrintNotes();
