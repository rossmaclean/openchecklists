import * as YAML from 'yaml';

const checklistBaseUrl = 'https://raw.githubusercontent.com/rossmaclean/openchecklists/main/checklists/';
const checklistsBaseUrl = 'https://api.github.com/repos/rossmaclean/openchecklists/git/trees/main?recursive=2';

export function getChecklists() {
  return fetch(checklistsBaseUrl)
    .then((res) => res.json())
    .then((res) => res.tree
      .filter((i) => i.path.startsWith('checklists/'))
      .map((i) => i.path.replace('checklists/', ''))
      .map((i) => i.replace('.yaml', '')));
}

export function getChecklist(aircraft) {
  const url = `${checklistBaseUrl + aircraft}.yaml`;
  return fetch(url)
    .then((res) => res.text())
    .then((res) => YAML.parse(res));
}
