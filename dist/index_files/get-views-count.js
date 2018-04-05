(function($) {
  function getViewsCount() {
    var $viewsCounts  = $('.views-counter');

    if ($viewsCounts.length === 0) return;

    var postIds = $.map($viewsCounts, function($viewsCount) {
      return $viewsCount.dataset.postId;
    });

    $.post(
      'https://lifehacker.ru/wp-content/plugins/lh-views/api.php',
      {
        action: 'get-views',
        postIds: postIds,
      },
      function(response) {
        response = JSON.parse(response);

        if (response.status !== 'ok') {
          console.error(response);
          return;
        }

        var postsViewCounts = response.viewsCounts;

        for (var postId in postsViewCounts) {
          var viewsCount = postsViewCounts[postId];
          var $viewsCount = $('.views-counter-' + postId);

          var formatedViewsCount = String(viewsCount).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

          $viewsCount.text(formatedViewsCount);

          if (viewsCount >= 100) {
            $viewsCount.parents('.js--views-counter--block').show();
          }
        }
      }
    );
  }

  $(document).ready(getViewsCount);
})(jQuery);