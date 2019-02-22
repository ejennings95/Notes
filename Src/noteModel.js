(function (exports) {

    function Note(string, id){
        this._noteText = string;
        this._noteId = id;
    }

    Note.prototype.showNote = function () {
        return this._noteText;
    };

    Note.prototype.showNoteId = function () {
      return this._noteId;
    };

    exports.Note = Note;
})(this);
