import deepFreeze from 'deep-freeze'
import feedbackReducer from './feedbackReducer'

describe('unicafe reducer', () => {
    const initialState = {
        good: 0,
        ok: 0,
        bad: 0
    }

    const actionGood = {
        type: 'GOOD'
    }

    const actionOk = {
        type: 'OK'
    }

    const actionBad = {
        type: 'BAD'
    }

    const incrementAllOnce = (initialState) => {
        const firstState = feedbackReducer(initialState, actionGood)
        const secondState = feedbackReducer(firstState, actionOk)
        return feedbackReducer(secondState, actionBad)
    }
 
    it('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = feedbackReducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    it('good is incremented', () => {
        const state = initialState
        deepFreeze(state)
        const newState = feedbackReducer(state, actionGood)
        expect(newState).toEqual({
            good: 1,
            ok: 0,
            bad: 0
        })
    })

    it('ok is incremented twice', () => {
        const state = initialState
        deepFreeze(state)
        const firstState = feedbackReducer(state, actionOk)
        const secondState = feedbackReducer(firstState, actionOk)
        expect(secondState).toEqual({
            good: 0,
            ok: 2,
            bad: 0
        })
    })

    it('bad is incremented thrice', () => {
        const state = initialState
        deepFreeze(state)
        const firstState = feedbackReducer(state, actionBad)
        const secondState = feedbackReducer(firstState, actionBad)
        const thirdState = feedbackReducer(secondState, actionBad)
        expect(thirdState).toEqual({
            good: 0,
            ok: 0,
            bad: 3
        })
    })

    it('good ok and bad work together', () => {
        const state = initialState
        deepFreeze(state)

        expect(incrementAllOnce(state)).toEqual({
            good: 1,
            ok: 1,
            bad: 1
        })
    })

    it('zero resets feedback', () => {
        const action = {
            type: 'ZERO'
        }

        const state = initialState
        deepFreeze(state)
        const incrementedState = incrementAllOnce(state)

        expect(incrementedState).toEqual({
            good: 1,
            ok: 1,
            bad: 1
        })

        const resetState = feedbackReducer(incrementedState, action)

        expect(resetState).toEqual({
            good: 0,
            ok: 0,
            bad: 0
        })
    })
})