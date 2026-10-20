document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);
            }
        });
    });

    // Demo admin login message
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm && loginMessage) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            loginMessage.textContent =
                "Admin login is not available yet. Secure authentication needs to be configured.";

            loginMessage.style.color = "#b42318";
        });
    }

    // Expand and collapse course details
    document.querySelectorAll(".course-card").forEach(function (card) {

        const heading = card.querySelector("h3");

        if (!heading) return;

        let details = card.querySelector(".course-details");

        if (!details) {
            details = document.createElement("div");
            details.className = "course-details";
            details.hidden = true;

            const courseName = heading.textContent.trim().toLowerCase();

            let description = "";

            if (courseName.includes("tamil")) {
                description = "B.A. Tamil: Tamil language, literature and related studies.";
            } else if (courseName.includes("english")) {
                description = "B.A. English: English language, literature and communication.";
            } else if (courseName.includes("chemistry")) {
                description = "B.Sc. Chemistry: Chemistry concepts, laboratory learning and practical work.";
            } else if (courseName.includes("computer science")) {
                description = "B.Sc. Computer Science: Computer fundamentals, programming and software concepts.";
            } else if (courseName.includes("b.com") || courseName.includes("commerce")) {
                description = "B.Com.: Commerce, accounting and business-related studies.";
            } else {
                description = "For course eligibility, duration and seat availability, contact the college.";
            }

            const paragraph = document.createElement("p");
            paragraph.textContent = description;
            details.appendChild(paragraph);

            const note = document.createElement("p");
            note.textContent =
                "Please confirm the official syllabus, eligibility and course details with the college.";
            details.appendChild(note);

            card.appendChild(details);
        }

        card.style.cursor = "pointer";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-expanded", "false");

        function toggleDetails() {
            details.hidden = !details.hidden;
            card.setAttribute("aria-expanded", String(!details.hidden));
        }

        card.addEventListener("click", function (event) {
            if (event.target.closest("a, button")) return;
            toggleDetails();
        });

        card.addEventListener("keydown", function (event) {
            if (event.target !== card) return;

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleDetails();
            }
        });
    });

    // Feedback notice
    const feedbackSection = document.getElementById("feedback");

    if (feedbackSection && !feedbackSection.querySelector(".feedback-notice")) {
        const notice = document.createElement("p");
        notice.className = "feedback-notice";
        notice.setAttribute("role", "status");
        notice.textContent =
            "Online feedback submission has not been configured yet.";

        feedbackSection.appendChild(notice);
    }

});