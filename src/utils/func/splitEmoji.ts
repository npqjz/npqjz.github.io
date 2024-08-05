export function splitEmoji(str: string) {
   return str.match(/[\s\S]/gu) || [];
}