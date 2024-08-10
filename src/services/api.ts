const API_URL = 'https://api.cosmicjs.com/v3/buckets/meu-portfolio-production/objects?pretty=true&query=%7B%22type%22:%22projects%22%7D&limit=10&read_key=c0whnbYxrcVLGiUiSIcayyWuRO0FrLwDs6lfZVlWky1f89ybnT&depth=1&props=slug,title,metadata,';

export async function getProjects() {
  const response = await fetch(API_URL);
  const projects = await response.json();
  return projects.objects;
}
