
const surfBoardSchema = new Schema ({
     
       
            author: { type: Schema.Types.ObjectId, ref: "User", default: null },
            Color:{type: String, enum: ["red","white", "black"]},
            Length:{type: String, enum: ["option1","option2", "option3"]},
            Width:{type: String, enum: ["rounded","square", "triangle"]},
            Thickness:{type: String, enum: ["thin","medium", "fat"]},
            Nose-Shape:{type: String, enum: ["rounded","square", "triangle"]},
            Tale-Shape:{type: String, enum: ["rounded","square", "triangle"]},
            Level-of-Board:{type: String, enum:["SchoolBoy", "Happy Medium", "Absolute-boss"]},
            Surfboard Name:{type: String},
            Image:{type: String},

})

