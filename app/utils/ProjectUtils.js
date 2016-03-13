import childProcess from 'child_process'
import pathExists from 'path-exists'
import _ from 'underscore'
import { remote } from 'electron'
import LocalStorageUtils from './LocalStorage'
import fs from 'fs'
import YAML from 'yamljs'

const separator = (process.platform == "win32") ? '\\' : '/'

export function commandCreateProject(name, folder, callback) {
  childProcess.exec(`jekyll new ${name}`, {cwd: folder}, callback)
}

export function showOpenDialog(callback) {
  remote.dialog.showOpenDialog({ properties: ['openDirectory']}, callback)
}

export function setProjectPath(name, folder) {
  LocalStorageUtils.set(folder+separator+name, name)
}

export function getAllProjectsPaths() {
  return LocalStorageUtils.all()
}

export function clearProjectPath(path) {
  LocalStorageUtils.clear(path)
}

export function isPathExists(path) {
  return pathExists.sync(path)
}

export function iterateProjects(callback) {
  let projects = getAllProjectsPaths()
  _.each(projects, callback)
}

export function writeConfigToFile(path, config, callback) {
  let yamlConfig = YAML.stringify(config,2);
  fs.writeFile(path+separator+'_config.yml', yamlConfig, callback)
}

export function readConfigFile(path) {
  return YAML.load(path+separator+'_config.yml')
}
