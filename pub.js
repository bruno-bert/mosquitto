const mqtt = require('mqtt');
const { randNumber,
    randRecentDate,
    randUuid,
    randSentence} = require('@ngneat/falso'); 

// MQTT broker address and port
const brokerUrl = 'mqtt://localhost:1883';

// MQTT topic to publish messages
const topic = 'medical/device/data';

// Create MQTT client
const client = mqtt.connect(brokerUrl);

// Event handler for successful connection
client.on('connect', () => {
    console.log('Connected to MQTT broker');
    // Publish messages at regular intervals
    // Publish messages at regular intervals
    setInterval(() => {
        // Simulate slit lamp data
        const patientId = randUuid(); // Generate random patient ID
        const timestamp = randRecentDate(); // Current timestamp
        const visualAcuity = randNumber({ min: 0, max: 10 }); // Simulated visual acuity
        const intraocularPressure = randNumber({ min: 10, max: 25 }); // Simulated intraocular pressure
        const diagnosticFindings = randSentence(); // Simulated diagnostic findings


        // Format data as pipe-delimited string
        const data = `${patientId}|${timestamp}|${visualAcuity}|${intraocularPressure}|${diagnosticFindings}`;
        
        // Publish message to MQTT topic
        client.publish(topic, data);
        console.log('Message published:', data);
    }, 100); // Publish every 5 seconds
});

// Event handler for error
client.on('error', (error) => {
    console.error('Error:', error);
});
