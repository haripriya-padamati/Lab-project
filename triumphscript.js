// ── PROJECT DATA ──────────────────────────────────────────

var finishedProjects = [
  {
    title: "Personal Portfolio Website",
    desc: "A fully responsive portfolio built with HTML, CSS & JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com",
    upgrading: false,
    timeline: [
      { step: "Plan layout & wireframe",  status: "done",    date: "Jan 5"  },
      { step: "HTML structure",           status: "done",    date: "Jan 12" },
      { step: "CSS styling",              status: "done",    date: "Jan 20" },
      { step: "JavaScript interactivity", status: "done",    date: "Feb 1"  },
      { step: "Deploy on GitHub Pages",   status: "done",    date: "Feb 8"  }
    ],
    todos: [
      { text: "Design nav and hero",    done: true, priority: "high"   },
      { text: "Build projects section", done: true, priority: "high"   },
      { text: "Add contact form",       done: true, priority: "medium" },
      { text: "Make it responsive",     done: true, priority: "high"   },
      { text: "Deploy",                 done: true, priority: "high"   }
    ]
  },
  {
    title: "Student Result Tracker",
    desc: "A web app to enter and view semester results with GPA calculations.",
    tags: ["JavaScript", "CSS", "localStorage"],
    link: "https://github.com",
    upgrading: false,
    timeline: [
      { step: "Design schema",     status: "done", date: "Feb 10" },
      { step: "Build UI",          status: "done", date: "Feb 17" },
      { step: "Add GPA logic",     status: "done", date: "Feb 24" },
      { step: "LocalStorage save", status: "done", date: "Mar 2"  },
      { step: "Final testing",     status: "done", date: "Mar 8"  }
    ],
    todos: [
      { text: "Design input form",     done: true, priority: "high"   },
      { text: "GPA calculation logic", done: true, priority: "high"   },
      { text: "Save to localStorage",  done: true, priority: "medium" },
      { text: "Results table view",    done: true, priority: "medium" }
    ]
  },
  {
    title: "Library Management System",
    desc: "A SQL-backed CLI tool to manage books, members and issue/return records.",
    tags: ["SQL", "C Programming"],
    link: "https://github.com",
    upgrading: false,
    timeline: [
      { step: "ER diagram",         status: "done", date: "Mar 1"  },
      { step: "Create tables",      status: "done", date: "Mar 5"  },
      { step: "Insert sample data", status: "done", date: "Mar 10" },
      { step: "Complex queries",    status: "done", date: "Mar 15" },
      { step: "Stored procedures",  status: "done", date: "Mar 20" }
    ],
    todos: [
      { text: "Design ER diagram",     done: true, priority: "high"   },
      { text: "Create all tables",     done: true, priority: "high"   },
      { text: "Insert sample records", done: true, priority: "high"   },
      { text: "Write queries",         done: true, priority: "medium" }
    ]
  }
];

var ongoingProjects = [
  {
    title: "Triumph Dashboard",
    fromFinishedIdx: null,
    timeline: [
      { step: "Project setup & wireframing", status: "done",    date: "Mar 1"  },
      { step: "HTML & CSS base layout",      status: "done",    date: "Mar 8"  },
      { step: "JavaScript interactivity",    status: "current", date: "Mar 29" },
      { step: "Connect real data",           status: "next",    date: "Apr 10" },
      { step: "Polish & deploy",             status: "next",    date: "Apr 20" }
    ],
    todos: [
      { text: "Design nav and hero",    done: true,  priority: "high"   },
      { text: "Build projects grid",    done: true,  priority: "high"   },
      { text: "Add project panels",     done: true,  priority: "high"   },
      { text: "Todo progress meter",    done: false, priority: "high"   },
      { text: "Mobile responsiveness",  done: false, priority: "medium" },
      { text: "Add real project links", done: false, priority: "medium" }
    ]
  },
  {
    title: "Weather App",
    fromFinishedIdx: null,
    timeline: [
      { step: "API research & setup",   status: "done",    date: "Mar 5"  },
      { step: "UI layout",              status: "done",    date: "Mar 12" },
      { step: "Fetch & display data",   status: "current", date: "Mar 29" },
      { step: "7-day forecast feature", status: "next",    date: "Apr 5"  },
      { step: "Deploy on Vercel",       status: "next",    date: "Apr 12" }
    ],
    todos: [
      { text: "Set up API key",          done: true,  priority: "high"   },
      { text: "Search by city name",     done: true,  priority: "high"   },
      { text: "Display current weather", done: true,  priority: "high"   },
      { text: "Add 7-day forecast",      done: false, priority: "high"   },
      { text: "Add weather icons",       done: false, priority: "medium" },
      { text: "Geolocation auto-detect", done: false, priority: "low"    }
    ]
  },
  {
    title: "SQL Mini Project",
    fromFinishedIdx: null,
    timeline: [
      { step: "Schema design",     status: "done",    date: "Mar 10" },
      { step: "Table creation",    status: "current", date: "Mar 29" },
      { step: "Queries & joins",   status: "next",    date: "Apr 8"  },
      { step: "Stored procedures", status: "next",    date: "Apr 18" }
    ],
    todos: [
      { text: "Design ER diagram",        done: true,  priority: "high"   },
      { text: "Create all tables",        done: true,  priority: "high"   },
      { text: "Insert sample data",       done: false, priority: "high"   },
      { text: "Write 10 complex queries", done: false, priority: "high"   },
      { text: "Add stored procedures",    done: false, priority: "medium" }
    ]
  },
  {
    title: "Mini Game in JS",
    fromFinishedIdx: null,
    timeline: [
      { step: "Game concept & rules", status: "done",    date: "Mar 15" },
      { step: "Canvas setup",         status: "current", date: "Mar 29" },
      { step: "Player movement",      status: "next",    date: "Apr 6"  },
      { step: "Scoring system",       status: "next",    date: "Apr 15" }
    ],
    todos: [
      { text: "Define game mechanic",      done: true,  priority: "high"   },
      { text: "Draw canvas background",    done: true,  priority: "high"   },
      { text: "Player character movement", done: false, priority: "high"   },
      { text: "Enemy logic",               done: false, priority: "high"   },
      { text: "Score & lives display",     done: false, priority: "medium" }
    ]
  }
];

// tracks which ongoing project panel is currently open
var currentOpenIdx = -1;


// ── RENDER FINISHED PROJECTS GRID ─────────────────────────

function renderFinished() {
  var grid = document.getElementById("finished-grid");
  grid.innerHTML = "";

  for (var i = 0; i < finishedProjects.length; i++) {
    var p = finishedProjects[i];

    // build tag badges
    var tagsHTML = "";
    for (var t = 0; t < p.tags.length; t++) {
      tagsHTML = tagsHTML + '<span class="tag">' + p.tags[t] + "</span>";
    }

    // upgrade label if needed
    var upgradeTag = "";
    if (p.upgrading == true) {
      upgradeTag = '<span class="upgrade-tag">✦ Completed (making changes)</span>';
    }

    var card = document.createElement("div");
    card.className = "pcard";
    card.setAttribute("data-idx", i);
    card.innerHTML =
      "<h3>" + p.title + "</h3>" +
      "<p>" + p.desc + "</p>" +
      "<div>" + tagsHTML + "</div>" +
      upgradeTag;

    card.addEventListener("click", finishedCardClick);
    grid.appendChild(card);
  }
}

function finishedCardClick() {
  var idx = parseInt(this.getAttribute("data-idx"));
  openFinishedPanel(idx);
}


// ── RENDER ONGOING PROJECTS GRID ──────────────────────────

function renderOngoing() {
  var grid = document.getElementById("ongoing-grid");
  grid.innerHTML = "";

  for (var i = 0; i < ongoingProjects.length; i++) {
    var p = ongoingProjects[i];

    // count how many todos are done
    var doneCount = 0;
    for (var t = 0; t < p.todos.length; t++) {
      if (p.todos[t].done == true) {
        doneCount = doneCount + 1;
      }
    }
    var total = p.todos.length;

    var pct = 0;
    if (total > 0) {
      pct = Math.round((doneCount / total) * 100);
    }

    var upgradeBadge = "";
    if (p.fromFinishedIdx != null) {
      upgradeBadge = '<span class="upgrade-badge">↑ Upgrading</span>';
    }

    var card = document.createElement("div");
    card.className = "ocard";
    card.setAttribute("data-idx", i);
    card.innerHTML =
      "<h4>" + p.title + upgradeBadge + "</h4>" +
      '<p style="font-size:13px">' + doneCount + "/" + total + " tasks done</p>" +
      '<div class="mini-bar"><div class="mini-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="mini-pct">' + pct + "% complete</div>";

    card.addEventListener("click", ongoingCardClick);
    grid.appendChild(card);
  }
}

function ongoingCardClick() {
  var idx = parseInt(this.getAttribute("data-idx"));
  openOngoingPanel(idx);
}


// ── OPEN FINISHED PANEL ───────────────────────────────────

function openFinishedPanel(idx) {
  var p = finishedProjects[idx];

  document.getElementById("panel-title").textContent = p.title;
  var statusEl = document.getElementById("panel-status");

  if (p.upgrading == true) {
    statusEl.textContent = "✦ Making changes";
    statusEl.className = "panel-status ps-upgrade";
  } else {
    statusEl.textContent = "✓ Completed";
    statusEl.className = "panel-status ps-done";
  }

  var bodyHTML = "";

  // completed banner (no emoji icon div)
  var bannerTitle = "Project Completed!";
  if (p.upgrading == true) {
    bannerTitle = "Completed — currently being upgraded";
  }
  bodyHTML = bodyHTML +
    '<div class="completed-banner">' +
      "<div>" +
        "<h3>" + bannerTitle + "</h3>" +
        "<p>All original tasks were finished. See the full journey below.</p>" +
      "</div>" +
    "</div>";

  // upgrade section
  if (p.upgrading == false) {
    bodyHTML = bodyHTML +
      '<div class="upgrade-section">' +
        "<h4>↑ Continue &amp; Upgrade</h4>" +
        "<p>Want to add new features? Start an upgrade — it will appear in Ongoing and this card will show making changes.</p>" +
        '<button class="tbtn tbtn-upgrade" id="start-upgrade-btn" data-idx="' + idx + '">Start Upgrade</button>' +
      "</div>";
  } else {
    bodyHTML = bodyHTML +
      '<div class="upgrade-section">' +
        "<h4>↑ Upgrade in Progress</h4>" +
        "<p>This project is being upgraded. Add new tasks in the Ongoing section under <strong>" + p.title + "</strong>.</p>" +
      "</div>";
  }

  // timeline
  bodyHTML = bodyHTML + buildTimelineHTML(p.timeline);

  // read-only todo list
  bodyHTML = bodyHTML +
    '<div class="todo-section">' +
      '<div class="todo-header"><h3>Original Tasks</h3></div>' +
      '<ul class="todo-list">';

  for (var i = 0; i < p.todos.length; i++) {
    var t = p.todos[i];
    bodyHTML = bodyHTML +
      '<li class="todo-item done-item">' +
        '<div class="chk">' +
          '<svg width="12" height="10" viewBox="0 0 12 10" fill="none">' +
            '<path d="M1 5L4.5 8.5L11 1" stroke="#01162B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
          "</svg>" +
        "</div>" +
        '<span class="todo-label">' + t.text + "</span>" +
        '<span class="prio p-' + t.priority + '">' + t.priority + "</span>" +
      "</li>";
  }

  bodyHTML = bodyHTML + "</ul></div>";
  document.getElementById("panel-body").innerHTML = bodyHTML;

  // wire up the start upgrade button
  var upgradeBtn = document.getElementById("start-upgrade-btn");
  if (upgradeBtn != null) {
    upgradeBtn.addEventListener("click", function() {
      var i = parseInt(this.getAttribute("data-idx"));
      startUpgrade(i);
    });
  }

  openPanel();
}


// ── OPEN ONGOING PANEL ────────────────────────────────────

function openOngoingPanel(idx) {
  currentOpenIdx = idx;
  var p = ongoingProjects[idx];

  document.getElementById("panel-title").textContent = p.title;
  var statusEl = document.getElementById("panel-status");

  if (p.fromFinishedIdx != null) {
    statusEl.textContent = "↑ Going through upgrades";
    statusEl.className = "panel-status ps-upgrade";
  } else {
    statusEl.textContent = "● In Progress";
    statusEl.className = "panel-status ps-ongoing";
  }

  buildOngoingBody(idx);
  openPanel();
}

function buildOngoingBody(idx) {
  var p = ongoingProjects[idx];

  // count done todos
  var doneCount = 0;
  for (var i = 0; i < p.todos.length; i++) {
    if (p.todos[i].done == true) {
      doneCount = doneCount + 1;
    }
  }
  var total = p.todos.length;

  var pct = 0;
  if (total > 0) {
    pct = Math.round((doneCount / total) * 100);
  }

  // progress section
  var bodyHTML =
    '<div class="prog-section">' +
      "<h3>Overall Progress</h3>" +
      '<div class="prog-bar-wrap">' +
        '<div class="prog-bar-fill" style="width:' + pct + '%"><span>' + pct + "%</span></div>" +
      "</div>" +
      '<p class="prog-stat">' + doneCount + " of " + total + " tasks completed</p>" +
    "</div>";

  // timeline
  bodyHTML = bodyHTML + buildTimelineHTML(p.timeline);

  // complete button — only enabled when all tasks are done
  var complDisabled = "disabled";
  if (doneCount == total && total > 0) {
    complDisabled = "";
  }

  // todo list items
  var todoItemsHTML = "";
  for (var i = 0; i < p.todos.length; i++) {
    var t = p.todos[i];

    var doneClass = "";
    if (t.done == true) {
      doneClass = " done-item";
    }

    todoItemsHTML = todoItemsHTML +
      '<li class="todo-item clickable' + doneClass + '">' +
        '<div class="chk" onclick="toggleTodo(' + idx + ',' + i + ')">' +
          '<svg width="12" height="10" viewBox="0 0 12 10" fill="none">' +
            '<path d="M1 5L4.5 8.5L11 1" stroke="#01162B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
          "</svg>" +
        "</div>" +
        '<span class="todo-label" onclick="toggleTodo(' + idx + ',' + i + ')">' + t.text + "</span>" +
        '<span class="prio p-' + t.priority + '">' + t.priority + "</span>" +
        '<button class="del-btn" onclick="deleteTodo(' + idx + ',' + i + ')">✕</button>' +
      "</li>";
  }

  bodyHTML = bodyHTML +
    '<div class="todo-section">' +
      '<div class="todo-header">' +
        "<h3>To-Do List</h3>" +
        '<div class="todo-actions">' +
          '<button class="tbtn tbtn-add" onclick="showAddForm()">+ Add Task</button>' +
          '<button class="tbtn tbtn-complete" id="compl-btn" ' + complDisabled + ' onclick="markComplete(' + idx + ')">✓ Mark as Completed</button>' +
        "</div>" +
      "</div>" +
      '<div class="add-form" id="add-form">' +
        '<input type="text" id="new-task-input" placeholder="Describe the task…">' +
        '<select id="new-task-prio">' +
          '<option value="high">High</option>' +
          '<option value="medium" selected>Medium</option>' +
          '<option value="low">Low</option>' +
        "</select>" +
        '<button class="tbtn tbtn-add" onclick="confirmAdd(' + idx + ')">Add</button>' +
        '<button class="tbtn tbtn-danger" onclick="hideAddForm()">Cancel</button>' +
      "</div>" +
      '<ul class="todo-list">' + todoItemsHTML + "</ul>" +
    "</div>";

  document.getElementById("panel-body").innerHTML = bodyHTML;
}


// ── TODO ACTIONS ──────────────────────────────────────────

function toggleTodo(projectIdx, todoIdx) {
  if (ongoingProjects[projectIdx].todos[todoIdx].done == true) {
    ongoingProjects[projectIdx].todos[todoIdx].done = false;
  } else {
    ongoingProjects[projectIdx].todos[todoIdx].done = true;
  }
  buildOngoingBody(projectIdx);
  renderOngoing();
}

function deleteTodo(projectIdx, todoIdx) {
  ongoingProjects[projectIdx].todos.splice(todoIdx, 1);
  buildOngoingBody(projectIdx);
  renderOngoing();
}

function showAddForm() {
  document.getElementById("add-form").className = "add-form show";
}

function hideAddForm() {
  document.getElementById("add-form").className = "add-form";
}

function confirmAdd(projectIdx) {
  var input = document.getElementById("new-task-input");
  var txt = input.value.trim();

  if (txt == "") {
    return;
  }

  var prio = document.getElementById("new-task-prio").value;
  ongoingProjects[projectIdx].todos.push({ text: txt, done: false, priority: prio });

  input.value = "";
  hideAddForm();
  buildOngoingBody(projectIdx);
  renderOngoing();
}

// allow Enter key to submit the add task form
document.addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    var addForm = document.getElementById("add-form");
    if (addForm != null && addForm.className.indexOf("show") != -1) {
      confirmAdd(currentOpenIdx);
    }
  }
});


// ── START UPGRADE ─────────────────────────────────────────

function startUpgrade(finishedIdx) {
  finishedProjects[finishedIdx].upgrading = true;

  var newOngoing = {
    title: finishedProjects[finishedIdx].title,
    fromFinishedIdx: finishedIdx,
    timeline: [
      { step: "Plan upgrade features", status: "current", date: "Now" },
      { step: "Implement changes",     status: "next",    date: "TBD" },
      { step: "Test & review",         status: "next",    date: "TBD" },
      { step: "Re-deploy",             status: "next",    date: "TBD" }
    ],
    todos: [
      { text: "Define what to improve", done: false, priority: "high" }
    ]
  };

  ongoingProjects.unshift(newOngoing);
  closePanel();
  renderFinished();
  renderOngoing();
  document.getElementById("ongoing").scrollIntoView({ behavior: "smooth" });
}


// ── MARK PROJECT AS COMPLETE ──────────────────────────────

function markComplete(idx) {
  var p = ongoingProjects[idx];

  if (p.fromFinishedIdx != null) {
    finishedProjects[p.fromFinishedIdx].upgrading = false;
    ongoingProjects.splice(idx, 1);
  } else {
    var newFinished = {
      title: p.title,
      desc: "Completed project — all tasks done.",
      tags: [],
      link: "#",
      upgrading: false,
      timeline: p.timeline,
      todos: p.todos
    };
    finishedProjects.push(newFinished);
    ongoingProjects.splice(idx, 1);
  }

  closePanel();
  renderFinished();
  renderOngoing();
}


// ── BUILD TIMELINE HTML ───────────────────────────────────

function buildTimelineHTML(tl) {
  var html = '<div class="tl-wrap"><h3>Timeline</h3><div class="timeline">';

  for (var i = 0; i < tl.length; i++) {
    var s = tl[i];

    var itemClass = "tl-item";
    var badgeClass = "tb-next";
    var badgeText = "Upcoming";

    if (s.status == "done") {
      itemClass = "tl-item tl-done";
      badgeClass = "tb-done";
      badgeText = "✓ Done";
    } else if (s.status == "current") {
      itemClass = "tl-item tl-current";
      badgeClass = "tb-now";
      badgeText = "In Progress";
    }

    html = html +
      '<div class="' + itemClass + '">' +
        "<h4>" + s.step +
          '<span class="tl-badge ' + badgeClass + '">' + badgeText + "</span>" +
        "</h4>" +
        '<div class="tl-date">' + s.date + "</div>" +
      "</div>";
  }

  html = html + "</div></div>";
  return html;
}


// ── PANEL OPEN / CLOSE ────────────────────────────────────

function openPanel() {
  document.getElementById("main-panel").className = "panel open";
  document.body.style.overflow = "hidden";
  document.getElementById("main-panel").scrollTop = 0;
}

function closePanel() {
  document.getElementById("main-panel").className = "panel";
  document.body.style.overflow = "";
}

document.getElementById("panel-back").addEventListener("click", closePanel);


// ── NAV HIGHLIGHT ON SCROLL ───────────────────────────────

window.addEventListener("scroll", function() {
  var sections = document.querySelectorAll("section, .home");
  var navLinks = document.querySelectorAll(".topnav ul li a");
  var current = "";

  for (var i = 0; i < sections.length; i++) {
    if (window.scrollY >= sections[i].offsetTop - 130) {
      current = sections[i].id;
    }
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].className = "";
    if (navLinks[i].getAttribute("href") == "#" + current) {
      navLinks[i].className = "active";
    }
  }
});


// ── START ─────────────────────────────────────────────────

renderFinished();
renderOngoing();
