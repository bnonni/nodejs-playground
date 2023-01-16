import { ServerApiVersion } from 'mongodb';
import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  return await mongoose.connect("", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverApi: ServerApiVersion.v1,
  } as ConnectOptions);
};

connectDB().then(mongo => {
  mongo.Collection.
})
