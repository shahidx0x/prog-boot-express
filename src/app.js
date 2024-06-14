const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const errorMiddleware = require("./middleware/error_middleware");
const authRoutes = require("./routes/auth_routes");
const userRoutes = require("./routes/user_routes");
const productRoutes = require("./routes/product_routes");
const winston = require("winston/lib/winston/config");

const app = express();

// Middleware
app.use(morgan("combined", { stream: winston.stream }));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
