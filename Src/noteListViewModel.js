(function (exports) {
    function NoteListView(chosenNotelist){
      this._noteList = chosenNotelist;
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
      });
      return first20Char;
    };

    exports.NoteListView = NoteListView;

})(this);
