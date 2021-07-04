export {};
/**
 * as const => readonlyに置き換わる
 */
let name = "Dai";

name = "Aya";
let nickname = "sakamoto" as const;
const bar = 'rimi'

const profile = {
    name: 'a',
    age: '23'
} as const