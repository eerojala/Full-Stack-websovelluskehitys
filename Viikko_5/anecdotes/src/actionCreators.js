const actionFor = {
    vote(id) {
        return {
            type: 'VOTE',
            data: { id }
        }
    },

    anecdoteCreation(content) {
        return {
            type: 'NEW_ANECDOTE',
            data: {
                content,
                id: (100000 * Math.random()).toFixed(0),
                votes: 0
            }
        }
    }
}

export default actionFor