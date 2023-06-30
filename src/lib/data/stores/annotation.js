import { writable, get, derived } from "svelte/store";
import { refs } from "./scripture";
import { findBookmarkByChapter, bookmarksLastUpdated } from "$lib/data/bookmarks";
import { findHighlightByChapter, highlightsLastUpdated } from "$lib/data/highlights";
import { findNoteByChapter, notesLastUpdated } from "$lib/data/notes";

/* list of bookmarks for the current collection/book/chapter */
export const bookmarks = derived([refs, bookmarksLastUpdated], ([$refs]) => {
    return findBookmarkByChapter($refs);
});

/* list of highlights for the current collection/book/chapter */
export const highlights = derived([refs, highlightsLastUpdated], ([$refs]) => {
    return findHighlightByChapter($refs);
});

/* list of notes for the current collection/book/chapter */
export const notes = derived([refs, notesLastUpdated], ([$refs]) => {
    return findNoteByChapter($refs);
});