document.querySelector('.container').addEventListener('click', (e) => {
    // Create a new ball div element
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.querySelector('.container').appendChild(ball);
    
    // Set ball's initial position at the click point
    ball.style.left = `${e.clientX - 15}px`; // Center the ball horizontally
    ball.style.top = `${e.clientY - 15}px`;  // Center the ball vertically

    // Physics properties
    let position = e.clientY - 15;
    let velocity = 0;
    const gravity = 0.5;
    const bounceFactor = 0.7;
    let isBouncing = true;

    // Animate the ball falling and bouncing
    function animate() {
        velocity += gravity;
        position += velocity;

        if (position >= window.innerHeight - 30) {  // Ball hit the ground
            position = window.innerHeight - 30;
            velocity *= -bounceFactor;  // Reverse and reduce velocity

            // Stop if bounce is too small
            if (Math.abs(velocity) < 1) {
                isBouncing = false;
            }
        }

        ball.style.top = `${position}px`;

        if (isBouncing) {
            requestAnimationFrame(animate);
        }
    }

    animate();
});
