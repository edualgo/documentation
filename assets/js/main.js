$(document).ready(function () {

  /* ===== Stickyfill ===== */
  /* Ref: https://github.com/wilddeer/stickyfill */
  // Add browser support to position: sticky
  var elements = $('.sticky');
  Stickyfill.add(elements);


  /* Activate scrollspy menu */
  $('body').scrollspy({ target: '#doc-menu', offset: 100 });

  /* Smooth scrolling */
  $('a.scrollto').on('click', function (e) {
    //store hash
    var target = this.hash;
    e.preventDefault();
    $('body').scrollTo(target, 800, { offset: 0, 'axis': 'y' });

  });

  /* Bootstrap lightbox */
  /* Ref: http://ashleydw.github.io/lightbox/ */

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

  // ===== Adding Copy Button =====
  var code_area = document.querySelectorAll('pre');
  var copyHtml = `<div class="tooltip" id="copy-btn"><a class="copy-btn"><span class="tooltiptext" id="tooltip">Copy to clipboard</span><i class="icon far fa-copy"></i></a></div>`;
  var i = 1;
  code_area.forEach(function (code) {
    console.log(code);
    if (i % 2) {
      code.innerHTML = code.innerHTML + copyHtml;
    }
    i++;
  })

  // ===== Copy Button Execution =====
  var copyBtn = document.querySelectorAll('#copy-btn');

  copyBtn.forEach(function (btn, idx) {

    btn.addEventListener("click", function () {
      var text = $(this).parent().text().replace('Copy to clipboard', '');
      var copyVal = document.createElement('input');
      copyVal.value = text;
      document.body.appendChild(copyVal);
      //console.log(copyVal.value)
      copyVal.select();
      document.execCommand('copy');
      document.body.removeChild(copyVal);

      var tooltips = document.querySelectorAll("#tooltip");
      tooltips.forEach(function (tooltip) {
        tooltip.innerHTML = "Copied Text";
      })
    })

    btn.addEventListener("mouseout", function () {
      var tooltips = document.querySelectorAll("#tooltip");
      tooltips.forEach(function (tooltip) {
        tooltip.innerHTML = "Copy to clipboard";
      })
    })
  })

});