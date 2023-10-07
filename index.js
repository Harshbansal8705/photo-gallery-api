const express = require("express")
const multer = require("multer")
const fs = require("fs")
const path = require("path")
const cors = require("cors")

const PORT = process.env.PORT || 3030

const app = express()
app.use(cors())

let images = JSON.parse(fs.readFileSync("./images.json", "utf8")).images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.split(" ").join(""))
    }
})
const upload = multer({ storage: storage })

app.use(express.static("./public"))

app.get("/images", (req, res) => {
    images = JSON.parse(fs.readFileSync("images.json", "utf8")).images
    res.status(200).json(images)
})

app.post("/images", upload.array("files", 100), async (req, res) => {
    let data = []
    for (let file of req.files) {
        data.push({
            name: file.filename,
            src: `https://localhost:5000/images/` + file.filename
        })
    }
    data = data.concat(images)
    data = JSON.stringify({
        images: data
    })
    fs.writeFileSync(path.join(__dirname, "images.json"), data)
    images = JSON.parse(fs.readFileSync("images.json", "utf8")).images
    res.status(200).json(images)
})

app.delete("/images/:filename", (req, res) => {
    let { filename } = req.params
    let ind = images.findIndex((image) => {
        return image.name === filename
    })
    if (ind == -1) {
        return res.status(400).json({success: false})
    }
    images.splice(ind, 1)
    fs.unlink(`public/images/${filename}`, (err) => {
        if (err) throw err;
    })
    fs.writeFileSync("images.json", JSON.stringify({
        images: images
    }))
    return res.status(200).json(images)
})

app.listen(PORT, () => {
    console.log("Server listening on port 5000...");
})
