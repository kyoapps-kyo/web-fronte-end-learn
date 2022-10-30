export function sum(...args) {
  return args.reduce((prev, next) => (prev += next));
}
