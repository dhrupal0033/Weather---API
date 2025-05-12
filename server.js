const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());