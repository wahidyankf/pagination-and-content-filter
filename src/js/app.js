$(() => {
  view.renderInit();

  $('input').keyup(() => {
    controller.setActivePage(1);
    controller.setSearch();
    view.renderSearchResult();
    view.renderPagination();
  });

  $('.pagination li').click(function(e) {
    let activePage = parseInt($(e.target).text());
    controller.setActivePage(activePage);
    console.log(controller.getActivePage());
    view.renderSearchResult();
    view.renderPagination();
  });
});
