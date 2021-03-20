function toggle_add() {
    var dd_add = document.getElementById('Add');
		var add_value = dd_add.options[dd_add.selectedIndex].value;
		// alert(add_value);
		var edge_add = document.getElementById('add_edge');
		var node_add = document.getElementById('add_node');
		var edge_delete = document.getElementById('delete_edge');
		var node_delete = document.getElementById('delete_node');
		var weight_update = document.getElementById('update_weight');
		var hv_update = document.getElementById('update_hv');
		var path_det = document.getElementById('path_details');

    	if (add_value == 'node') {
			node_add.style.display = 'block';
			edge_add.style.display = 'none';
		}
		else if (add_value == 'edge') {
			node_add.style.display = 'none';
			edge_add.style.display = 'block';
    	}
		else {
			node_add.style.display = 'none';
			edge_add.style.display = 'none';
		}
		edge_delete.style.display = 'none';
		node_delete.style.display = 'none';
		weight_update.style.display = 'none';
		hv_update.style.display = 'none';
		path_det.style.display = 'none';
}

function toggle_delete() {
    var dd_delete = document.getElementById('Delete');
		var delete_value = dd_delete.options[dd_delete.selectedIndex].value;
		// alert(add_value);
		var edge_add = document.getElementById('add_edge');
		var node_add = document.getElementById('add_node');
		var edge_delete = document.getElementById('delete_edge');
		var node_delete = document.getElementById('delete_node');
		var weight_update = document.getElementById('update_weight');
		var hv_update = document.getElementById('update_hv');
		var path_det = document.getElementById('path_details');

    	if (delete_value == 'node') {
			node_delete.style.display = 'block';
			edge_delete.style.display = 'none';
		}
		else if (delete_value == 'edge') {
			node_delete.style.display = 'none';
			edge_delete.style.display = 'block';
    	}
		else {
			node_delete.style.display = 'none';
			edge_delete.style.display = 'none';
		}
		edge_add.style.display = 'none';
		node_add.style.display = 'none';
		weight_update.style.display = 'none';
		hv_update.style.display = 'none';
		path_det.style.display = 'none';
}

function toggle_update() {
    var dd_update = document.getElementById('Update');
		var update_value = dd_update.options[dd_update.selectedIndex].value;
		// alert(add_value);
		var edge_add = document.getElementById('add_edge');
		var node_add = document.getElementById('add_node');
		var edge_delete = document.getElementById('delete_edge');
		var node_delete = document.getElementById('delete_node');
		var weight_update = document.getElementById('update_weight');
		var hv_update = document.getElementById('update_hv');
		var path_det = document.getElementById('path_details');

		if (update_value == 'weights') {
			weight_update.style.display = 'block';
			hv_update.style.display = 'none';
		}
		else if (update_value == 'heuristic_value') {
			weight_update.style.display = 'none';
			hv_update.style.display = 'block';
    	}
		else {
			weight_update.style.display = 'none';
			hv_update.style.display = 'none';
		}
		edge_add.style.display = 'none';
		node_add.style.display = 'none';
		edge_delete.style.display = 'none';
		node_delete.style.display = 'none';
		path_det.style.display = 'none';
}

function node_details() {
	var node_det =  document.getElementById('Algorithm');
	var algo_value = node_det.options[node_det.selectedIndex].value;
	var edge_add = document.getElementById('add_edge');
	var node_add = document.getElementById('add_node');
	var edge_delete = document.getElementById('delete_edge');
	var node_delete = document.getElementById('delete_node');
	var weight_update = document.getElementById('update_weight');
	var hv_update = document.getElementById('update_hv');
	var path_det = document.getElementById('path_details');
  var path_det1 = document.getElementById('path_details1');
  var path_det2 = document.getElementById('path_details2');
	if (algo_value == "A-Star") {
	path_det.style.display = 'block';
  path_det1.style.display = 'none';
  path_det2.style.display = 'none';
	}
  else if(algo_value == "BFS" ){
  path_det1.style.display= 'block';
  path_det.style.display = 'none';
  path_det2.style.display = 'none';
  }
  else if(algo_value == "DFS" ){
	path_det1.style.display= 'none';
	path_det.style.display = 'none';
	path_det2.style.display = 'block';
	}
	else {
		path_det.style.display = 'none';
	path_det1.style.display = 'none';
	path_det2.style.display = 'none';
	
	}
	edge_add.style.display = 'none';
	node_add.style.display = 'none';
	edge_delete.style.display = 'none';
	node_delete.style.display = 'none';
	weight_update.style.display = 'none';
	hv_update.style.display = 'none';
}


var node_insert = document.getElementById('node-insert');
var heuristic = document.getElementById('heuristic');
const nodesubmitbtn = document.getElementById("addnodesubmit");

nodesubmitbtn.addEventListener('click',()=>{
    // clearing the input field
    node_insert.value = "";
	heuristic.value = "";
})

var node_from = document.getElementById('node-from');
var node_to = document.getElementById('node-to');
var weight = document.getElementById('weight');

const edgebtn = document.getElementById("addedgesubmit");

edgebtn.addEventListener('click',()=>{
    // clearing the input field
    node_from.value = "";
	node_to.value = "";
	weight.value = "";
})

var node_del = document.getElementById('node-delete');
const delnodebtn = document.getElementById("delnodebtn");

delnodebtn.addEventListener('click',()=>{
    // clearing the input field
    node_del.value = "";
})

var node_from2 = document.getElementById('node-from2');
var node_to2 = document.getElementById('node-to2');
const deledgebtn = document.getElementById("deledgebtn");

deledgebtn.addEventListener('click',()=>{
    // clearing the input field
    node_from2.value = "";
	node_to2.value = "";
})


var node_from1 = document.getElementById('node-from1');
var node_to1 = document.getElementById('node-to1');
var new_weight = document.getElementById('new-weight');
const updatewtbtn = document.getElementById("updatewtbtn");

updatewtbtn.addEventListener('click',()=>{
    // clearing the input field
    node_from1.value = "";
	node_to1.value = "";
	new_weight.value = "";
})

var node1 = document.getElementById('node1');
var heuristic1 = document.getElementById('heuristic1');
const updatehvbtn = document.getElementById("updatehvbtn");

updatehvbtn.addEventListener('click',()=>{
    // clearing the input field
    node1.value = "";
	heuristic1.value = "";
})
