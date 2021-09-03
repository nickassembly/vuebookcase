import { createStore } from "vuex";
import { loadBooksByCategory } from '../http/bookapi';
import { Work } from '../models/books';

export default createStore ({
state: {
    bookList: new Array<Work>(),
    shelf: new Array<Work>(),
    isBusy: false,
    error: ""

},

mutations: {
    setBookList(state, list: Array<Work>) {
        state.bookList = list;
    }

},

actions: {
    async loadBookList(context, category: string) {
    const results = await loadBooksByCategory(category);
      if (results) context.commit("setBookList", results)
    }
}


});