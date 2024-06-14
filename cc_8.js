//U08201790

function initialize() {
    const body = d3.select("body");

    // Create div elements as data points
    for (let i = 0; i < 10; i++) {
        body.append("div")
            .attr("class", "data-point")
            .on("mouseover", function() {
                d3.select(this).style("background-color", "firebrick");
            })
            .on("mouseout", function() {
                d3.select(this).style("background-color", "steelblue");
            });
    }
}


document.addEventListener("DOMContentLoaded", initialize);
