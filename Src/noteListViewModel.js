(function (exports) {
    function NoteListView(chosenNotelist){
      this._noteList = chosenNotelist;
      this._first20Char = null;
    }

    NoteListView.prototype.showNoteList = function () {
        return this._noteList;
    };

    NoteListView.prototype.printNotesInHTML = function() {
      var html = this._noteList.showNotes().map(note => {
        return "<li><div>" + note.showNote() + "</div></li>";
      });
      return "<ul>" + html.join("") + "</ul>";
    };

    NoteListView.prototype.getFirst20Char = function() {
      var first20Char = this._noteList.showNotes().map(note => {
        return note.showNote().substring(0, 20);
      })
      this._first20Char = first20Char;
      return first20Char;
    };

    NoteListView.prototype.printFirst20Char = function() {
      var first20Charhtml = this._first20Char.map(note => {
        return "<li><div>" + note + "</div></li>";
      });
      return first20Charhtml.join("");
    };

    exports.NoteListView = NoteListView;

})(this);
