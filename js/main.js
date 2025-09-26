function tabs() {
  const elems = document.querySelector('.tabs');
  let instance = M.Tabs.init(elems);
}

function tooltip() {
  const elems = document.querySelectorAll('.tooltipped');
  let instances = M.Tooltip.init(elems, {
    margin: 35,
  });
}

function dropdown() {
  const elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems, {
    // constrainWidth: true,
  });
}


document.addEventListener('DOMContentLoaded', () => {
  tabs()
  tooltip()
  dropdown()
})