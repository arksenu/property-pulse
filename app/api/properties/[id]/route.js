import connectDB from "@/config/database";
import Property from "@/models/Property";
import mongoose from "mongoose";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = await params;
    console.log("Property ID received: ", id);

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return new Response('Invalid property ID', { status: 400 });
    }

    const property = await Property.findById(id);

    if (!property) return new Response('Property not found', { status: 404 });


    console.log("Property data:", property);
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  } 
}; 