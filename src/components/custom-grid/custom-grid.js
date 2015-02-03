define(['knockout', 'text!./custom-grid.html'], function(ko, templateMarkup) {

  function CustomGrid(params) {
    this.message = ko.observable('Hello from the custom-grid component!');
  }
  
  return { viewModel: CustomGrid, template: templateMarkup };

});
