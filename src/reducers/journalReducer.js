const initialState = {
    entries: [],
    currentTitle: '',
    currentContent: '',
    currentID: -1,
    showModal: false,
    editState: 'CREATE',
    
}

function journalReducer(state = initialState, action) {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'updateEntries':
            return Object.assign({}, state, {entries: action.data})
        case 'updateEditState':
            return Object.assign({}, state, {editState: action.state})
        case 'addEntry':
            return Object.assign({}, state, {entries: [...state.entries, action.entry]})
        case 'toggleModal':
            return Object.assign({}, state, {showModal: action.data})
        case 'updateTitle':
            return Object.assign({}, state, {currentTitle: action.data})
        case 'updateContent':
            return Object.assign({}, state, {currentContent: action.data})
        case 'updateID':
            return Object.assign({}, state, {currentID: action.data})
        default:
            return state    
    }
}


// {
//     _id: null,
//     date: new Date(),
//     title: 'ENTRY 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.'
// }

export default journalReducer;