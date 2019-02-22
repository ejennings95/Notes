(function (exports) {
    function NoteList(){
        this._notes = [];
    }

    NoteList.prototype.showNotes = function () {
        return this._notes;
    };

    NoteList.prototype.addNote = function(note) {
        return this._notes.push(note);
    };

    exports.NoteList = NoteList;

})(this);
