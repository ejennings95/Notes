(function (exports) {

    function Note(string, id){
        this._noteText = string;
        this._noteId = id;
    }

    Note.prototype.showNote = function () {
        return this._noteText;
    };

    exports.Note = Note;
})(this);
