export async function getIssues(query) {
  const response = await fetch("https://api.github.com/search/issues?q=test"+query);
  const result = await response.json();
  return result;
}
