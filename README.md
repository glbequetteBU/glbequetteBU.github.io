<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Little Surprise For You ❤️</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom font and smooth transitions */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f0f4f8 0%, #e0e7ff 100%); /* Soft light blue/gray gradient */
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .heart-icon {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    </style>
</head>
<body class="p-4 sm:p-8">

    <div id="main-container" class="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-6 sm:p-10 text-center transition-all duration-500 ease-in-out">

        <!-- Header and Main Message -->
        <header class="mb-8">
            <div class="inline-block heart-icon text-red-500 mb-4">
                <!-- Inline SVG Heart Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </div>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
                To My Amazing Girlfriend
            </h1>
            <p class="text-xl sm:text-2xl text-pink-600 font-semibold italic">
                You are my favorite surprise.
            </p>
        </header>

        <!-- Main Content Card -->
        <main class="space-y-6">
            <p class="text-lg text-gray-600">
                I made this little page just for you, to tell you how much I appreciate everything you do.
                Every day with you is the best day. You bring so much light and joy into my world.
            </p>

            <div class="bg-pink-50 p-6 rounded-xl border border-pink-200">
                <p class="text-2xl font-bold text-pink-700">
                    "I love you more than words can say."
                </p>
            </div>

            <!-- Interactive Element -->
            <button id="reveal-button"
                class="mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
                onclick="revealMessage()">
                Click for a Secret Message!
            </button>

            <!-- Hidden Message Area -->
            <div id="secret-message" class="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-lg rounded-lg shadow-inner transition-all duration-700 ease-in-out opacity-0 max-h-0 overflow-hidden">
                <p class="font-medium">
                    You're the most beautiful, intelligent, and kind person I know. Let's go get our favorite food tonight! I've already made reservations. ❤️
                </p>
            </div>
        </main>

        <!-- Footer/Signature -->
        <footer class="mt-10 pt-4 border-t border-gray-100">
            <p class="text-sm text-gray-500 italic">
                Made with all my love, just for you.
            </p>
        </footer>

    </div>

    <script>
        function revealMessage() {
            const button = document.getElementById('reveal-button');
            const message = document.getElementById('secret-message');
            const container = document.getElementById('main-container');

            if (message.classList.contains('opacity-0')) {
                // Show the message
                message.classList.remove('opacity-0', 'max-h-0');
                message.classList.add('opacity-100', 'max-h-96');
                button.textContent = 'Awww, thank you!';
                button.classList.remove('bg-red-500', 'hover:bg-red-600');
                button.classList.add('bg-green-500', 'hover:bg-green-600');

                // Scroll down slightly to ensure the revealed message is visible
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });

            } else {
                // Optional: Hide the message again, though usually you want to leave it revealed
                // message.classList.remove('opacity-100', 'max-h-96');
                // message.classList.add('opacity-0', 'max-h-0');
                // button.textContent = 'Click for a Secret Message!';
                // button.classList.remove('bg-green-500', 'hover:bg-green-600');
                // button.classList.add('bg-red-500', 'hover:bg-red-600');
            }
        }
    </script>

</body>
</html>
