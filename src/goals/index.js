export const CARRY = Symbol('carry');
export const GOTO = Symbol('goto');

export const factory = (type, data = {}) => Object.assign({ type }, data);
