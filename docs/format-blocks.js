$(document).ready(function() {
        $(".htmlsample").each(function(i, el) {
          var html = el.innerHTML;
          cleanHtml = html.replace(/\sstyle=".*"/g, '');
          $(el).append('<pre><code class="xml"></code></pre>');
          var code  = $(el).find('pre code');
          code.text(cleanHtml);
          code.each(function(i, ele) {
            console.log(ele);
            hljs.highlightBlock(ele);
          })
          
        });
      });