export function textBr(plain: string): string {
  if (!plain) { return ''; }
  return plain.replace(/(?:\r\n|\r|\n)/g, '<br />');
}
