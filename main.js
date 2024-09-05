import './assets/scss/all.scss';

window.addEventListener('load', () => {
    setTimeout(() => {
      AOS.init({
        easing: 'ease-out-back',
        duration: 500,
        delay: 100   // 你的配置選項
      });
    }, 100); // 添加一段小延遲
  });


// hljs.initHighlightingOnLoad();

// 			$('.hero__scroll').on('click', function(e) {
// 				$('html, body').animate({
// 					scrollTop: $(window).height()
// 				}, 1200);
// 			});
		
console.log("Hello world!");