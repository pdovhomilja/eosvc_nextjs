import { Schema, models, model } from "mongoose";
import { schemaOptions } from "./modelOptions";

const taskSchema = new Schema(
  {
    section: {
      type: Schema.Types.ObjectId,
      ref: "Sections",
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
    },
  },
  { collection: "Tasks" },
  schemaOptions
);

const Tasks = models.Tasks || model("Tasks", taskSchema);
export default Tasks;
