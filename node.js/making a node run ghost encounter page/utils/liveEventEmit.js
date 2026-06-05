const liveSights = document.getElementById("live-sights");

export default function liveEmit() { 
    if (!liveSights) return;

    // Use the browser's native EventSource API to connect to the server's SSE endpoint
    const eventSource = new EventSource("/live-events");

    eventSource.onmessage = (event) => { 
        const data = JSON.parse(event.data);
        
        // Skip the initial connection message
        if (!data.story) return;

        // Display the randomly selected story in the page
        liveSights.innerHTML = `<div class="sight-listings"><p>${data.story}</p></div>`;
    };
    
    eventSource.onerror = (err) => {
        console.error("SSE connection failed:", err);
    };
} 

liveEmit();



// this code file is completely done with AI 