var data = [
	{ h1: "v1", h2: "v2", h3: "v3"},
	{ h1: "v1", h2: "v2", h3: "v3"},
	{ h1: "v1", h2: "v2", h3: "v3"},
];

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

function render (){
  var html = template({sort: data});
  console.log(html);
 $("#container").html(html);
}

render();
