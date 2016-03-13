export const REQUEST_CREATE_PROJECT = 'REQUEST_CREATE_PROJECT';
export const CREATED_PROJECT = 'CREATED_PROJECT';
export const FOLDER_CHOOSEN  = 'FOLDER_CHOOSEN';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const CLEARED_PATH = 'CLEARED_PATH';
export const RECEIVE_CONFIG = 'RECEIVE_CONFIG';
export const UPDATE_CONFIG = 'UPDATE_CONFIG';

import {
  commandCreateProject,
  showOpenDialog,
  setProjectPath,
  getProjectPath,
  getAllProjectsPaths,
  clearProjectPath,
  isPathExists,
  iterateProjects,
  writeConfigToFile,
  readConfigFile
} from '../utils/ProjectUtils'

function requestCreateProject(name) {
  return {
    type: REQUEST_CREATE_PROJECT,
    name
  }
}

function createdProject(output) {
  return {
    type: CREATED_PROJECT,
    output
  }
}

function shouldCreateProject(state) {
  const createState = state.create
  if (!createState) {
    return true
  }
  if (createState.isCreating) {
    return false
  }
  return true
}

export function createProject(name, folder) {
  return (dispatch, getState) => {
    if (shouldCreateProject(getState())) {
      dispatch(requestCreateProject(name))
      return commandCreateProject(name, folder, (error, stdout, stderr) => {
        if (error) {
          dispatch(createdProject(stderr))
        }else {
          dispatch(createdProject(stdout))
          setProjectPath(name,folder)
        }
      })
    }
  }
}

export function chooseFolder() {
  return (dispatch) => {
    return showOpenDialog((folder) =>{
      dispatch({
        type: FOLDER_CHOOSEN,
        folder: folder[0]
      })
    })
  }
}

function receiveProjects() {
  return {
    type: RECEIVE_PROJECTS,
    projects: getAllProjectsPaths()
  }
}

function clearedPath(path) {
  return {
    type: CLEARED_PATH,
    path
  }
}

export function getAllExistingProjects(path) {
  return dispatch => {
    iterateProjects((name, path, list) => {
      if (!isPathExists(path)) {
        clearProjectPath(path)
        dispatch(clearedPath(path))
      }
    })
    return dispatch(receiveProjects())
  }
}

export function updateConfig(path, config) {
  return (dispatch) => {
    return writeConfigToFile(path, config, (err) => {
      if (!err) {
        dispatch({
          type: UPDATE_CONFIG,
          config
        })
      }else {
        console.log(err)
      }
    })
  }
}
