const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error("Missing MONGODB_URI environment variable.");
    process.exit(1);
}
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

connectToDatabase();

// Endpoint to search for airline information
app.post('/api/searchAirlineInformation', async (req, res) => {
    const { airline, departureDate, arrivalDate } = req.body;
    console.log("Search request:", req.body);

    try {
        const database = client.db('FlightChecker');
        const collection = database.collection('AirlineInformation');

        // Find documents based on provided criteria
        const documents = await collection.find({
            airline: airline,
            departureDate: departureDate,
            arrivalDate: arrivalDate
        }).toArray();

        console.log("Found documents:", documents);

        if (documents.length > 0) {
            res.json({ found: true, documents });
        } else {
            res.json({ found: false, message: 'No matching documents found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
