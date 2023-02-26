import { InitialStateInterface } from "./canvasData";

export enum AllowedActions {
    UPDATE_TEXT='UPDATE_TEXT'
}

export interface ActionInterface {
    type: AllowedActions.UPDATE_TEXT,
    payload: InitialStateInterface
}

export function setCanvasData(initialState: InitialStateInterface, action: ActionInterface) {
    const {type, payload} = action;
    switch ( type ) {
        case AllowedActions.UPDATE_TEXT:
            return {...initialState, ...payload}    
        break;
    
        default:
            return initialState;
        break;
    }
}