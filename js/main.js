function tabs() {
  const elems = document.querySelector('.tabs');
  let instance = M.Tabs.init(elems);
}

function tooltip() {
  const elems = document.querySelectorAll('.tooltipped');
  let instances = M.Tooltip.init(elems);
}

function dropdown() {
  const elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems);
}


document.addEventListener('DOMContentLoaded', () => {
  tabs()
  tooltip()
  dropdown()
})