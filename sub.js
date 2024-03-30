const mqtt = require('mqtt');

// MQTT broker address and port
const brokerUrl = 'mqtt://localhost:1883';

// MQTT topic to subscribe to
const topic = 'medical/device/data';

// Create MQTT client
const client = mqtt.connect(brokerUrl);

// Event handler for successful connection
client.on('connect', () => {
    console.log('Connected to MQTT broker');
    // Subscribe to MQTT topic
    client.subscribe(topic);
});

// Event handler for receiving messages
client.on('message', (topic, message) => {
    console.log('Received message:', message.toString());
});

// Event handler for error
client.on('error', (error) => {
    console.error('Error:', error);
});