function grmapper() {
    function retrperc(){
            for (var i = 0; i < 1; i++) {
                var num=parseInt(Math.random().toFixed(2)*100);
                if (num<10 || num>70) {
                    i-=1;
                }
                else{
                    return String(num)+'%';
                }
            }
        }



    var width = 400,
        height = 300,
        root;

    var force = d3.layout.force()
        .linkDistance(15)
        .charge(-120)
        .gravity(.06)
        .size([width, height])
        .on("tick", tick);

    var svg = d3.select("#loco").append("svg")
        .attr("text-align","right")
        .attr("display","block")
        .attr("margin","auto")
        .attr("width", '100%')
        .attr("height", height);

    var link = svg.selectAll(".link"),
        node = svg.selectAll(".node");

    // d3.json("graph.json", function(error, json) {
    //   if (error){
    //   	json=
    //   	{
    // 	 "name": "flare","size": 3938,"percent":"14%",
    // 	 "children": [
    // 	  {
    // 	   "name": "analytics","size": 9999,"percent":"34%",
    // 	   "children": [
    // 	    {
    // 	     "name": "cluster","size": 4499,"percent":"54%",
    // 	     "children": [
    // 	      {"name": "AgglomerativeCluster", "size": 3938,"percent":"13%",},
    // 	      {"name": "CommunityStructure", "size": 3812,"percent":"14%",},
    // 	      {"name": "HierarchicalCluster", "size": 6714,"percent":"12%",},
    // 	      {"name": "MergeEdge", "size": 743,"percent":"10%",}
    // 	     ]
    // 	    },
    // 	    {
    // 	     "name": "graph","size": 7938,"percent":"51%",
    // 	     "children": [
    // 	      {"name": "BetweennessCentrality", "size": 3534,"percent":"23%",},
    // 	      {"name": "LinkDistance", "size": 5731,"percent":"31%",},
    // 	      {"name": "MaxFlowMinCut", "size": 7840,"percent":"23%",},
    // 	      {"name": "ShortestPaths", "size": 5914,"percent":"7%",},
    // 	      {"name": "SpanningTree", "size": 3416,"percent":"5%",}
    // 	     ]
    // 	    },
    // 	    {
    // 	     "name": "optimization","size": 8938,"percent":"6%",
    // 	     "children": [
    // 	      {"name": "AspectRatioBanker", "size": 7074,"percent":"24%",}
    // 	     ]
    // 	    }
    // 	   ]
    // 	  }
    // 	 ]
    // 	}
    //
    //   }
    //   root = json;
    //   update();
    // });
    // root=
    //   	{
    // 	 "name": "flare","size": 3938,"percent":"14%",
    // 	 "children": [
    // 	  {
    // 	   "name": "analytics","size": 9999,"percent":"34%",
    // 	   "children": [
    // 	    {
    // 	     "name": "cluster","size": 4499,"percent":"54%",
    // 	     "children": [
    // 	      {"name": "AgglomerativeCluster", "size": 3938,"percent":"13%",},
    // 	      {"name": "CommunityStructure", "size": 3812,"percent":"14%",},
    // 	      {"name": "HierarchicalCluster", "size": 6714,"percent":"12%",},
    // 	      {"name": "MergeEdge", "size": 743,"percent":"10%",}
    // 	     ]
    // 	    },
    // 	    {
    // 	     "name": "graph","size": 7938,"percent":"51%",
    // 	     "children": [
    // 	      {"name": "BetweennessCentrality", "size": 3534,"percent":"23%",},
    // 	      {"name": "LinkDistance", "size": 5731,"percent":"31%",},
    // 	      {"name": "MaxFlowMinCut", "size": 7840,"percent":"23%",},
    // 	      {"name": "ShortestPaths", "size": 5914,"percent":"7%",},
    // 	      {"name": "SpanningTree", "size": 3416,"percent":"5%",}
    // 	     ]
    // 	    },
    // 	    {
    // 	     "name": "optimization","size": 8938,"percent":"6%",
    // 	     "children": [
    // 	      {"name": "AspectRatioBanker", "size": 7074,"percent":"24%",}
    // 	     ]
    // 	    }
    // 	   ]
    // 	  }
    // 	 ]
    // 	}
    // root=
    //     {
    //      "name": "flare","size": 3938,"percent":retrperc(),
    //      "children": [
    //       {
    //        "name": "analytics","size": 9999,"percent":retrperc(),
    //        "children": [
    //         {
    //          "name": "cluster","size": 4499,"percent":retrperc(),
    //          "children": [
    //           {"name": "AgglomerativeCluster", "size": 3938,"percent":retrperc(),},
    //           {"name": "CommunityStructure", "size": 3812,"percent":retrperc(),},
    //           {"name": "HierarchicalCluster", "size": 6714,"percent":retrperc(),},
    //           {"name": "MergeEdge", "size": 743,"percent":retrperc(),}
    //          ]
    //         },
    //         {
    //          "name": "graph","size": 7938,"percent":retrperc(),
    //          "children": [
    //           {"name": "BetweennessCentrality", "size": 3534,"percent":retrperc(),},
    //           {"name": "LinkDistance", "size": 5731,"percent":retrperc(),},
    //           {"name": "MaxFlowMinCut", "size": 7840,"percent":retrperc(),},
    //           {"name": "ShortestPaths", "size": 5914,"percent":retrperc(),},
    //           {"name": "SpanningTree", "size": 3416,"percent":retrperc(),}
    //          ]
    //         },
    //         {
    //          "name": "optimization","size": 8938,"percent":retrperc(),
    //          "children": [
    //           {"name": "AspectRatioBanker", "size": 7074,"percent":retrperc(),}
    //          ]
    //         }
    //        ]
    //       }
    //      ]
    //     }

    root={
        "name": "Airplane","size": 3938,"percent":retrperc(),
        "children": [
         {
          "name": "Scene1","size": 9999,"percent":retrperc(),
          "children": [
           {
            "name": "UnluckPSPickup","size": 4499,"percent":retrperc(),
            "children": [
             {"name": "PickMeUp()", "size": 3938,"percent":retrperc(),}
            ],
           },
           {
            "name": "UnluckPSBird","size": 7938,"percent":retrperc(),
            "children": [
             {"name": "Activate()", "size": 3534,"percent":retrperc(),},
             {"name": "FlapAway()", "size": 5731,"percent":retrperc(),}
            ]
           },
           {
            "name": "UnluckPSGhost","size": 8938,"percent":retrperc(),
            "children": [
             {"name": "Playbach", "size": 7074,"percent":retrperc(),},
             {"name": "EmitSmoke", "size": 7074,"percent":retrperc(),}
            ]
           }
          ]
         },
         {
          "name": "Scene3","size": 9999,"percent":retrperc(),
          "children": [
           {
            "name": "UnluckPSPickup","size": 4499,"percent":retrperc(),
            "children": [
             {"name": "PickMeUp()", "size": 3938,"percent":retrperc(),}
            ],
           },
           {
            "name": "UnluckPSBird","size": 7938,"percent":retrperc(),
            "children": [
             {"name": "Activate()", "size": 3534,"percent":retrperc(),},
             {"name": "FlapAway()", "size": 5731,"percent":retrperc(),}
            ]
           },
           {
            "name": "UnluckPSGhost","size": 8938,"percent":retrperc(),
            "children": [
             {"name": "Playbach", "size": 7074,"percent":retrperc(),},
             {"name": "EmitSmoke", "size": 7074,"percent":retrperc(),}
            ]
           }
          ]
         },
         {
          "name": "Scene2","size": 9999,"percent":retrperc(),
          "children": [
           {
            "name": "UnluckPSPickup","size": 4499,"percent":retrperc(),
            "children": [
             {"name": "PickMeUp()", "size": 3938,"percent":retrperc(),}
            ],
           },
           {
            "name": "UnluckPSBird","size": 7938,"percent":retrperc(),
            "children": [
             {"name": "Activate()", "size": 3534,"percent":retrperc(),},
             {"name": "FlapAway()", "size": 5731,"percent":retrperc(),}
            ]
           },
           {
            "name": "UnluckPSGhost","size": 8938,"percent":retrperc(),
            "children": [
             {"name": "Playbach", "size": 7074,"percent":retrperc(),},
             {"name": "EmitSmoke", "size": 7074,"percent":retrperc(),}
            ]
           }
          ]
         },
         {
          "name": "Scene4","size": 9999,"percent":retrperc(),
          "children": []
         }
        ]
       }
    update();
    function update() {
      var nodes = flatten(root),
          links = d3.layout.tree().links(nodes);

      // Restart the force layout.
      force
          .nodes(nodes)
          .links(links)
          .start();

      // Update links.
      link = link.data(links, function(d) { return d.target.id; });

      link.exit().remove();

      link.enter().insert("line", ".node")
          .attr("class", "link");

      // Update nodes.
      node = node.data(nodes, function(d) { return d.id; });

      node.exit().remove();

      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .on("click", click)
          .call(force.drag);

      nodeEnter.append("circle").attr("r", function(d) { return (parseInt((d.percent).slice(0,-1))) / 3 || 4.5; });
          // .attr("r", function(d) { return Math.sqrt(d.size) / 5 || 4.5; });


      nodeEnter.append("text")
          .attr("dy", ".35em")
          .text(function(d) { return d.percent; });

      node.select("circle")
          .style("fill", color);

      var nodeLabels = node.append("svg:text")
        .attr({
            "class": "node-label",
            'dy': 24,
            "text-anchor": "middle"
        })
        .text(function(d) { return d.name; });
    }

    function tick() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
    function labeler(pnum) {
        var num=parseInt(pnum.slice(0,-1));
        if(num>60){
            return "#E74C3C";
        }
        else if(num>50){
            return "#fd8d3c";
        }
        else {
            return "#c6dbef";
        }

    }
    function color(d) {
        return d._children ? labeler(d.percent) // collapsed package
          : d.children ? labeler(d.percent) // expanded package
          : labeler(d.percent); // leaf node
      // return d._children ? "#3182bd" // collapsed package
      //     : d.children ? "#c6dbef" // expanded package
      //     : "#fd8d3c"; // leaf node

    }

    // Toggle children on click.
    function click(d) {
      if (d3.event.defaultPrevented) return; // ignore drag
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update();
    }

    // Returns a list of all nodes under the root.
    function flatten(root) {
      var nodes = [], i = 0;

      function recurse(node) {
        if (node.children) node.children.forEach(recurse);
        if (!node.id) node.id = ++i;
        nodes.push(node);
      }

      recurse(root);
      return nodes;
    }

}
function decade(){
    var today = new Date(Date.now());
    var dt=String(new Date(today.getYear()+1900,today.getMonth()-1, today.getDate()+Math.random() *12, Math.random()*24 + 2, Math.random()*60));
    return dt.split('(')[0];
}
