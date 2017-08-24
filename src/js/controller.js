const controller = {
  getSearch() {
    let sliceStart = (data.page.active - 1) * 10;
    let sliceEnd = data.page.active * 10;
    return data.search.$result.slice(sliceStart, sliceEnd);
  },
  setSearch() {
    // set the search value
    data.search.value = $('input').val();
    data.search.value = data.search.value.toLowerCase();
    let $selector = `:contains("${data.search.value}")`;

    if (data.search.value == '') {
      data.search.$result = $('.student-item');
    } else {
      data.search.$result = $('.student-item').filter($selector);
    }

    // set the pagination
    data.page.total = Math.ceil(data.search.$result.length / 10);
  },

  getTotalPage() {
    return data.page.total;
  },

  setActivePage(activePage = 1) {
    data.page.active = activePage;
  },

  getActivePage() {
    return data.page.active;
  },

  setSystemPage(total) {
    data.page.allData = total;
  },

  getSystemPage() {
    return data.page.allData;
  }
};
