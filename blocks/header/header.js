import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 821px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
    // collapse menu on focus lost
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const logoImg = navBrand.querySelector('picture');
  logoImg.addEventListener('click', () => { window.location = '/index/home'; });
  logoImg.style.cursor = 'pointer';
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.appendChild(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  // top header section
  const topHeaderSection = document.createElement('section');
  topHeaderSection.className = 'top-header-section';

  // inner header section
  const innerHeaderContainer = document.createElement('div');
  innerHeaderContainer.className = 'inner-header-container';

  // header top left row
  const headerTopLeftRow = document.createElement('div');
  headerTopLeftRow.className = 'header-top-left-row';

  // region header top left
  const regionHeaderTopLeft = document.createElement('div');
  regionHeaderTopLeft.className = 'region region-header-top-left';
  headerTopLeftRow.append(regionHeaderTopLeft);

  // block-forprofessionals
  const blockForProfessionals = document.createElement('div');
  blockForProfessionals.className = 'block block-block-content block-block-content3b9622e3-b2c5-49e2-9ad6-61b149181646';
  blockForProfessionals.id = 'block-forprofessionals';
  regionHeaderTopLeft.append(blockForProfessionals);

  // content block
  const professionalBlock = document.createElement('div');
  professionalBlock.className = 'content';
  professionalBlock.innerHTML = ' ';
  blockForProfessionals.append(professionalBlock);

  // header top right row
  const headerTopRightRow = document.createElement('div');
  headerTopRightRow.className = 'header-top-right-row';

  // region header top right
  const regionHeaderTopRight = document.createElement('div');
  regionHeaderTopRight.className = 'region region-header-top-right';
  headerTopRightRow.append(regionHeaderTopRight);

  // prescribinginfo
  const prescribinginfo = document.createElement('div');
  prescribinginfo.id = 'block-new-otsuka-abilifymycite-hcp-prescribinginfo';
  prescribinginfo.className = 'header-top header-top-left prescribing-info block block-block-content block-block-contentf3e8c581-3fa1-4b97-b769-cea9d477c953';
  regionHeaderTopRight.append(prescribinginfo);

  // prescribing content block
  const prescribingBlock = document.createElement('div');
  prescribingBlock.className = 'content';
  prescribingBlock.innerHTML = 'THIS SITE IS INTENDED FOR US HEALTHCARE PROFESSIONALS';
  prescribinginfo.append(prescribingBlock);

  const paragraph = document.createElement('p');
  prescribingBlock.append(paragraph);

  innerHeaderContainer.append(headerTopLeftRow);
  innerHeaderContainer.append(headerTopRightRow);
  topHeaderSection.append(innerHeaderContainer);

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(topHeaderSection);
  block.append(navWrapper);

  const menuItems = document.querySelectorAll('div.default-content-wrapper a');
  const currentPath = window.location.pathname;

  menuItems.forEach((item) => {
    if (item.getAttribute('href') === currentPath) {
      item.parentElement.classList.add('active');
    }
  });
}
