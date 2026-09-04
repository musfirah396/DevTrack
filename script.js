document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DEVTRACK - COMPLETE JAVASCRIPT
    ===================================================== */


    /* =====================================================
       1. NAVIGATION
    ===================================================== */

    const menuLinks =
        document.querySelectorAll(".menu a[data-view]");

    const views =
        document.querySelectorAll(".view");

    const topbarTitle =
        document.getElementById("topbar-title");


    const pageTitles = {
        dashboard: "Welcome to my Dashboard",
        projects: "My Projects",
        tasks: "My Tasks",
        settings: "Settings"
    };


    menuLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const view =
                this.getAttribute("data-view");


            menuLinks.forEach(function (item) {
                item.classList.remove("active");
            });


            this.classList.add("active");


            views.forEach(function (item) {
                item.classList.remove("active");
            });


            const selected =
                document.getElementById(
                    "view-" + view
                );


            if (selected) {
                selected.classList.add("active");
            }


            if (
                topbarTitle &&
                pageTitles[view]
            ) {
                topbarTitle.textContent =
                    pageTitles[view];
            }

        });

    });



    /* =====================================================
       2. LIGHT THEME CSS - INJECTED BY JAVASCRIPT
    ===================================================== */

    const lightThemeStyle =
        document.createElement("style");

    lightThemeStyle.id =
        "devtrack-light-theme";


    lightThemeStyle.textContent = `

        /* PAGE */

        html.light-mode,
        body.light-mode {
            background: #f4f6f9 !important;
            color: #171923 !important;
        }


        body.light-mode .app {
            background: #f4f6f9 !important;
        }


        /* SIDEBAR */

        body.light-mode .sidebar {
            background: #ffffff !important;
            border-right: 1px solid #e1e5eb !important;
        }


        body.light-mode .logo {
            color: #171923 !important;
        }


        body.light-mode .menu a {
            color: #555b68 !important;
        }


        body.light-mode .menu a:hover {
            background: #f0f1f5 !important;
            color: #171923 !important;
        }


        body.light-mode .menu a.active {
            background: #eeeaff !important;
            color: #7057ff !important;
        }


        /* TOPBAR */

        body.light-mode .topbar {
            background: #ffffff !important;
            border-bottom: 1px solid #e1e5eb !important;
        }


        body.light-mode .topbar-title {
            color: #171923 !important;
        }


        body.light-mode .moon-icon {
            background: #f0f1f5 !important;
            color: #171923 !important;
        }


        /* CONTENT */

        body.light-mode .welcome-title {
            color: #171923 !important;
        }


        body.light-mode .welcome-sub {
            color: #737987 !important;
        }


        body.light-mode h1,
        body.light-mode h2,
        body.light-mode h3,
        body.light-mode h4,
        body.light-mode p,
        body.light-mode span {
            /* only elements with existing light-theme rules
               will override where needed */
        }


        /* STAT CARDS */

        body.light-mode .stat-card {
            background: #ffffff !important;
            border-color: #e1e5eb !important;
        }


        body.light-mode .stat-num {
            color: #171923 !important;
        }


        body.light-mode .stat-label {
            color: #737987 !important;
        }


        /* BOXES */

        body.light-mode .box {
            background: #ffffff !important;
            border-color: #e1e5eb !important;
        }


        body.light-mode .box-title {
            color: #171923 !important;
        }


        body.light-mode .progress-track {
            background: #e3e6eb !important;
        }


        body.light-mode .progress-text {
            color: #737987 !important;
        }


        /* PROJECTS */

        body.light-mode .project-card {
            background: #ffffff !important;
            border-color: #e1e5eb !important;
        }


        body.light-mode .project-name {
            color: #171923 !important;
        }


        body.light-mode .project-desc {
            color: #737987 !important;
        }


        body.light-mode .lang-row {
            color: #737987 !important;
        }


        body.light-mode .progress-pct {
            color: #737987 !important;
        }


        body.light-mode .tasks-done {
            color: #737987 !important;
        }


        body.light-mode .progress-track {
            background: #e3e6eb !important;
        }


        /* BUTTONS */

        body.light-mode .btn {
            background: #f7f8fa !important;
            color: #333744 !important;
            border-color: #dfe3e9 !important;
        }


        body.light-mode .btn:hover {
            background: #eeeeff !important;
            color: #7057ff !important;
            border-color: #7c5cff !important;
        }


        body.light-mode .btn-add {
            background: #7c5cff !important;
            color: #ffffff !important;
            border-color: #7c5cff !important;
        }


        /* TASK FILTERS */

        body.light-mode .task-filter {
            background: #ffffff !important;
            color: #737987 !important;
            border-color: #dfe3e9 !important;
        }


        body.light-mode .task-filter.active {
            background: #7c5cff !important;
            color: #ffffff !important;
            border-color: #7c5cff !important;
        }


        /* TASK CARDS */

        body.light-mode .task-card {
            background: #ffffff !important;
            border-color: #e1e5eb !important;
        }


        body.light-mode .task-details h3 {
            color: #171923 !important;
        }


        body.light-mode .task-details p {
            color: #737987 !important;
        }


        body.light-mode .task-project {
            background: #eeeaff !important;
            color: #7057ff !important;
        }


        body.light-mode .task-date {
            color: #737987 !important;
        }


        body.light-mode .task-menu {
            color: #737987 !important;
        }


        /* ACTIVITY */

        body.light-mode .activity-list li {
            color: #555b68 !important;
            border-bottom-color: #e1e5eb !important;
        }


        /* SETTINGS */

        body.light-mode .settings-box {
            background: #ffffff !important;
            border-color: #e1e5eb !important;
        }


        body.light-mode .settings-box h2 {
            color: #171923 !important;
        }


        body.light-mode .settings-desc {
            color: #737987 !important;
        }


        body.light-mode .theme-btn {
            background: #ffffff !important;
            color: #333744 !important;
            border-color: #dfe3e9 !important;
        }


        body.light-mode .theme-btn.active {
            background: #7c5cff !important;
            color: #ffffff !important;
            border-color: #7c5cff !important;
        }


        /* ACCOUNT */

        body.light-mode .account-info div {
            border-bottom-color: #e1e5eb !important;
        }


        body.light-mode .account-info span {
            color: #737987 !important;
        }


        body.light-mode .account-info strong {
            color: #171923 !important;
        }


        /* MODALS */

        body.light-mode .modal {
            background: rgba(0,0,0,0.35) !important;
        }


        body.light-mode .modal-box {
            background: #ffffff !important;
            border-color: #e1e5eb !important;
        }


        body.light-mode .modal-header h2 {
            color: #171923 !important;
        }


        body.light-mode .modal-header button {
            color: #737987 !important;
        }


        body.light-mode .modal-box label {
            color: #555b68 !important;
        }


        body.light-mode .modal-box input,
        body.light-mode .modal-box select,
        body.light-mode .modal-box textarea {
            background: #f7f8fa !important;
            color: #171923 !important;
            border-color: #dfe3e9 !important;
        }


        body.light-mode .modal-box input::placeholder,
        body.light-mode .modal-box textarea::placeholder {
            color: #9aa0ad !important;
        }


        /* TOPBAR PROFILE */

        body.light-mode .topbar-user-name {
            color: #171923 !important;
        }


        body.light-mode .topbar-user-handle {
            color: #737987 !important;
        }


        /* DELETE MENU */

        body.light-mode .task-action-menu {
            background: #ffffff !important;
            border-color: #dfe3e9 !important;
        }


        body.light-mode .delete-task-btn {
            color: #333744 !important;
        }


        /* SCROLLBAR */

        body.light-mode::-webkit-scrollbar-track {
            background: #f1f3f6 !important;
        }


        body.light-mode::-webkit-scrollbar-thumb {
            background: #c6cad2 !important;
        }

    `;


    document.head.appendChild(
        lightThemeStyle
    );



    /* =====================================================
       3. THEME FUNCTION
    ===================================================== */

    const themeBtn =
        document.getElementById("theme-btn");

    const themeButtons =
        document.querySelectorAll(".theme-btn");


    function applyTheme(theme) {

        if (theme === "light") {

            document.documentElement
                .classList.add("light-mode");

            document.body
                .classList.add("light-mode");


            if (themeBtn) {

                themeBtn.textContent = "☀️";

                themeBtn.title =
                    "Switch to Dark Mode";

            }

        } else {

            document.documentElement
                .classList.remove("light-mode");

            document.body
                .classList.remove("light-mode");


            if (themeBtn) {

                themeBtn.textContent = "🌙";

                themeBtn.title =
                    "Switch to Light Mode";

            }

        }


        themeButtons.forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );


                const text =
                    button.textContent
                        .trim()
                        .toLowerCase();


                if (
                    theme === "dark" &&
                    text.includes("dark")
                ) {

                    button.classList.add(
                        "active"
                    );

                }


                if (
                    theme === "light" &&
                    text.includes("light")
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );


        localStorage.setItem(
            "devtrack-theme",
            theme
        );

    }


    /*
        Settings buttons:
        onclick="setTheme('dark')"
        onclick="setTheme('light')"
    */

    window.setTheme = function(theme) {

        applyTheme(theme);

    };


    /*
        Topbar Moon / Sun
    */

    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            function () {

                const light =
                    document.body.classList
                        .contains("light-mode");


                if (light) {

                    applyTheme("dark");

                } else {

                    applyTheme("light");

                }

            }
        );

    }


    /*
        Load saved theme
    */

    const savedTheme =
        localStorage.getItem(
            "devtrack-theme"
        ) || "dark";


    applyTheme(savedTheme);



    /* =====================================================
       4. TASK FILTER
    ===================================================== */

    const taskFilters =
        document.querySelectorAll(".task-filter");


    taskFilters.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                taskFilters.forEach(
                    function(item) {
                        item.classList.remove(
                            "active"
                        );
                    }
                );


                this.classList.add("active");


                const filter =
                    this.getAttribute(
                        "data-filter"
                    );


                document
                    .querySelectorAll(".task-card")
                    .forEach(function(task) {

                        const status =
                            task.getAttribute(
                                "data-status"
                            );


                        if (
                            filter === "all" ||
                            filter === status
                        ) {

                            task.style.display =
                                "flex";

                        } else {

                            task.style.display =
                                "none";

                        }

                    });

            }
        );

    });



    /* =====================================================
       5. TASK CHECKBOX
    ===================================================== */

    document.addEventListener(
        "change",
        function(e) {

            if (
                !e.target.classList.contains(
                    "task-checkbox"
                )
            ) {
                return;
            }


            const task =
                e.target.closest(".task-card");


            if (!task) {
                return;
            }


            const date =
                task.querySelector(".task-date");


            if (e.target.checked) {

                task.classList.add(
                    "completed-task"
                );

                task.setAttribute(
                    "data-status",
                    "completed"
                );


                if (date) {
                    date.textContent =
                        "Completed";
                }

            } else {

                task.classList.remove(
                    "completed-task"
                );

                task.setAttribute(
                    "data-status",
                    "active"
                );


                if (date) {
                    date.textContent =
                        "Due: Not set";
                }

            }

        }
    );



    /* =====================================================
       6. TASK DELETE
    ===================================================== */

    document.addEventListener(
        "click",
        function(e) {

            if (
                e.target.classList.contains(
                    "delete-task-btn"
                )
            ) {

                const task =
                    e.target.closest(
                        ".task-card"
                    );


                if (task) {
                    task.remove();
                }

            }

        }
    );



    /* =====================================================
       7. TASK MENU
    ===================================================== */

    document.addEventListener(
        "click",
        function(e) {

            if (
                !e.target.classList.contains(
                    "task-menu"
                )
            ) {
                return;
            }


            const task =
                e.target.closest(".task-card");


            if (!task) {
                return;
            }


            document
                .querySelectorAll(
                    ".task-action-menu"
                )
                .forEach(function(menu) {
                    menu.remove();
                });


            const menu =
                document.createElement("div");


            menu.className =
                "task-action-menu";


            menu.innerHTML = `
                <button
                    type="button"
                    class="delete-task-btn"
                >
                    Delete Task
                </button>
            `;


            menu.style.position =
                "absolute";

            menu.style.right =
                "45px";

            menu.style.top =
                "35px";

            menu.style.zIndex =
                "9999";

            menu.style.padding =
                "6px";

            menu.style.borderRadius =
                "8px";

            menu.style.background =
                "#1c202b";

            menu.style.border =
                "1px solid #303542";


            task.style.position =
                "relative";


            task.appendChild(menu);

        }
    );



    /* =====================================================
       8. ADD TASK MODAL
    ===================================================== */

    const taskModal =
        document.getElementById("task-modal");

    const addTaskBtn =
        document.getElementById("add-task-btn");

    const closeTaskBtn =
        document.getElementById("close-modal");

    const saveTaskBtn =
        document.getElementById("save-task");


    if (addTaskBtn && taskModal) {

        addTaskBtn.addEventListener(
            "click",
            function() {

                taskModal.classList.add(
                    "show"
                );

            }
        );

    }


    if (closeTaskBtn && taskModal) {

        closeTaskBtn.addEventListener(
            "click",
            function() {

                taskModal.classList.remove(
                    "show"
                );

            }
        );

    }


    if (taskModal) {

        taskModal.addEventListener(
            "click",
            function(e) {

                if (e.target === taskModal) {

                    taskModal.classList.remove(
                        "show"
                    );

                }

            }
        );

    }



    /* =====================================================
       9. ADD TASK
    ===================================================== */

    if (saveTaskBtn) {

        saveTaskBtn.addEventListener(
            "click",
            function() {

                const nameInput =
                    document.getElementById(
                        "task-name"
                    );

                const descInput =
                    document.getElementById(
                        "task-description"
                    );

                const projectInput =
                    document.getElementById(
                        "task-project"
                    );

                const dateInput =
                    document.getElementById(
                        "task-date"
                    );


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";


                const description =
                    descInput
                        ? descInput.value.trim()
                        : "";


                const project =
                    projectInput
                        ? projectInput.value
                        : "General";


                const date =
                    dateInput
                        ? dateInput.value
                        : "";


                if (!name) {

                    alert(
                        "Please enter task name."
                    );

                    return;

                }


                let dueDate =
                    "Due: Not set";


                if (date) {

                    const d =
                        new Date(
                            date + "T00:00:00"
                        );


                    dueDate =
                        "Due: " +
                        d.toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }
                        );

                }


                const taskList =
                    document.getElementById(
                        "task-list"
                    );


                if (!taskList) {
                    return;
                }


                const task =
                    document.createElement("div");


                task.className =
                    "task-card";


                task.setAttribute(
                    "data-status",
                    "active"
                );


                task.innerHTML = `

                    <input
                        type="checkbox"
                        class="task-checkbox"
                    >

                    <div class="task-details">

                        <h3>
                            ${escapeHTML(name)}
                        </h3>

                        <p>
                            ${escapeHTML(
                                description ||
                                "No description"
                            )}
                        </p>

                    </div>

                    <span class="task-project">
                        ${escapeHTML(project)}
                    </span>

                    <span class="task-date">
                        ${dueDate}
                    </span>

                    <button
                        type="button"
                        class="task-menu"
                    >
                        ⋮
                    </button>

                `;


                taskList.appendChild(task);


                if (nameInput) {
                    nameInput.value = "";
                }

                if (descInput) {
                    descInput.value = "";
                }

                if (dateInput) {
                    dateInput.value = "";
                }


                if (taskModal) {
                    taskModal.classList.remove(
                        "show"
                    );
                }

            }
        );

    }



    /* =====================================================
       10. ADD PROJECT
    ===================================================== */

    const addProjectBtn =
        document.querySelector(
            "#view-projects .btn-add"
        );


    if (addProjectBtn) {

        const projectModal =
            document.createElement("div");


        projectModal.className =
            "modal";


        projectModal.id =
            "project-modal";


        projectModal.innerHTML = `

            <div class="modal-box">

                <div class="modal-header">

                    <h2>
                        Add New Project
                    </h2>

                    <button
                        type="button"
                        id="close-project-modal"
                    >
                        ×
                    </button>

                </div>


                <label>
                    Project Name
                </label>

                <input
                    type="text"
                    id="project-name"
                    placeholder="Enter project name"
                >


                <label>
                    Description
                </label>

                <input
                    type="text"
                    id="project-description"
                    placeholder="Enter project description"
                >


                <label>
                    Language
                </label>

                <select id="project-language">

                    <option value="HTML">
                        HTML
                    </option>

                    <option value="CSS">
                        CSS
                    </option>

                    <option value="JavaScript">
                        JavaScript
                    </option>

                    <option value="Python">
                        Python
                    </option>

                    <option value="Java">
                        Java
                    </option>

                    <option value="React">
                        React
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>


                <label>
                    Progress
                </label>

                <input
                    type="number"
                    id="project-progress"
                    min="0"
                    max="100"
                    value="0"
                >


                <button
                    type="button"
                    class="save-task"
                    id="save-project"
                >
                    Add Project
                </button>

            </div>
        `;


        document.body.appendChild(
            projectModal
        );


        addProjectBtn.addEventListener(
            "click",
            function() {

                projectModal.classList.add(
                    "show"
                );

            }
        );


        const closeProjectBtn =
            document.getElementById(
                "close-project-modal"
            );


        if (closeProjectBtn) {

            closeProjectBtn.addEventListener(
                "click",
                function() {

                    projectModal.classList.remove(
                        "show"
                    );

                }
            );

        }


        projectModal.addEventListener(
            "click",
            function(e) {

                if (e.target === projectModal) {

                    projectModal.classList.remove(
                        "show"
                    );

                }

            }
        );


        const saveProjectBtn =
            document.getElementById(
                "save-project"
            );


        if (saveProjectBtn) {

            saveProjectBtn.addEventListener(
                "click",
                function() {

                    const nameInput =
                        document.getElementById(
                            "project-name"
                        );

                    const descInput =
                        document.getElementById(
                            "project-description"
                        );

                    const languageInput =
                        document.getElementById(
                            "project-language"
                        );

                    const progressInput =
                        document.getElementById(
                            "project-progress"
                        );


                    const name =
                        nameInput.value.trim();


                    const description =
                        descInput.value.trim();


                    const language =
                        languageInput.value;


                    let progress =
                        Number(
                            progressInput.value
                        );


                    if (!name) {

                        alert(
                            "Please enter project name."
                        );

                        return;

                    }


                    if (isNaN(progress)) {
                        progress = 0;
                    }


                    progress =
                        Math.max(
                            0,
                            Math.min(
                                100,
                                progress
                            )
                        );


                    const colors = {

                        HTML: "#e34c26",

                        CSS: "#2965f1",

                        JavaScript: "#f7df1e",

                        Python: "#3776ab",

                        Java: "#b07219",

                        React: "#61dafb",

                        Other: "#7c5cff"

                    };


                    const projectGrid =
                        document.querySelector(
                            "#view-projects .project-grid"
                        );


                    if (!projectGrid) {
                        return;
                    }


                    const card =
                        document.createElement("div");


                    card.className =
                        "project-card";


                    card.style.borderTopColor =
                        colors[language];


                    card.innerHTML = `

                        <h3 class="project-name">
                            ${escapeHTML(name)}
                        </h3>

                        <div class="lang-row">

                            <span
                                class="lang-dot"
                                style="
                                    background:${colors[language]};
                                "
                            ></span>

                            ${escapeHTML(language)}

                        </div>

                        <p class="project-desc">
                            ${escapeHTML(
                                description ||
                                "No project description."
                            )}
                        </p>

                        <div class="progress-inline">

                            <div class="progress-track">

                                <div
                                    class="progress-fill"
                                    style="
                                        width:${progress}%;
                                    "
                                ></div>

                            </div>

                            <span class="progress-pct">
                                ${progress}%
                            </span>

                        </div>

                        <p class="tasks-done">
                            0 / 0 tasks completed
                        </p>

                        <div class="card-buttons">

                            <button
                                type="button"
                                class="btn btn-delete"
                            >
                                Delete
                            </button>

                        </div>

                    `;


                    projectGrid.appendChild(
                        card
                    );


                    /*
                        Add project to task dropdown
                    */

                    const taskProject =
                        document.getElementById(
                            "task-project"
                        );


                    if (taskProject) {

                        const option =
                            document.createElement(
                                "option"
                            );


                        option.value =
                            name;

                        option.textContent =
                            name;


                        taskProject.appendChild(
                            option
                        );

                    }


                    nameInput.value = "";
                    descInput.value = "";
                    progressInput.value = "0";


                    projectModal.classList.remove(
                        "show"
                    );

                }
            );

        }

    }



    /* =====================================================
       11. DELETE PROJECT
    ===================================================== */

    document.addEventListener(
        "click",
        function(e) {

            if (
                !e.target.classList.contains(
                    "btn-delete"
                )
            ) {
                return;
            }


            const card =
                e.target.closest(
                    ".project-card"
                );


            if (!card) {
                return;
            }


            const name =
                card.querySelector(
                    ".project-name"
                );


            const projectName =
                name
                    ? name.textContent.trim()
                    : "this project";


            if (
                confirm(
                    `Are you sure you want to delete "${projectName}"?`
                )
            ) {

                card.remove();

            }

        }
    );



    /* =====================================================
       12. ESC CLOSE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function(e) {

            if (e.key !== "Escape") {
                return;
            }


            document
                .querySelectorAll(".modal.show")
                .forEach(function(modal) {

                    modal.classList.remove(
                        "show"
                    );

                });

        }
    );



    /* =====================================================
       13. ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

});