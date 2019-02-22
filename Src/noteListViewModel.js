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

    exports.NoteListView = NoteListView;

})(this);
