/* 网易方案 */

function font () {
  // 将来拿着设计稿来做
  // document.documentElement.style.fontSize = document.documentElement.clientWidth/ 7.5 + 'px' 

  // 直接在浏览器模拟器中做的
  document.documentElement.style.fontSize = document.documentElement.clientWidth/ 3.75 + 'px' 
}


font()


window.onresize = font 