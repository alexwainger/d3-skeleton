(function() {

  /*** This file is where you actually write your d3 code. Most of this stuff is standard setup that
  nobody (myself included) remembers how to do, so it's helpful to have it ready to go. Feel free to
  delete these comments once you understand what's going on ***/

  // These variables define the size of the SVG and how large the margins around the edges should be
  var margin = { top: 50, left: 50, right: 50, bottom: 50},
  height = 400 - margin.top - margin.bottom,
  width = 600 - margin.left - margin.right;

  // This somewhat cryptic block grabs the "chart" div from the html file,
  // adds an SVG with attributes height and width, then adds a "g" element (basically the SVG-equivalent of a div) 
  // inside the SVG and translates it by the margins, so that when you append elements
  // to the SVG, the origin is shifted from (0,0) to (margin.left, margin.top)
  // Load the index file to see that the center of the red circle is 50 pixels in from the edges
  var svg = d3.select("#chart")
    .append("svg")
    .attr("height", height + margin.top + margin.bottom)
    .attr("width", width + margin.left + margin.right)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Usually, you'll have a CSV or JSON file with your data
  // d3.queue() loads the data using d3.csv or d3.json, and then calls
  // the "ready" function once the data is loaded.
  d3.queue()
    .defer(d3.csv, "test.csv", function(d) {
      d.age = +d.age;
      return d
    })
    .await(ready)
  
  // The anonymous function after "test.csv" gets each datapoint passed to it. The d3.csv method
  // treats everything as string, so line "d.age = +d.age;" turn the age variable into a number, then returns
  // the d object, so that in the ready function, you don't have to worry about the data being strings

  function ready(error, datapoints) {
    if (error) throw error;

    // Write your D3 inside this function!

    // Datapoints should be a list of 3 objects, each with a the three attributes from the test.csv file
    // You can see the result of this by opening the developer tools window of your browser
    console.log(datapoints)

    // Example: this circle has radius 10 and is placed at (0,0). However, the "svg" variable
    // we are appending to is actually a "g" element that has been shifted from the origin,
    // so that you have a nice border around the actual figure.
    svg.append("circle")
      .attr("x",0)
      .attr("y",0)
      .attr("r",10)
      .attr("fill", "red");

  }
})();