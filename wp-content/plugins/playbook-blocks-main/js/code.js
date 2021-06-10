document.addEventListener("DOMContentLoaded", function() {
  // console.log("Playbook plugin loaded now");
  // change to accessible classes
  const toggleVisibility = function(event) {
    // console.log("Playbook clicked");
    event.preventDefault();
    const expandedContent = event.target.nextElementSibling;
    if (!expandedContent || !expandedContent.classList.contains("collapse-content")) {
      return;
    }
  
    if (expandedContent.style.display == 'block') {
      expandedContent.style.display = 'none';
      event.target.classList.remove('content-shown');
      event.target.classList.add('content-hidden');
      event.target.setAttribute('aria-expanded','false');
    } else {
      expandedContent.style.display = 'block';
      event.target.classList.add('content-shown');
      event.target.classList.remove('content-hidden');
      event.target.setAttribute('aria-expanded','true');
    }
  };
  
  document.querySelectorAll('.collapse-list').forEach(list => {
    list.addEventListener('click', toggleVisibility);
  });

  const toggleAccordion = function(event) {
    // console.log("Playbook accordion event", event);
    // console.log("Playbook accordion event.target", event.target);
    // console.log("Playbook accordion event.currentTarget", event);
    // const content = document.querySelectorAll(event.target.nextElementSibling);
    event.preventDefault();

    const expandedContent = event.target.nextElementSibling;

    //  console.log("expandedContent", expandedContent);

    if (expandedContent.style.display == 'block') {
      //  console.log("expandedContent hide", expandedContent);
      expandedContent.style.display = 'none';
      event.target.classList.remove('content-shown');
      event.target.classList.add('content-hidden');
      event.target.setAttribute('aria-expanded','false');
    } else {
      //  console.log("expandedContent show", expandedContent);
      expandedContent.style.display = 'block';
      event.target.classList.add('content-shown');
      event.target.classList.remove('content-hidden');
      event.target.setAttribute('aria-expanded','true');
    }
  };
  
  document.querySelectorAll('.playbook-accordion-item-header').forEach(item => {
    item.addEventListener('click', toggleAccordion);
  });
  
  // document.querySelectorAll('.has-hds-button').forEach(item => {
  //   item.querySelector('.wp-block-button__link').classList.add('hds-button');
  // });


});