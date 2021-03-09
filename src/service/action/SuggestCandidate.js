import { SUGGEST_CANDIDATE } from "../constant"

export const setPositionSelect = index => {
    return {
        type: SUGGEST_CANDIDATE.SET_SELECT_POSITION,
        index
    }
}