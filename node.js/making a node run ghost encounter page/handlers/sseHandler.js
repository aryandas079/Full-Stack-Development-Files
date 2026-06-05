import stories from "../data/stories.js"

export default function sseHandler(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // Send an initial connected state
    res.write(`data: ${JSON.stringify({ connected: true })}\n\n`);

    // Every 3 seconds, emit a random story from stories.js
    const interval = setInterval(() => {
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        res.write(`data: ${JSON.stringify({ story: randomStory })}\n\n`);
    }, 3000);

    // Clean up the interval when the client closes the connection
    req.on('close', () => {
        clearInterval(interval);
    });
}


// this file is completely done with AI 