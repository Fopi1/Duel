declare global {
  interface String {
    title(): string;
  }
}

String.prototype.title = function (): string {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export {};
