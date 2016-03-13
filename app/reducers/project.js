import {
  REQUEST_PROJECT,
  CREATED_PROJECT,
  FOLDER_CHOOSEN,
  REQUEST_CREATE_PROJECT,
  RECEIVE_PROJECTS,
  UPDATE_CONFIG
} from '../actions/project'

export default function project(state = {
  name: "myblog",
  isCreating: false,
  completed: false,
  output: "",
  folder: "~",
  projects: {},
  config: {},
  updated: false
}, action) {
  switch (action.type) {
    case REQUEST_CREATE_PROJECT:
      return Object.assign({}, state, {
        name: action.name,
        isCreating: true
      })
    case CREATED_PROJECT:
      return Object.assign({}, state, {
        completed: true,
        output: action.output,
        isCreating: false
      })
    case FOLDER_CHOOSEN:
      return Object.assign({}, state, {
        folder: action.folder
      })
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        projects: action.projects
      })
    case UPDATE_CONFIG:
      return Object.assign({}, state, {
        config: action.config,
        updated: true
      })
    default:
      return state
  }
}
