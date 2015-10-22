$(document.ready(InitChart()));
function InitChart() {

  var precipData = [{
    'keyword': "payday loans",
    'x': 1,
    'y': 5
  }, {
    'keyword': "payday loans",
    'x': 20,
    'y': 20
  }, {
    'keyword': "payday loans",
    'x': 40,
    'y': 10
  }, {
    'keyword': "payday loans",
    'x': 60,
    'y': 40
  }, {
    'keyword': "payday loans",
    'x': 80,
    'y': 5
  }, {
    'keyword': "payday loans",
    'x': 100,
    'y': 100
  }];

  var barChart = d3.select('#precip-chart'),
      width = 1000,
      height = 500,
      margins = {
        top: 30,
        right: 20,
        bottom: 20,
        left: 50
      };
  var xRange = d3.scale.ordinal()
          .rangeRoundBands([margins.left, width - margins.right], 0.1)
          .domain(precipData.map(function (d) {
                return d.x;
          }));
  var yRange = d3.scale.linear()
          .range([height - margins.top, margins.bottom])
          .domain([0, d3.max(precipData, function (d) {
            return d.y;
            })
          ]);
  var xAxis = d3.svg.axis()
          .scale(xRange)
          .tickSize(5)
          .tickSubdivide(true)
          .tickFormat(function(d) {
            console.log(precipData[d].keyword);
            return precipData[d].keyword;
          })
          .orient("bottom");

  var yAxis = d3.svg.axis()
          .scale(yRange)
          .tickSize(5)
          .orient("left")
          .tickSubdivide(true);

  barChart.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
      .call(xAxis);

  barChart.append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (margins.left) + ',0)')
      .call(yAxis);

  barChart.selectAll('rect')
      .data(precipData)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return xRange(d.x);
      })
      .attr('y', function (d) {
        return yRange(d.y);
      })
      .attr('width', xRange.rangeBand())
      .attr('height', function (d) {
        return ((height - margins.bottom) - yRange(d.y));
      })
      .attr('fill', 'grey')
      .on('mouseover',function(d){
        d3.select(this)
            .attr('fill','blue');
      })
      .on('mouseout',function(d){
        d3.select(this)
            .attr('fill','grey');
      });
  console.log(barChart);
}