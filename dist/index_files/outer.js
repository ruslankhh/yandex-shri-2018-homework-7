;(function ($) {

  var App = (function () {
    var data = {};
    data.ok = true;
    data.$win = $(window);
    data.alreadyViewed = false;
    data.lhDealData = {};
    data.dealOnPage = false;
    data.iframeId = 'lh-deal-iframe';
    data.hashIframeId = '#' + data.iframeId;
    data.childFreeClassName = 'child-free';
    data.minPars = 4;
    data.afterPar = 3;
    data.minParLength = 150;

    return {
      run: function () {
        this.init();

        // Это выполнится, если #lh-deal-iframe есть на странице
        if (data.ok) {
          this.onIframeLoad();
          this.onWindowResize();
          this.sendViewedEvent();
        }
      },

      init: function () {
        var self = this;
        // Если айфрейм уже есть на странице, его не нужно вставлять динамически
        // То есть у таких айфреймов приоритет выше => динамически вставленное объявление уже не покажется
        data.$iframe = $(data.hashIframeId);
        if (data.$iframe.length > 0) {
          data.dealOnPage = true;
        }

        var content = null;

        try {
          content = ringo_inside_post_data.dynamic_sidebar_content;
        } catch (e) {
          // Контента нет, выходим
          return;
        }

        var injected = self._injectContent(content); //Вставим контент внутрь статьи

        // Если вставлено
        if (injected) {
          // Нужно узнать, что вставлено: объявление или что-то другое (текст, реклама)
          if (!data.dealOnPage) {
            //Объявляем эти переменные после вставки контента
            data.$iframe = $(data.hashIframeId);
            if (data.$iframe.length > 0) {
              data.dealOnPage = true; //на странице есть объявление
            }
          }
        }

        if (!data.dealOnPage) {
          data.ok = false; //на странице нет объявлений
          // console.log('lh-deal iframe is missing on this page.');
        }
      },

      onIframeLoad: function () {
        var self = this;

        data.$iframe.on('load', function () {
          self._defineVars();
          self._resizeIframe(data.$iframe);

          self._onButtonHover();
          self._onClick();

          data.$iframe.addClass('visible');
        });
      },

      onWindowResize: function () {
        var self = this;

        data.$win.resize(function () {
          self._resizeIframe(data.$iframe);
        });
      },


      //Только для объявлений
      sendViewedEvent: function () {
        var self = this;
        data.$win.on('scroll.lhDealParentScroll', function () {
          if (typeof data.$iframe === 'undefined' || typeof data.$iframe[0] === 'undefined') return;
          if (true === data.alreadyViewed) return;

          var st = data.$win.scrollTop();
          var iframeOffsetTop = 0;
          if (lhUtils) {
            iframeOffsetTop = lhUtils.getCoords(data.$iframe[0]).top;
          } else {
            iframeOffsetTop = data.$iframe.offset().top;
            // console.warn('lhUtils is not defined');
          }

          iframeOffsetTop -= data.$win.outerHeight() / 2;
          iframeOffsetTop += data.$iframe.outerHeight() / 2;
          var iframeOffsetBottom = iframeOffsetTop + data.$iframe.outerHeight();

          if (st > iframeOffsetTop && st < iframeOffsetBottom) {
            if (data.lhDealData) {
              // console.log('Viewed!');
              data.alreadyViewed = true;
              data.$win.off('scroll.lhDealParentScroll');

              self._sendViewedByAjax(data.lhDealData.postId, data.lhDealData.ajaxUrl, function (resp) {
                if (resp.status !== 'ok') {
                  // console.error(response);
                }
              });

              self._handleView(data.lhDealData);
            } else {
              // console.warn('data.lhDealData is not defined')
            }
          }
        });
      },

      _onClick: function () {
        var self = this;
        data.$childDoc.find('.lh-deal-card__link').click(function () {
          self._handleClick(this);
        });
      },

      _onButtonHover: function () {
        data.$childDoc.find(".lh-deal-card__link").hover(function () {
          $(this).css('background-color', $(this).data('hoverColor'));
        }, function () {
          $(this).css('background-color', $(this).data('initialColor'));
        });
      },

      _resizeIframe: function ($iframe) {
        // var height = $($iframe[0].contentWindow.document.body).outerHeight();
        // $iframe.outerHeight(height);
        try {
          $iframe[0].style.height = $iframe[0].contentWindow.document.body.scrollHeight + 'px';
        } catch (e) {
          // do nothing
        }
      },

      _defineVars: function () {
        data.$childDoc = data.$iframe.contents();
        data.lhDealData = data.$iframe[0].contentWindow.lhDealData;
      },

      _sendViewedByAjax: function (postId, ajaxUrl, cb) {
        $.post(
            ajaxUrl,
            {
              action: 'increase-views',
              postId: postId
            },
            function (response) {
              response = JSON.parse(response);
              return cb(response);
            });
      },

      _handleClick: function (anchor) {
        dataLayer.push({
          'event': 'passEventToGa',
          'eventCategory': 'Клик по баннеру',
          'eventAction': anchor.href,
          'eventLabel': anchor.dataset.target,
          'eventValue': 1
        });
      },

      _handleView: function (data) {
        dataLayer.push({
          'event': 'passEventToGa',
          'eventCategory': 'Просмотр баннера',
          'eventAction': data.postId,
          'eventLabel': data.permalink,
          'eventValue': 1
        });
      },

      // Вставить внутрь статьи (динамически, с помощью js)
      _injectContent: function (content) {
        // Выбираем непустые теги <p>
        var $p = $('.post-content, .lh-card').children('p:not(:empty)');

        if ($p.length < 1) {
          return false;
        }

        //фильтруем
        var $beforeAd = $p.filter(function () {
          var $this = $(this);

          if (($this.html() !== '' && $this.text().length > data.minParLength) ||
              $this.children('.standard-btn, .small-btn').length > 0) {
            if (
                $this.next().text().length > data.minParLength ||
                $this.next('h1, h2, h3, h4, h5, h6').length > 0
            ) {
              return true;
            }
          }

          return false;
        });

        // Минимум 4 параграфа
        if ($p.length >= data.minPars && typeof content !== 'undefined' && content) {
          // Вставим после 3-го параграфа
          $beforeAd.eq(data.afterPar - 1).after(content);
          return true; // Контент вставлен!
        }

        //по умолчанию
        return false;
      }
    }
  })();

  $(document).ready(function () {
    App.run();
  });

  // Для объявления в сайдбаре, так как неправильно считало высоту контента айфрейма
  $(window).load(function () {
    $(window).resize();
  });

})(jQuery);
