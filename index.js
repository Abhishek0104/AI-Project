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
			color: "blue",
			
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
 function sleep(miliseconds) {
	var currentTime = new Date().getTime();
 
	while (currentTime + miliseconds >= new Date().getTime()) {
	}
 }

function BFS() {

	let q = new Queue(nodes.length);
	let explored = new Set();
	q.enqueue(document.getElementById("node4").value);
	nodes.update({
		id: document.getElementById("node4").value,
		color:"red",
		
	});
	console.log(nodes);
	sleep(2000);
	explored.add(document.getElementById("node4").value);
	var b=0;
	while (!q.isEmpty()) {
	   let t = q.dequeue();
	   console.log(t);
	   if(b>0)
	   {
		nodes.update({
			id: t,
			color:"red",
			
		});
		console.log(nodes);
		sleep(2000);
	   }
	   b=b+1;
	   Adj(t).filter(n => !explored.has(n)).forEach(n => {explored.add(n);q.enqueue(n);});
	}
 }

function createGraph() {
	nodes = new vis.DataSet();
	edges = new vis.DataSet();
	
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
