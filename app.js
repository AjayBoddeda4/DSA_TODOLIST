// App with LeetCode links + Concept tags
const LINKS = {
  "#1 Two Sum": "https://leetcode.com/problems/two-sum/",
  "#283 Move Zeroes": "https://leetcode.com/problems/move-zeroes/",
  "#189 Rotate Array": "https://leetcode.com/problems/rotate-array/",
  "#26 Remove Duplicates from Sorted Array": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
  "#53 Maximum Subarray": "https://leetcode.com/problems/maximum-subarray/",
  "#238 Product of Array Except Self": "https://leetcode.com/problems/product-of-array-except-self/",
  "#42 Trapping Rain Water": "https://leetcode.com/problems/trapping-rain-water/",
  "#33 Search in Rotated Sorted Array": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
  "#349 Intersection of Two Arrays": "https://leetcode.com/problems/intersection-of-two-arrays/",
  "#344 Reverse String": "https://leetcode.com/problems/reverse-string/",
  "#14 Longest Common Prefix": "https://leetcode.com/problems/longest-common-prefix/",
  "#205 Isomorphic Strings": "https://leetcode.com/problems/isomorphic-strings/",
  "#3 Longest Substring Without Repeating Characters": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",

  "#104 Maximum Depth of Binary Tree": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
  "#110 Balanced Binary Tree": "https://leetcode.com/problems/balanced-binary-tree/",
  "#98 Validate Binary Search Tree": "https://leetcode.com/problems/validate-binary-search-tree/",
  "#101 Symmetric Tree": "https://leetcode.com/problems/symmetric-tree/",
  "#236 Lowest Common Ancestor of a Binary Tree": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
  "#102 Binary Tree Level Order Traversal": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
  "#200 Number of Islands": "https://leetcode.com/problems/number-of-islands/",
  "#207 Course Schedule": "https://leetcode.com/problems/course-schedule/",
  "#210 Course Schedule II": "https://leetcode.com/problems/course-schedule-ii/",
  "#133 Clone Graph": "https://leetcode.com/problems/clone-graph/",
  "#108 Convert Sorted Array to Binary Search Tree": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",

  "#46 Permutations": "https://leetcode.com/problems/permutations/",
  "#78 Subsets": "https://leetcode.com/problems/subsets/",
  "#131 Palindrome Partitioning": "https://leetcode.com/problems/palindrome-partitioning/",
  "#51 N-Queens": "https://leetcode.com/problems/n-queens/",
  "#37 Sudoku Solver": "https://leetcode.com/problems/sudoku-solver/",
  "#22 Generate Parentheses": "https://leetcode.com/problems/generate-parentheses/",
  "#140 Word Break II": "https://leetcode.com/problems/word-break-ii/",
  "#1143 Longest Common Subsequence": "https://leetcode.com/problems/longest-common-subsequence/",
  "#300 Longest Increasing Subsequence": "https://leetcode.com/problems/longest-increasing-subsequence/",
  "#416 Partition Equal Subset Sum": "https://leetcode.com/problems/partition-equal-subset-sum/",
  "#322 Coin Change": "https://leetcode.com/problems/coin-change/",
  "#45 Jump Game II": "https://leetcode.com/problems/jump-game-ii/",

  "#704 Binary Search": "https://leetcode.com/problems/binary-search/",
  "#215 Kth Largest Element in an Array": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
  "#34 First & Last Position of Element in Sorted Array": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
  "#4 Median of Two Sorted Arrays": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
  "#240 Search a 2D Matrix II": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
  "#49 Group Anagrams": "https://leetcode.com/problems/group-anagrams/",
  "#128 Longest Consecutive Sequence": "https://leetcode.com/problems/longest-consecutive-sequence/",
  "#560 Subarray Sum Equals K": "https://leetcode.com/problems/subarray-sum-equals-k/",
  "#146 LRU Cache": "https://leetcode.com/problems/lru-cache/",

  "#1167 Minimum Cost to Connect Sticks": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
  "#743 Network Delay Time": "https://leetcode.com/problems/network-delay-time/",
  "#231 Power of Two": "https://leetcode.com/problems/power-of-two/",
  "#191 Number of 1 Bits": "https://leetcode.com/problems/number-of-1-bits/",
  "#136 Single Number": "https://leetcode.com/problems/single-number/",
  "#1823 Find the Winner of the Circular Game": "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
  "#172 Factorial Trailing Zeroes": "https://leetcode.com/problems/factorial-trailing-zeroes/",
};

const DATA = [
  { category: "Beginner Level (Foundational Algorithms)", items: [
      "Linear Search","Binary Search","Bubble Sort","Selection Sort","Insertion Sort",
      "Merge Sort","Quick Sort","Two Pointers Technique","Sliding Window Technique",
      "Kadane’s Algorithm (Maximum Subarray Sum)","Prefix Sum & Difference Arrays",
      "Flood Fill Algorithm (DFS/BFS for grid problems)",
  ]},
  { category: "Intermediate Level (Core Algorithms)", items: [
      "Hashing (Maps, Sets, Frequency Count)","Heap / Priority Queue Algorithms",
      "Counting Sort & Bucket Sort","Binary Search on Answer (e.g., Min Capacity to Ship Packages)",
      "Union-Find / Disjoint Set Union (DSU)","KMP Algorithm (Pattern Matching)",
      "Rabin–Karp Algorithm (String Matching)","DFS and BFS (Graph Traversals)",
      "Topological Sort (Kahn’s + DFS-based)","Dijkstra’s Algorithm (Shortest Path)",
      "Bellman–Ford Algorithm (Shortest Path with Negative Weights)",
      "Floyd–Warshall Algorithm (All-Pairs Shortest Path)",
  ]},
  { category: "Advanced Level (High-Impact Algorithms)", items: [
      "Backtracking (N-Queens, Sudoku, Permutations)","Dynamic Programming on Subsets (Subset Sum, Knapsack)",
      "Dynamic Programming on Strings (LCS, Edit Distance)","Dynamic Programming on Grids (Unique Paths, Min Path Sum)",
      "Segment Trees (Range Queries, Lazy Propagation)","Fenwick Tree / Binary Indexed Tree",
      "Trie (Prefix Tree)","Suffix Arrays and LCP Array","Manacher’s Algorithm (Longest Palindromic Substring)",
      "Shortest Path in a DAG (DP + Topological Sort)","Bit Manipulation Algorithms (subset generation, XOR tricks)",
  ]},
  { category: "Arrays & Strings (13)", items: [
      "#1 Two Sum","#283 Move Zeroes","#189 Rotate Array","#26 Remove Duplicates from Sorted Array",
      "#53 Maximum Subarray","#238 Product of Array Except Self","#42 Trapping Rain Water",
      "#33 Search in Rotated Sorted Array","#349 Intersection of Two Arrays","#344 Reverse String",
      "#14 Longest Common Prefix","#205 Isomorphic Strings","#3 Longest Substring Without Repeating Characters",
  ]},
  { category: "Trees & Graphs (from image)", items: [
      "#104 Maximum Depth of Binary Tree","#110 Balanced Binary Tree","#98 Validate Binary Search Tree",
      "#101 Symmetric Tree","#236 Lowest Common Ancestor of a Binary Tree",
      "#102 Binary Tree Level Order Traversal","#200 Number of Islands","#207 Course Schedule (Detect Cycle)",
      "#210 Course Schedule II (Topological sort)","#133 Clone Graph",
      "#108 Convert Sorted Array to Binary Search Tree",
  ]},
  { category: "Recursion & Backtracking (13)", items: [
      "#46 Permutations","#78 Subsets","#131 Palindrome Partitioning","#51 N-Queens","#37 Sudoku Solver",
      "Rat in a Maze (GFG)","#22 Generate Parentheses","#140 Word Break II","#1143 Longest Common Subsequence",
      "#300 Longest Increasing Subsequence","Knapsack — Partition Equal Subset Sum (#416)","#322 Coin Change","#45 Jump Game II",
  ]},
  { category: "Sorting, Searching & Hashing (12)", items: [
      "#704 Binary Search","#33 Search in Rotated Sorted Array","#215 Kth Largest Element in an Array",
      "#34 First & Last Position of Element in Sorted Array","#4 Median of Two Sorted Arrays",
      "Merge Sort — algorithm","Quick Sort — algorithm","#240 Search a 2D Matrix II","#49 Group Anagrams",
      "#128 Longest Consecutive Sequence","#560 Subarray Sum Equals K","#146 LRU Cache",
  ]},
  { category: "Greedy, Bit Manipulation & Math/Logic (11)", items: [
      "Activity Selection (Interval Scheduling)","Fractional Knapsack","Job Sequencing with Deadlines",
      "Minimum Platforms (Trains)","#1167 Minimum Cost to Connect Sticks","#743 Network Delay Time",
      "#231 Power of Two","#191 Number of 1 Bits","#136 Single Number",
      "#1823 Find the Winner of the Circular Game","#172 Factorial Trailing Zeroes",
  ]},
];

const slug = (s)=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
const storeKey="dsa-todo-progress-v3";

function render(){
  const app=document.getElementById("app"); app.innerHTML="";
  DATA.forEach((section, idx)=>{
    const secId=slug(section.category)||"sec-"+idx;
    const wrapper=document.createElement("section"); wrapper.className="section"; wrapper.dataset.secId=secId;
    const header=document.createElement("div"); header.className="section-header";
    const title=document.createElement("div"); title.className="section-title";
    title.innerHTML=`<h2>${section.category}</h2><span class="count" id="${secId}-count"></span>`;
    header.appendChild(title);
    const bar=document.createElement("div"); bar.className="progressbar"; bar.innerHTML=`<span id="${secId}-bar" style="width:0%"></span>`;
    header.appendChild(bar); wrapper.appendChild(header);
    const body=document.createElement("div"); body.className="section-body";
    const list=document.createElement("ul"); list.className="task-list"; list.id=secId;
    section.items.forEach(item=>{
      const id=secId+"::"+slug(item);
      const li=document.createElement("li"); li.className="task";
      const cb=document.createElement("input"); cb.type="checkbox"; cb.checked=!!JSON.parse(localStorage.getItem(storeKey)||"{}")[id];
      const label=document.createElement("div"); label.className="label";
      label.innerHTML=item.replace(/(#\\d+)/g,'<span class="kbd">$1</span>');
      if(LINKS[item]){
        const a=document.createElement("a"); a.href=LINKS[item]; a.target="_blank"; a.rel="noopener"; a.className="link leet"; a.textContent="Open in LeetCode ↗"; label.appendChild(a);
      } else if(/Rat in a Maze/.test(item)){
        const a=document.createElement("a"); a.href="https://www.geeksforgeeks.org/rat-in-a-maze/"; a.target="_blank"; a.rel="noopener"; a.className="link ext"; a.textContent="GFG ↗"; label.appendChild(a);
      } else {
        const span=document.createElement("span"); span.className="link concept"; span.textContent="📘 Learn Algorithm"; label.appendChild(span);
      }
      cb.addEventListener("change",()=>{
        const st=JSON.parse(localStorage.getItem(storeKey)||"{}"); st[id]=cb.checked; localStorage.setItem(storeKey, JSON.stringify(st));
        updateSectionProgress(secId); updateGlobalProgress();
      });
      li.appendChild(cb); li.appendChild(label); list.appendChild(li);
    });
    body.appendChild(list); wrapper.appendChild(body); app.appendChild(wrapper);
    updateSectionProgress(secId);
    header.addEventListener("click",()=> body.classList.toggle("show"));
  });
  const first=document.querySelector(".section .section-body"); if(first) first.classList.add("show");
  updateGlobalProgress();
}

function updateSectionProgress(secId){
  const list=document.getElementById(secId); if(!list) return;
  const checkboxes=list.querySelectorAll("input[type=checkbox]");
  const total=checkboxes.length; const done=[...checkboxes].filter(c=>c.checked).length;
  const pct=total?Math.round(done/total*100):0;
  document.getElementById(`${secId}-count`).textContent=` ${done}/${total} (${pct}%)`;
  document.getElementById(`${secId}-bar`).style.width=pct+"%";
}
function updateGlobalProgress(){
  const cbs=document.querySelectorAll("ul.task-list input[type=checkbox]");
  const total=cbs.length; const done=[...cbs].filter(c=>c.checked).length;
  const pct=total?Math.round(done/total*100):0;
  document.getElementById("globalProgress").textContent=`Overall progress: ${done}/${total} (${pct}%)`;
}

// Search
function setupSearch(){
  const input=document.getElementById("search");
  input.addEventListener("input",()=>{
    const q=input.value.trim().toLowerCase();
    document.querySelectorAll(".section").forEach(sec=>{
      const tasks=sec.querySelectorAll(".task");
      let visible=0;
      tasks.forEach(li=>{
        const text=li.querySelector(".label").innerText.toLowerCase();
        const matched=text.includes(q);
        li.style.display=matched?"":"none";
        if(matched) visible++;
      });
      const body=sec.querySelector(".section-body");
      if(q) body.classList.add("show"); else body.classList.remove("show");
      sec.style.display=(q && visible===0)?"none":"";
    });
  });
}

// Buttons
function setupButtons(){
  document.getElementById("expandAll").addEventListener("click",()=>{
    document.querySelectorAll(".section-body").forEach(b=>b.classList.add("show"));
  });
  document.getElementById("collapseAll").addEventListener("click",()=>{
    document.querySelectorAll(".section-body").forEach(b=>b.classList.remove("show"));
  });
  document.getElementById("resetBtn").addEventListener("click",()=>{
    if(confirm("Clear all saved progress?")){
      localStorage.removeItem(storeKey);
      render();
    }
  });
  document.getElementById("exportBtn").addEventListener("click",()=>{
    const raw=localStorage.getItem(storeKey)||"{}";
    const blob=new Blob([raw],{type:"application/json"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a"); a.href=url; a.download="dsa-todo-progress.json"; a.click(); URL.revokeObjectURL(url);
  });
  document.getElementById("importBtn").addEventListener("click",()=>{
    document.getElementById("importFile").click();
  });
  document.getElementById("importFile").addEventListener("change",(e)=>{
    const file=e.target.files[0]; if(!file) return;
    const reader=new FileReader();
    reader.onload=(evt)=>{ try{ const obj=JSON.parse(evt.target.result); localStorage.setItem(storeKey, JSON.stringify(obj)); render(); } catch(e){ alert("Invalid JSON."); } };
    reader.readAsText(file);
  });
}

render(); setupSearch(); setupButtons();
