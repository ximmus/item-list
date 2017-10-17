/* 

// EXAMPLE COMPONENT //

// Register the component
ko.components.register("search-component", {
    
    viewModel: function(params) {
        var self = this;
        self.Show = params.show;
        self.Callback = params.callback;
        
        self.Submit = function() {
            
            // hide dialog
            self.Show(false);
            
            // return result
            self.Callback("result");
        };
    },
    
    template: "<div data-bind='visible: Show'><p>search dialog goes here</p><button data-bind='click: Submit'>Submit</button></div>"
});



// top level viewmodel
var vm = function() {
    var self = this;

    self.Result = ko.observable("");
    self.DialogVisible = ko.observable(false);
    // user has clicked Find button
    self.Find = function() {
        // show the dialog
        self.DialogVisible(true);
    };
    // callback
    self.Update = function(data) {
        self.Result(data);
    };
};

ko.applyBindings(new vm());

*/

ko.components.register("search-component", {

	viewModel: searchComponentVM,

	template: { require: 'text!search-component.html' }
});

// Search View Model
var searchComponentVM = function(params) {
		
		var self = this;
        
        self.items = ko.observableArray([]);
        
        for (i = 0; i < params.items.length; i++) { 
    		self.items().push(params.items[i]);
		}
        
        console.log(self.items());	
}





// top level viewmodel
var vm = function() {
    var self = this;

    // available items
    self.availableItems = [
    	{ name: "Item One",    quantity: 5 },
    	{ name: "Item Two",    quantity: 7 },
    	{ name: "Item Two",    quantity: 7 },
   		{ name: "Item Four",   quantity: 8 }
	];

    self.Result = ko.observable("");
    self.DialogVisible = ko.observable(false);
    // user has clicked Find button
    self.Find = function() {
        // show the dialog
        self.DialogVisible(true);
    };
    // callback
    self.Update = function(data) {
        self.Result(data);
    };
};

ko.applyBindings(new vm());

