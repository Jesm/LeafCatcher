export const ACTION_COMPLETE = Symbol('action_complete');
export const ACTION_FAILED = Symbol('action_failed');
export const ACTION_PROGRESSED = Symbol('action_progressed');
export const VIEW = Symbol('view');
export const DISPLACEMENT = Symbol('displacement');
export const CATCH = Symbol('catch');
export const DROP = Symbol('drop');

export const factory = (type, sender, data) => ({ type, sender, data });
export const typeIs = (event, ...types) => types.includes(event.type);
