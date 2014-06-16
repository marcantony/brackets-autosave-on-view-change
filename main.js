/* global define, brackets, window, $ */

/**
 * Autosaves the current file when changing files or when changing from Brackets to something else.
 * Will not try to save untitled documents.
 */
define(function() {
    'use strict';
    
    var DocumentCommandHandlers = brackets.getModule("document/DocumentCommandHandlers"),
        DocumentManager = brackets.getModule("document/DocumentManager");
    
    function save(doc) {
    
    }
    
    $(DocumentManager).on('currentDocumentChange', function(e, currDoc, prevDoc) {
        save(prevDoc);
    });
    
    $(window).on('blur', function() {
        save(DocumentManager.getCurrentDocument());
    });
});
