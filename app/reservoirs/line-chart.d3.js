var width = 800;
var height = 500;

var svg = d3.select('body').append('svg')
    .attr("width", width)
    .attr("height", height);
var svg_data = svg.append('g')
    .attr('class', 'data');
var svg_axis = svg.append('g')
    .attr('class', 'axis');
var svg_x_axis = svg_axis.append('g')
    .attr('class', 'x-axis');
var svg_y_axis = svg_axis.append('g')
    .attr('class', 'y-axis');

// Margins
var margin = {top: 40, right: 40, bottom: 40, left:60};

// Domain for values
var start = new Date('2014-10-01');
var end = new Date('2015-10-01');

function draw() {

  var x_scale = d3.time.scale()
      .domain([start, end])
      .range([margin.left, 800 - margin.right])
      .nice();

  var y_scale = d3.scale.linear()
      .range([margin.bottom, 500 - margin.top])
      .nice();

  var x_axis = d3.svg.axis()
      .scale(x_scale)
      .orient('top')
      .tickFormat(d3.time.format('%b %d'));

  svg_x_axis
      .attr("transform", "translate(0, " + margin.top + ")")
      .call(x_axis);

  var y_axis = d3.svg.axis()
      .scale(y_scale)
      .orient('left')
      .tickFormat(d3.format(".3s"));

  svg_y_axis
      .attr("transform", "translate(" + margin.left + ")")
      .call(y_axis);
}