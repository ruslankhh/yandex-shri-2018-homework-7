jQuery(document).ready(function ($) {
  if (!$('body').hasClass('home')) return;

  var $links = $('[data-ab]');
  var $win = $(window);
  var events = []; //collect on scroll
  var pushedToServer = false;
  var storageKey = 'homePageAbTitle';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  function pushToServer() {
    if (pushedToServer)
      return;

    var url = '/wp-admin/admin-ajax.php';
    var data = {
      'events': events,
      'action': 'ab_testing'
    };

    $.post(url, data);

    pushedToServer = true;

    return null;
  }

  var UI = (function () {
    return {
      run: function () {
        this.init();
        this.addEvent();
        this.sendDataToServer();
      },

      init: function () {
        //удалим данные из стореджа
        if (typeof(Storage) !== "undefined") {
          localStorage.removeItem(storageKey);
        }

        $links.each(function () {
          var $this = $(this);
          var $title = $this.find('.ab-title').first();
          var titles = $this.data('titles');
          var index = getRandomInt(0, titles.length - 1);

          $title.text(titles[index]).css('opacity', 1);

          $this.attr('data-index', index);
        });
      },

      addEvent: function () {
        var addEvent = function () {
          $links.each(function () {
                var $this = $(this);

                //пропускаем шаг
                if ($this.data('added')) return true;

                if (elementInViewport(this)) {
                  events.push({
                    'event_type': 'view',
                    'post_id': $this.data('postid'),
                    'index': $this.data('index')
                  });

                  $this.data('added', true);
                }
              }
          );
        };

        addEvent();

        $win.on('scroll', addEvent);

        $links.on('click', function () {
          var $this = $(this);

          events.push({
            'event_type': 'click',
            'post_id': $this.data('postid'),
            'index': $this.data('index')
          });

          if (typeof(Storage) !== "undefined") {
            var dataToStore = {
              postId: $this.data('postid'),
              index: $this.data('index')
            };

            dataToStore = JSON.stringify(dataToStore);

            localStorage.setItem(storageKey, dataToStore);
          }

          pushToServer();
        });
      },

      sendDataToServer: function () {
        window.onbeforeunload = function () {
          pushToServer();
        };
      }
    }
  })();

  UI.run();

});