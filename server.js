const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');

// Route for host view (garden visualization)
app.get('/garden', (req, res) => {
    const filePath = path.join(publicPath, 'garden.html');
    res.type('html');
    fs.createReadStream(filePath).pipe(res);
});

// Serve static files from public folder
app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`  Imagination Garden Server Started`);
    console.log(`========================================\n`);
    console.log(`  Audience URL  : http://localhost:${PORT}`);
    console.log(`  Host/Garden   : http://localhost:${PORT}/garden`);
    console.log(`\n========================================\n`);
});
