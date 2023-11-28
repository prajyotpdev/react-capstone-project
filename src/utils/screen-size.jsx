// windowSize.ts

export let isDesktop = false;
export let isTablet = false;
export let isMobile = false;

function updateWindowSize() {
  if (window.innerWidth >= 1440) {
    isDesktop = true;
    isTablet = false;
    isMobile = false;
    console.log('this is Desktop')
  } else if (window.innerWidth > 480 && window.innerWidth < 1440) {
    isDesktop = false;
    isTablet = true;
    isMobile = false;
    console.log('this is Tab')
  } else if (window.innerWidth <= 480) {
    isDesktop = false;
    isTablet = false;
    isMobile = true;
    console.log('this is Mobile')
  }
}


window.addEventListener('resize', updateWindowSize);
