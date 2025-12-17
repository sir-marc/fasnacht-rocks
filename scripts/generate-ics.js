const fs = require("fs");
const path = require("path");
const { createEvents } = require("ics");

// Since src/events.js uses ES6 imports, we need to read and parse it differently
// We'll extract the events array from the file
function extractEventsFromFile() {
    const eventsFilePath = path.join(__dirname, "../src/events.js");
    const eventsFileContent = fs.readFileSync(eventsFilePath, "utf8");

    // Extract the events array using regex
    const eventsMatch = eventsFileContent.match(/const events = (\[[\s\S]*?\]);/);
    if (!eventsMatch) {
        throw new Error("Could not find events array in events.js");
    }

    // Clean up the array string for JSON parsing
    let eventsString = eventsMatch[1];

    // Remove image imports (they're just variables in the array)
    eventsString = eventsString.replace(/image:\s*\w+,/g, 'image: "",');

    // Remove trailing commas before closing braces/brackets
    eventsString = eventsString.replace(/,(\s*[}\]])/g, "$1");

    // Parse the JSON
    const events = eval("(" + eventsString + ")");
    return events;
}

function parseDateString(dateString) {
    // Parse DD.MM.YYYY format
    const [day, month, year] = dateString.split(".").map((num) => parseInt(num, 10));
    return { day, month, year };
}

function createDescription(event) {
    let description = [];

    if (event.price) {
        if (event.priceDescription) {
            description.push(`Preis: ${event.price} (${event.priceDescription})`);
        } else {
            description.push(`Preis: ${event.price}`);
        }
    }

    if (event.location.name) {
        description.push(`Ort: ${event.location.name}`);
    }

    if (event.partyUrl) {
        description.push(`Weitere Infos: ${event.partyUrl}`);
    }

    return description.join("\\n");
}

function generateICS() {
    console.log("Reading events from src/events.js...");
    const events = extractEventsFromFile();
    console.log(`Found ${events.length} events`);

    // Convert events to ICS format
    const icsEvents = events.map((event) => {
        const { day, month, year } = parseDateString(event.date);

        // Create ICS event object
        const icsEvent = {
            title: event.title,
            start: [year, month, day, 20, 0], // 20:00 (8 PM)
            duration: { hours: 4 },
            location: event.location.name,
            geo: { lat: event.location.lat, lon: event.location.lng },
            url: event.partyUrl,
            description: createDescription(event),
            status: "CONFIRMED",
            busyStatus: "BUSY",
            productId: "fasnacht.rocks",
        };

        return icsEvent;
    });

    // Generate ICS file
    console.log("Generating ICS file...");
    createEvents(icsEvents, (error, value) => {
        if (error) {
            console.error("Error creating ICS file:", error);
            process.exit(1);
        }

        // Write to public/events.ics
        const outputPath = path.join(__dirname, "../public/events.ics");
        fs.writeFileSync(outputPath, value);
        console.log(`✓ Successfully created ${outputPath}`);
        console.log(`✓ Generated calendar with ${icsEvents.length} events`);
    });
}

// Run the script
try {
    generateICS();
} catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
}
