import { ObjectId } from 'mongodb';
import { connectToDB } from '../db';

export const resolvers = {
  Query: {
    characters: async () => {
      const db = await connectToDB();
      return (await db.collection('characters').find().toArray()).map(character => {
        return {
          name: character.name,
          initiative: character.initiative,
          id: character._id.toString()
        }
      });
    },
  },

  Mutation: {
    createCharacter: async (_: any, { name, initiative }: { name: string; initiative: number }) => {
      const db = await connectToDB();
      const result = await db.collection('characters').insertOne({ name, initiative });

      return { id: result.insertedId.toString(), name, initiative };
    },

    updateCharacter: async (_: any, { id, name, initiative }: 
      { id: string, name?: string | null, initiative?: number | null }) => {  
    
      const db = await connectToDB();
      const charactersCollection = db.collection('characters');
      const objectId = new ObjectId(id);
    
      // Fetch the existing character
      const existingCharacter = await charactersCollection.findOne({ _id: objectId });
    
      if (!existingCharacter) {
        throw new Error(`Character with ID ${id} not found.`);
      }
    
      // Create an update object that only includes fields that are not null or undefined
      const updateFields: any = {};
      if (name !== null && name !== undefined) updateFields.name = name;
      if (initiative !== null && initiative !== undefined) updateFields.initiative = initiative;
    
      if (Object.keys(updateFields).length === 0) {
        throw new Error(`No valid fields provided for update.`);
      }
    
      const characterToUpdate = await charactersCollection.findOneAndUpdate(
        { _id: objectId }, 
        { $set: updateFields },
        { returnDocument: 'after' } // Return the updated document
      );

      if (!characterToUpdate) {
        throw new Error(`Character with ID ${id} not found.`);
      }
    
      return {
        id: characterToUpdate._id.toString(),
        name: characterToUpdate.name,
        initiative: characterToUpdate.initiative,
      };
    },
    
    deleteCharacter: async (_: any, { id }: { id: string }) => {
      const db = await connectToDB();
      const charactersCollection = db.collection('characters');
      const objectId = new ObjectId(id);

      const result = await charactersCollection.deleteOne({ _id: objectId });

      if (result.deletedCount === 0) {
        return false; // No matching document found, return false
      }

      return true; // Successfully deleted
    },
  },
}
