export function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
