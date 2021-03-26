var nodes;
var edges;
var network;
var nodeIds = 0;
var edgeIds = 0;
class Stack {
	#items = []
	push = (element) => this.#items.push(element)
	pop = () => this.#items.pop()
	isEmpty = () => this.#items.length === 0
	empty = () => (this.#items.length = 0)
	size = () => this.#items.length
  }

class Queue {
	#items = []
	enqueue = (item) => this.#items.splice(0, 0, item)
	dequeue = () => this.#items.pop()
	isEmpty = () => this.#items.length === 0
	empty = () => (this.#items.length = 0)
	size = () => this.#items.length
  }

function addNode() {
	try {
		nodes.add({
			id: document.getElementById("node-insert").value,
			label: document.getElementById("node-insert").value + "\n h(" + document.getElementById("heuristic").value + ")",
			heuristic: document.getElementById("heuristic").value,
			color: "lightblue",
			
		});
		console.log(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function addNode1(node1) {
	try {
		nodes.add({
			id: node1+"d",
			label: node1,
			
		});
		console.log(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function delNode() {
	try { 
		nodes.remove({
			id: document.getElementById("node-delete").value,
		});	
		console.clear(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function addEdge() {
	try {
		edges.add({
			id: document.getElementById("node-from").value.concat("-",document.getElementById("node-to").value),
			from: document.getElementById("node-from").value,
			to: document.getElementById("node-to").value,
			label : document.getElementById("weight").value,
			arrows: "to" ,
			font: { align: "top" },
			color: "black",
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}

}

function UpdW() {
	try {
		edges.update({
			id: document.getElementById("node-from1").value.concat("-",document.getElementById("node-to1").value),
			label : document.getElementById("new-weight").value,
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}
}

function UpdH() {
	try {
		nodes.update({
			id: document.getElementById("node1").value,
			label: document.getElementById("node1").value + "\n h(" + document.getElementById("heuristic1").value + ")",
            heuristic: document.getElementById("heuristic1").value,
			
		});
		console.log(nodes);
	} 
	catch (error) {
		alert(error);
	}
}
function DelE() {
	try { 
		edges.remove({
			id: document.getElementById("node-from2").value.concat("-",document.getElementById("node-to2").value),
		});	
		console.clear(nodes);
	} 
	catch (error) {
		alert(error);
	}
	
	
		
}
function addEdge1(node1,node2,weight) {
	try {
		edges.add({
			id: node1.concat("-",node2)+"d",
			from: node1+"d",
			to: node2+"d",
			label : weight,
			arrows: "to" ,
			font: { align: "top" },
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}
}
function Adj(node) 
{   var a =[];
	for( x in edges.getIds()) 
	{ 
		if(edges.get(String(edges.getIds()[x])).from==node)
		{
			a.push(edges.get(String(edges.getIds()[x])).to);
		}
	}
	return a;
}

function DFS() 
{
	let s = new Stack(nodes.length);
	let explored = new Set();
	s.push(document.getElementById("node3").value);
	explored.add(document.getElementById("node3").value);

	while (!s.isEmpty()) 
	{
	   let t = s.pop();

	   console.log(t);
	 
	   Adj(t).filter(n => !explored.has(n)).forEach(n => {explored.add(n);s.push(n);});
	}
 }
//  function sleep(miliseconds) {
// 	var currentTime = new Date().getTime();
 
// 	while (currentTime + miliseconds >= new Date().getTime()) {
// 	}
//  }

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

 function change_color_node(t, color_name){
	nodes.update({
		id: t,
		color:color_name,
	});
 }

 function change_color_edge(parent, child, color_name) {
	edges.update({
		id: parent+"-"+child,
		color:color_name,
	});
 }

async function backtrack(parent, start, end){
	console.log(end);
	let last_added = end;
	change_color_node(end, "pink");
	await sleep(500);
	while(last_added != start)
	{
		let x = parent[last_added];
		console.log(x);
		change_color_node(x, "pink");
		// edges.update({
		// 	id: x+"-"+last_added,
		// 	color:"red",
		// });
		change_color_edge(x, last_added, "red");
		await sleep(500);
		last_added = x;
	}

}

async function BFS() {

	let q = new Queue(nodes.length);
	let explored = new Set();
	let start_node = document.getElementById("node4").value;
	let end_node = document.getElementById("node5").value
	q.enqueue(document.getElementById("node4").value);
	var parent = {};
	// nodes.update({
	// 	id: document.getElementById("node4").value,
	// 	color:"red",
		
	// });
	change_color_node(document.getElementById("node4").value, "lightgreen");
	console.log(nodes);
	await sleep(500);
	explored.add(document.getElementById("node4").value);
	var b=0;
	while (!q.isEmpty()) {
	   let t = q.dequeue();
	   console.log(t);
	   if(b>0)
	   {
		change_color_node(t, "lightgreen");
	   }
	   if(t != start_node)
	   {
			change_color_edge(parent[t], t, "lightgreen");
	   }
	   b=b+1;
	   if(t == end_node)
	   	break;
	   Adj(t).filter(n => !explored.has(n)).forEach(n => {explored.add(n);q.enqueue(n);parent[n]=t;});
	   await sleep(500);
	}

	console.log(parent);
	backtrack(parent, start_node, end_node);
 }

function createGraph() {
	nodes = new vis.DataSet(
		[
			{
				id: "a",
				label: "a\nh(10)",
				heuristic: "10",
				color: "lightblue",
			},
			{
				id: "b",
				label: "b\nh(20)",
				heuristic: "20",
				color: "lightblue",
			},
			{
				id: "c",
				label: "c\nh(5)",
				heuristic: "5",
				color: "lightblue",
			},
			{
				id: "d",
				label: "d\nh(6)",
				heuristic: "6",
				color: "lightblue",
			},
			{
				id: "e",
				label: "e\nh(0)",
				heuristic: "0",
				color: "lightblue",
			},
		]
	);
	edges = new vis.DataSet(
		[
			{
				id: "a-b",
				from: "a",
				to: "b",
				label : "100",
				arrows: "to" ,
				color: "black",
				font: { align: "top" },
			},
			{
				id: "a-c",
				from: "a",
				to: "c",
				label : "200",
				arrows: "to" ,
				font: { align: "top" },
				color: "black",
			},
			{
				id: "b-c",
				from: "b",
				to: "c",
				label : "300",
				arrows: "to" ,
				font: { align: "top" },
				color: "black",
			},
			{
				id: "b-d",
				from: "b",
				to: "d",
				label : "150",
				arrows: "to" ,
				font: { align: "top" },
				color: "black",
			},
			{
				id: "c-e",
				from: "c",
				to: "e",
				label : "160",
				arrows: "to" ,
				font: { align: "top" },
				color: "black",
			},
			{
				id: "d-e",
				from: "d",
				to: "e",
				label : "170",
				arrows: "to" ,
				font: { align: "top" },
				color: "black",
			},
		]
	);
	
	var container = document.getElementById('graph');
	
	var data = {
		    nodes: nodes,
		    edges: edges
		};
	var options = {};
	network = new vis.Network(container, data, options);

}

window.addEventListener("load", ()=>{
	createGraph();
})
