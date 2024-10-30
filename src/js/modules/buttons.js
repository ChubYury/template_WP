//********************* Button for open footer tabs ****************
export function openFooter() {
  const [boxTabs] = document.getElementsByClassName('js-footer-tabs');
  const [btnFooter] = document.getElementsByClassName('js-footer-tabs-btn');
  const blockList = [...boxTabs.getElementsByClassName('footer_block')];
  
  // console.log(boxTabs.children[0]);
  // console.log(el.lastElementChild);
  btnFooter.addEventListener('click', el => {
    el.preventDefault;
    // console.log(btnFooter.classList);
    btnFooter.classList.toggle('btn-second--close');
    blockList.forEach(el => {
      const childEl = el.lastElementChild;
      const checkBlockList = childEl.className.includes('footer_block-list');
      const checkBlockNews = childEl.className.includes('footer_block-news');

      if (checkBlockList) childEl.classList.toggle('footer_block-list--close');
      if (checkBlockNews) childEl.classList.toggle('footer_block-news--close');
    });
  })
}