import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// const isDesktop = window.matchMedia('(min-width: 900px)');

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);
  var footersvg = <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  	 width="100%" viewBox="0 0 1912 66" enable-background="new 0 0 1912 66" xml:space="preserve">
                  <path fill="#273925" opacity="1.000000" stroke="none"
                  	d="
                  M1913.000000,44.000000
                  	C1913.000000,51.020947 1913.000000,58.041897 1912.556396,65.526413
                  	C1275.075195,65.993317 638.037598,65.996658 1.000000,66.000000
                  	C1.000000,58.979053 1.000000,51.958103 1.443604,44.468307
                  	C638.924805,43.999638 1275.962402,43.999817 1913.000000,44.000000
                  M4.713008,64.019440
                  	C4.487554,64.310493 4.262100,64.601547 4.036643,64.892593
                  	C4.201982,64.913506 4.367169,64.951256 4.532685,64.952759
                  	C6.365452,64.969437 8.198269,64.991516 10.031073,64.991524
                  	C387.176147,64.993134 764.321228,64.993080 1141.466309,64.993080
                  	C1395.951782,64.993080 1650.437134,64.993080 1904.922607,64.993080
                  	C1906.716309,64.993080 1908.510010,64.993080 1910.303711,64.993080
                  	C1910.292236,64.663612 1910.280640,64.334137 1910.269043,64.004669
                  	C1275.332520,64.004669 640.395996,64.004669 4.713008,64.019440
                  z"/>
                  <path fill="#B9DDBA" opacity="1.000000" stroke="none"
                  	d="
                  M1.000000,15.000000
                  	C1.000000,10.334367 1.000000,5.668735 1.000000,1.036591
                  	C638.333313,1.036591 1275.666626,1.036591 1913.000000,1.036591
                  	C1913.000000,5.405559 1913.000000,9.737935 1912.534424,14.510831
                  	C1910.569214,14.945005 1909.069580,14.933104 1907.569946,14.933102
                  	C1273.712280,14.932343 639.854553,14.932343 5.996817,14.935216
                  	C4.331212,14.935223 2.665606,14.977478 1.000000,15.000000
                  z"/>
                  <path fill="#142916" opacity="1.000000" stroke="none"
                  	d="
                  M1913.000000,43.564453
                  	C1275.962402,43.999817 638.924805,43.999638 1.443604,43.999725
                  	C1.000000,41.957031 1.000000,39.914062 1.468378,37.417122
                  	C3.269759,36.956608 4.602762,36.944340 5.935766,36.944340
                  	C639.957886,36.943497 1273.979980,36.943447 1908.002075,36.945797
                  	C1909.668091,36.945801 1911.333984,36.981155 1913.000000,37.000000
                  	C1913.000000,39.042969 1913.000000,41.085938 1913.000000,43.564453
                  z"/>
                  <path fill="#273925" opacity="1.000000" stroke="none"
                  	d="
                  M1913.000000,25.000000
                  	C1913.000000,26.714375 1913.000000,28.428751 1912.531372,30.567635
                  	C1624.628540,30.990677 1337.194214,30.986961 1049.760010,30.988323
                  	C700.173340,30.989981 350.586670,30.995916 1.000000,31.000000
                  	C1.000000,29.285625 1.000000,27.571249 1.468319,25.409061
                  	C636.791687,24.963451 1271.646729,24.965624 1906.501831,24.969183
                  	C1908.667847,24.969196 1910.833984,24.989286 1913.000000,25.000000
                  z"/>
                  <path fill="#324638" opacity="1.000000" stroke="none"
                  	d="
                  M1.000000,31.428463
                  	C350.586670,30.995916 700.173340,30.989981 1049.760010,30.988323
                  	C1337.194214,30.986961 1624.628540,30.990677 1912.531372,30.996071
                  	C1913.000000,32.714359 1913.000000,34.428715 1913.000000,36.571537
                  	C1911.333984,36.981155 1909.668091,36.945801 1908.002075,36.945797
                  	C1273.979980,36.943447 639.957886,36.943497 5.935766,36.944340
                  	C4.602762,36.944340 3.269759,36.956608 1.468378,36.981575
                  	C1.000000,35.285641 1.000000,33.571281 1.000000,31.428463
                  z"/>
                  <path fill="#678166" opacity="1.000000" stroke="none"
                  	d="
                  M1.000000,15.416666
                  	C2.665606,14.977478 4.331212,14.935223 5.996817,14.935216
                  	C639.854553,14.932343 1273.712280,14.932343 1907.569946,14.933102
                  	C1909.069580,14.933104 1910.569214,14.945005 1912.534424,14.975676
                  	C1913.000000,16.388889 1913.000000,17.777779 1912.531616,19.564646
                  	C1910.563599,19.955839 1909.064087,19.943111 1907.564453,19.943110
                  	C1274.042358,19.942265 640.520203,19.942234 6.998043,19.944672
                  	C4.998695,19.944679 2.999347,19.980764 1.000000,20.000000
                  	C1.000000,18.611111 1.000000,17.222221 1.000000,15.416666
                  z"/>
                  <path fill="#8AA98A" opacity="1.000000" stroke="none"
                  	d="
                  M1.000000,20.416666
                  	C2.999347,19.980764 4.998695,19.944679 6.998043,19.944672
                  	C640.520203,19.942234 1274.042358,19.942265 1907.564453,19.943110
                  	C1909.064087,19.943111 1910.563599,19.955839 1912.531616,19.981312
                  	C1913.000000,21.388889 1913.000000,22.777779 1913.000000,24.583334
                  	C1910.833984,24.989286 1908.667847,24.969196 1906.501831,24.969183
                  	C1271.646729,24.965624 636.791687,24.963451 1.468319,24.980625
                  	C1.000000,23.611111 1.000000,22.222221 1.000000,20.416666
                  z"/>
                  <path fill="#324638" opacity="1.000000" stroke="none"
                  	d="
                  M1.000000,66.500000
                  	C638.037598,65.996658 1275.075195,65.993317 1912.556396,65.994987
                  	C1912.833374,66.333336 1912.684082,66.943810 1912.497192,66.955551
                  	C1911.169067,67.038994 1909.833374,67.000000 1908.500000,67.000000
                  	C1272.666626,67.000000 636.833313,67.000000 1.000000,66.500000
                  z"/>
                  <path fill="#324638" opacity="1.000000" stroke="none"
                  	d="
                  M5.086216,64.012054
                  	C640.395996,64.004669 1275.332520,64.004669 1910.269043,64.004669
                  	C1910.280640,64.334137 1910.292236,64.663612 1910.303711,64.993080
                  	C1908.510010,64.993080 1906.716309,64.993080 1904.922607,64.993080
                  	C1650.437134,64.993080 1395.951782,64.993080 1141.466309,64.993080
                  	C764.321228,64.993080 387.176147,64.993134 10.031073,64.991524
                  	C8.198269,64.991516 6.365452,64.969437 4.532685,64.952759
                  	C4.367169,64.951256 4.201982,64.913506 4.036644,64.892593
                  	C4.262100,64.601547 4.487554,64.310493 5.086216,64.012054
                  z"/>
                  </svg>;

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  footer.append(footersvg);
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  // test
  footer.className = 'desktop-footer';
  // footer.className = 'layout-footer-left';
  // footer.className = 'layout-footer-right';
  // footer.className = 'logo';
  // footer.className = 'div';
  // footer.className = 'div-wrapper';
  // footer.className = 'flexcontainer';
  // footer.className = 'text-i';
  // footer.className = 'text-wrapper';
  // footer.className = 'navigation';
  // footer.className = 'div-2';
  // footer.className = 'nav-item-level';
  // footer.className = 'horizontal-nav-item';
  // footer.className = 'wrapper';
  // footer.className = 'text';
  // footer.className = 'arrow';
  // footer.className = 'text-2';
  // footer.className = 'horizontal-nav-item-2';
  // footer.className = 'nav-item';
  // footer.className = 'text-3';
  // footer.className = 'text-wrapper-2';
  // footer.className = 'text-4';
}
