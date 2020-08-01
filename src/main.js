import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createNewTaskButton} from "./view/new-task-button.js";
import {createSortTemplate} from "./view/sort.js";
import {createCardTemplate} from "./view/task.js";
import {createEditTaskTemplate} from "./view/task-edit.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);


render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);

const siteTasksElement = siteMainElement.querySelector(`.board__tasks`);
const siteBoardElement = siteMainElement.querySelector(`.board`);

render(siteTasksElement, createEditTaskTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteTasksElement, createCardTemplate(), `beforeend`);
}

render(siteBoardElement, createNewTaskButton(), `beforeend`);
