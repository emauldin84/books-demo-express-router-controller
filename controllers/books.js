// Create
function create(req, res) {
    res.json({ message: "you created" });
};

// Retrieve
function getAll(req, res) {
    res.json({ message: "you retrieved all" });
};

// Update
function update(req, res) {
    res.json({ message: "you updated" });
};

// Delete
function deletes(req, res) {
    res.json({ message: "you deleted"});
};

module.exports = {
    create,
    getAll,
    update,
    deletes,
};