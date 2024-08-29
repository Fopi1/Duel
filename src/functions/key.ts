export const key = <T extends object>(
  userObject: T,
  index: number
): keyof T | undefined => {
  const keys = Object.keys(userObject) as Array<keyof T>;
  return keys[index];
};
