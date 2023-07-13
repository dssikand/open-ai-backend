import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const model = 'gpt-3.5-turbo';

export class AIController {
  static async AI(req: any, res: any) {
    try {
      const url: any = process.env.URL;
      const response = await axios.post(url, {
        text: req.body.text,
        type: req.body.type,
      });
      return res.json({
        message: 'fteched',
        data: response.data,
        status_code: 200,
      });
    } catch (error) {
      console.log(error, 'erro');
      return res.json({
        message: 'Something Went wrong with Transcript',
        data: error,
        status_code: 400,
      });
    }
  }
}
