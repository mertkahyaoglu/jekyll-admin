const util = {
  get: function(key) {
    return localStorage.getItem(key)
  },
  set: function(key, value) {
    return localStorage.setItem(key, value)
  },
  all: function allStorage() {
    let archive = {},
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        archive[keys[i]] = localStorage.getItem(keys[i])
    }
    return archive
  },
  clear: function(key) {
    return localStorage.removeItem(key)
  }
}

export default util;
