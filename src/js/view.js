const view = {
  renderInit() {
    // append header
    $('.page-header').append(
      `<div class="student-search"><form><input type="text"><button>Search</button></form>`
    );

    // building search value
    controller.setSearch();

    // append pagination
    $('body').append(`
    <div class="pagination"><ul></ul></div>
    `);
    let totalPage = controller.getTotalPage();
    controller.setSystemPage(totalPage);
    for (let i = 1; i <= totalPage; i++) {
      $('.pagination ul').append(
        `<li>
          <a>${i}</a>
        </li>`
      );
    }

    this.renderSearchResult();
    this.renderPagination();
  },

  renderSearchResult() {
    $('.student-item').hide();
    let searchResult = controller.getSearch();
    searchResult.show();
  },

  renderPagination() {
    let activePage = controller.getActivePage();
    let totalPage = controller.getTotalPage();

    $('.pagination a').show();
    $('.pagination a').removeClass('active');
    $('.pagination a').eq(activePage - 1).addClass('active');
    $('.pagination a').slice(totalPage, controller.getSystemPage()).hide();
  }
};
