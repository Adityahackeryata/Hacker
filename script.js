document.addEventListener("DOMContentLoaded", function() {
    const secretKey = "@AHMAD_GODMOD1";
    const form = document.getElementById("loginForm");
    const gameLinkInput = document.getElementById("gameLink");
    const loginAnimation = document.getElementById("loginAnimation");
    const successMessage = document.getElementById("successMessage");
    const patchGameBtn = document.getElementById("patchGameBtn");
    const progressBar = document.getElementById("progressBar");
    const resultArea = document.getElementById("resultArea");
    const currentPeriodEl = document.getElementById("currentPeriod");
    const processingResultEl = document.getElementById("processingResult");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const userInput = document.getElementById("secretKey").value;

        if (userInput === secretKey) {
            showLoginAnimation();
        } else {
            alert("Invalid key. Please try again.");
        }
    });

    patchGameBtn.addEventListener("click", function() {
        if (gameLinkInput.value) {
            showProgressBar();
        } else {
            alert("Please enter a valid game link.");
        }
    });

    function showLoginAnimation() {
        form.style.display = "none";
        let stages = [
            "Authenticating...",
            "Checking Key On The Server...",
            "Checking Server Connection...",
            "Establishing Secure Connection...",
            "Login In Python Script..."
        ];

        let index = 0;
        loginAnimation.classList.remove("hidden");
        let interval = setInterval(() => {
            if (index < stages.length) {
                loginAnimation.textContent = stages[index];
                index++;
            } else {
                clearInterval(interval);
                loginAnimation.classList.add("hidden");
                successMessage.classList.remove("hidden");
            }
        }, 1000);
    }

    function showProgressBar() {
        progressBar.classList.remove("hidden");
        let progress = 0;
        let interval = setInterval(() => {
            progress += 5;
            document.querySelector(".progress").style.width = progress + "%";
            if (progress >= 100) {
                clearInterval(interval);
                showResult();
            }
        }, 100);
    }

    function showResult() {
        progressBar.classList.add("hidden");
        resultArea.classList.remove("hidden");

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const totalMinutes = hours * 60 + minutes + 1;
        const currentDate = now.toISOString().split("T")[0].replace(/-/g, '');
        const currentPeriod = `${currentDate}01${totalMinutes.toString().padStart(4, '0')}`;

        currentPeriodEl.textContent = currentPeriod;

        let results = [
            'Big 40%', 'Small 58%', 'Red 70%', 'Green 44%',
            'Big Red 78%', 'Big Green 58%', 'Small Red 88%', 'Small Green 33%',
            'Skip Karde', 'Play At Your Own Risk', 'This Python Code Version Is V1.1'
        ];

        const randomResult = results[Math.floor(Math.random() * results.length)];
        processingResultEl.textContent = `Processing Your Result: ${randomResult}`;
    }
});
