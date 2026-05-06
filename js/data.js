// ===================================================
// DATA: Algorithm definitions
// ===================================================

// Shared SVG attribute shorthand (used inline below)
// All icons: width="24" height="24" viewBox="0 0 24 24"
//            fill="none" stroke="currentColor"
//            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"

const ALGORITHMS = [
  {
    id: 'dfs',
    name: 'DFS',
    fullName: 'Depth First Search',
    vname: 'Tìm kiếm theo chiều sâu',
    desc: 'Khám phá đồ thị bằng cách đi sâu nhất có thể theo mỗi nhánh trước khi quay lại.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    complexity: 'O(V + E)',
    difficulty: 1,
    tags: ['Đệ quy', 'Ngăn xếp', 'Thăm nút'],
    features: ['Đồ thị có hướng/vô hướng', 'Phát hiện chu trình', 'Thành phần liên thông'],
    supportsNeg: true,
    weighted: false,
    // git-branch: represents recursive branching / going deep into a tree
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="6" y1="3" x2="6" y2="15"/>
      <circle cx="18" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <path d="M18 9a9 9 0 0 1-9 9"/>
    </svg>`,
    directed: false
  },
  {
    id: 'bfs',
    name: 'BFS',
    fullName: 'Breadth First Search',
    vname: 'Tìm kiếm theo chiều rộng',
    desc: 'Thăm tất cả các nút ở cùng mức trước khi đi sâu hơn, dùng hàng đợi.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    complexity: 'O(V + E)',
    difficulty: 1,
    tags: ['Hàng đợi', 'Đường ngắn nhất', 'Mức độ'],
    features: ['Đường ngắn nhất (unweighted)', 'Duyệt theo lớp', 'Thành phần liên thông'],
    supportsNeg: true,
    weighted: false,
    // layers: represents level-by-level (BFS layer expansion)
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>`,
    directed: false
  },
  {
    id: 'dijkstra',
    name: 'Dijkstra',
    fullName: "Dijkstra's Shortest Path",
    vname: 'Đường đi ngắn nhất Dijkstra',
    desc: 'Tìm đường đi ngắn nhất từ một nguồn đến tất cả các đỉnh. Không hỗ trợ cạnh âm.',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
    complexity: 'O((V+E) log V)',
    difficulty: 2,
    tags: ['Hàng đợi ưu tiên', 'Tham lam', 'Trọng số'],
    features: ['Đường ngắn nhất có trọng số', 'Chỉ cạnh dương', 'Priority Queue'],
    supportsNeg: false,
    weighted: true,
    // crosshair: represents targeting / finding the optimal destination
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="22" y1="12" x2="18" y2="12"/>
      <line x1="6"  y1="12" x2="2"  y2="12"/>
      <line x1="12" y1="6"  x2="12" y2="2"/>
      <line x1="12" y1="22" x2="12" y2="18"/>
    </svg>`,
    directed: true,
    needsTarget: true
  },
  {
    id: 'bellman',
    name: 'Ford-Bellman',
    fullName: 'Bellman-Ford Algorithm',
    vname: 'Thuật toán Bellman-Ford',
    desc: 'Tìm đường ngắn nhất, hỗ trợ cạnh âm và phát hiện chu trình âm.',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.12)',
    complexity: 'O(V × E)',
    difficulty: 3,
    tags: ['Lập trình động', 'Cạnh âm', 'Chu trình âm'],
    features: ['Cạnh âm OK', 'Phát hiện chu trình âm', 'Tối ưu từng vòng lặp'],
    supportsNeg: true,
    weighted: true,
    // activity: zigzag pulse line — represents iterative relaxation over all edges
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>`,
    directed: true,
    needsTarget: false
  },
  {
    id: 'prim',
    name: "Prim's MST",
    fullName: "Prim's Minimum Spanning Tree",
    vname: 'Cây khung nhỏ nhất Prim',
    desc: 'Xây dựng cây khung nhỏ nhất bằng cách mở rộng từ một đỉnh nguồn.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
    complexity: 'O((V+E) log V)',
    difficulty: 2,
    tags: ['MST', 'Tham lam', 'Cây khung'],
    features: ['Cây khung nhỏ nhất', 'Đồ thị liên thông', 'Hàng đợi ưu tiên'],
    supportsNeg: false,
    weighted: true,
    // share-2: hub node radiating edges to others — perfect for MST / spanning tree
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5"  r="3"/>
      <circle cx="6"  cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49"/>
    </svg>`,
    directed: false
  }
];

// ===================================================
// PSEUDOCODE definitions
// ===================================================
const PSEUDOCODES = {
  dfs: [
    'procedure DFS(graph, start):',
    '  stack ← [start]',
    '  visited ← {}',
    '  while stack is not empty:',
    '    node ← stack.pop()',
    '    if node not in visited:',
    '      mark node as visited',
    '      for each neighbor of node:',
    '        if neighbor not visited:',
    '          stack.push(neighbor)',
  ],
  bfs: [
    'procedure BFS(graph, start):',
    '  queue ← [start]',
    '  visited ← {start}',
    '  while queue is not empty:',
    '    node ← queue.dequeue()',
    '    process node',
    '    for each neighbor of node:',
    '      if neighbor not visited:',
    '        visited.add(neighbor)',
    '        queue.enqueue(neighbor)',
  ],
  dijkstra: [
    'procedure DIJKSTRA(graph, src):',
    '  dist[src] ← 0; dist[others] ← ∞',
    '  pq ← [(0, src)]',
    '  while pq is not empty:',
    '    (d, u) ← pq.extract_min()',
    '    if d > dist[u]: continue',
    '    mark u as visited',
    '    for each edge (u, v, w):',
    '      if dist[u] + w < dist[v]:',
    '        dist[v] ← dist[u] + w',
    '        pq.insert((dist[v], v))',
  ],
  bellman: [
    'procedure BELLMAN_FORD(graph, src):',
    '  dist[src] ← 0; dist[others] ← ∞',
    '  for i ← 1 to |V| - 1:',
    '    for each edge (u, v, w):',
    '      if dist[u] + w < dist[v]:',
    '        dist[v] ← dist[u] + w',
    '  for each edge (u, v, w):',
    '    if dist[u] + w < dist[v]:',
    '      return "Negative cycle detected!"',
    '  return dist',
  ],
  prim: [
    'procedure PRIM(graph, start):',
    '  inMST ← {start}',
    '  mst_edges ← []',
    '  pq ← all edges from start',
    '  while pq not empty:',
    '    (w, u, v) ← pq.extract_min()',
    '    if v in inMST: continue',
    '    add (u, v, w) to mst_edges',
    '    inMST.add(v)',
    '    for each edge (v, x, w2):',
    '      if x not in inMST: pq.insert((w2, v, x))',
  ],
};