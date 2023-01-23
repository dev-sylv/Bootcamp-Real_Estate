import mongoose, {Schema, model, Document} from "mongoose";

interface agents {
    agentname: string;
    agentbio: string;
    agentPicture: string;
    agentemail: string;
    agentpassword: string;
    houses: {}[];
    isAdmin: boolean
}

interface iAgents extends agents, Document{};

const agentSchema = new Schema({
    agentname:{
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    agentbio: {
        type: String,
        default: "I am an Agent and i sell afordable houses and lands",
        trim:  true
    },
    agentPicture: {
        type: String,
        required: [true, "Please enter your image for identification"],
        unique: true,
        trim:  true
    },
    agentemail: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        trim: true
    },
    agentpassword: {
        type: String,
        required: [true, "Please enter a strong password"],
        minlength: 8,
    },
    houses : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "HouseCollections"
        }
    ],
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const agentsModel = model<iAgents>("AgentsCollections", agentSchema);

export default agentsModel;