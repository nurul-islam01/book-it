import nc from 'next-connect';
import { allRooms } from '../../../controllers/roomControllers';
import dbConnect from '../../../config/dbConfig';

const handler = nc();
dbConnect();

handler.get(allRooms);


export default handler;