import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
const PORT = 9002;

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const mongoURI = "mongodb+srv://cshashank899:4PqmxLqHApmJzdFn@betaproject.3zayq5h.mongodb.net/?retryWrites=true&w=majority";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
