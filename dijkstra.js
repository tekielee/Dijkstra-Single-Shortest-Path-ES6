let graph = {
	A: [{B: 3}, {C: 5}, {D: 9}],
	B: [{A: 3}, {C: 3}, {D: 4}, {E: 7}],
	C: [{A: 5}, {B: 3}, {D: 2}, {E: 6}, {F: 3}],
	D: [{A: 9}, {B: 4}, {C: 2}, {E: 2}, {F: 2}],
	E: [{B: 7}, {C: 6}, {D: 2}, {F: 5}],
	F: [{C: 3}, {D: 2}, {E: 5}]
};

function Dijstra(graph, source, target) {
	let dist = [];
	let pred = [];
	let queue = new LinkedListPriority();
	let count = 0;
	for(const [v, adj] of Object.entries(graph)) {
		dist[v] = Number.MAX_SAFE_INTEGER;
		pred[v] = null;
		let minArray = [];
		var priorityArray = [];
		for(let i = 0; i < adj.length; i++) {
			for (const property in adj[i]) {
				minArray.push(adj[i][property]);
			}
		}
		queue.insert(v, Math.min(...minArray));
	}
	dist[source] = 0;
	while(!queue.isEmpty()) {
		let u = queue.extract();
		if(graph[u.data].length !== 0) {
			for(let j = 0; j < graph[u.data].length; j++) {
				for(const [v, cost] of Object.entries(graph[u.data][j])) {
					if(dist[u.data] + cost < dist[v]) {
						dist[v] = dist[u.data] + cost;
						pred[v] = u.data;
					}
				}
			}
		}
	}
	let S = new Stack();
	let u = target;
	let distance = 0;
	while(pred[u] !== undefined && pred[u]) {
		S.push(u);
		for(let i = 0; i < graph[u].length; i++ ) {
			if(graph[u][i][pred[u]]) {
				distance += graph[u][i][pred[u]];
			}
		}
		u = pred[u];
	}
	if(S.isEmpty()) {
		return {distance: 0, path: S};
	} else {
		S.push(source);
		return {distance: distance, path: S};
	}
}
let source = 'A';
let target = 'F';

let result = Dijstra(graph, source, target);

console.log('Distance from ' + source + ' to ' + target + ' is ' + result.distance);
console.log('Path to follow: ');

while(!result.path.isEmpty()) {
	console.log(result.path.pop());
}