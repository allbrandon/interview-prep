// let id = setTimeout(callback, delay);
// clearTimeout(id);

// setTimeout(callback, delay);
// setTimeout(callback, delay);
// setTimeout(callback, delay);

const oldTimeout = window.setTimeout;
let timeouts = []; 

window.setTimeout = function(callback, delay) {
  let id = oldTimeout(callback, delay);
  timeouts.push(id);
}

function clearAllTimeout  {
  timeouts.forEach(id => window.clearTimeout(id))
  
  timeouts = [];
  
}