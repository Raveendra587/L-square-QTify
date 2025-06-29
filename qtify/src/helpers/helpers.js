export function truncate(str, num) {
  if (!str || typeof str !== "string") return "";
  return str.length <= num ? str : str.slice(0, num) + "...";
}