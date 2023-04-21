import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const model = 'gpt-4';

export class AIController {
  static async AI(req: any, res: any) {
    console.log(process.env.OPENAI_API_KEY);
    console.log(req.body);
    var Text = req.body.text;
    var SqlQuery = req.body.text;
    var EnglishtoPython = req.body.text;
    var PythonBugfixer = req.body.text;
    var pythonDocString   = req.body.text;
    var EnglishtoJava = req.body.text;
    var EnglishtoScala = req.body.text;
    var Summarizefora2ndgrader = req.body.text;
    var SQLTranslate = req.body.text;
    var ParseUnstructureddata = req.body.text;
    var PythontoEnglish = req.body.text;
    var CalculateTheTimeComplexity = req.body.text;
    var TranslateProgrammingLanguage = req.body.text;
    var convertfromPySparktoSQL = req.body.text;
    var convertfromPandastoPySpark = req.body.text;
    var writeJavaScript = req.body.text;
    var Explaincode = req.body.text;
    var JavaScripttoPython = req.body.text;
    var CodeForQandA = req.body.text;
    var CodeForPlayground = req.body.text;
    var Marketresearch = req.body.text;
    var MarketResearchOnlynumbers = req.body.text;
    var Contentwriter = req.body.text;
    var Plagiarismremover = req.body.text;
    var ExtractImportantwords = req.body.text;
    var VBAcode = req.body.text;
    var Aptitudeanswers  = req.body.text;
    var GetExcelformula  = req.body.text;
    var MCQgeneration  = req.body.text;
    var Questiongeneration  = req.body.text;
    var Essaywriting  = req.body.text;





    try {
      switch (req.body.type) {
        // 1> Case for summarizing Text
        case 'Text':
          // const message:any = [
          //   { system: '', input: '' },
          //   {user:"", input: Text}
          // ]
          var textResponse = await openai.createChatCompletion({

            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });

          res.json({ data: textResponse.data, status_code: 200 });
          break;
        // 2> Case for Generate Sql Query
        case 'SqlQuery':
          var sqlResponse = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: SqlQuery}
            ],
            model: `${model}`,
          });

          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        //3> Case for Natural Language to Python
        case 'EnglishtoPython':
          var EnglishToPython = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the Python code for the question asked with the explanation of every line."},
              {role:"user", content: EnglishtoPython}
            ],
            model: `${model}`,
          
          });

          res.json({ data: EnglishToPython.data, status_code: 200 });
          break;
        // 4> Case for Python Bug Fixer
        case 'PythonBugfixer':
          var pythonBugFix = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the test code for the complete python code given and try to fix the complete code with the explanation of every line."},
              {role:"user", content: PythonBugfixer}
            ],
            model: `${model}`,
          
          });
          res.json({ data: pythonBugFix.data, status_code: 200 });
          break;
        // 5> Case for Python Docstring
        case 'PythonDocstring':
          var PythonDocString = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the Doc String for python code for the question asked or python code pasted with the explanation of every line."},
              {role:"user", content: pythonDocString}
            ],
            model: `${model}`,
          });

          res.json({ data: PythonDocString.data, status_code: 200 });
          break;
        // 6> Case for EnglishtoJava
        case 'EnglishtoJava':
          var EnglishToJava = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the Java code for the question asked with the explanation of every line."},
              {role:"user", content: EnglishtoJava}
            ],
            model: `${model}`,
          });

          res.json({ data: EnglishToJava.data, status_code: 200 });
          break;

        // 7> Case for Natural Language to Scala
        case 'EnglishtoScala':
          var EnglishToScala = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the Scala code for the question asked with the explanation of every line."},
              {role:"user", content: EnglishtoScala}
            ],
            model: `${model}`,
          });

          res.json({ data: EnglishToScala.data, status_code: 200 });
          break;

        // 8> Case for Summarize for a 2nd grader
        case 'Summarizefora2ndgrader':
          var Summarizefora2ndGrader = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Summarizefora2ndgrader}
            ],
            model: `${model}`,
          });

          res.json({ data: Summarizefora2ndGrader.data, status_code: 200 });
          break;
        // 9> Case for SQL Translate
        case 'SQLTranslate':
          var SQLTranslater = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the SQL query for the question asked with the explanation of every line."},
              {role:"user", content: SQLTranslate}
            ],
            model: `${model}`,
          });

          res.json({ data: SQLTranslater.data, status_code: 200 });
          break;
        // 11> Case for Python to Natural Language

        case 'PythontoEnglish':
          var PythonToEnglish = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will get the explain the python code what exactly it is doing and also return its time complexity."},
              {role:"user", content: PythontoEnglish}
            ],
            model: `${model}`,
          });

          res.json({ data: PythonToEnglish.data, status_code: 200 });
          break;
        case 'AptitudeAnswers':
          var AptitudeAnswers = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });

          res.json({ data: AptitudeAnswers.data, status_code: 200 });
          break;
        // 12> Case for Calculate Time Complexity
        case 'CalculateTheTimeComplexity':
          var CalculateTimeComplexity = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will get the time complexity of code with perfect explanation."},
              {role:"user", content: CalculateTheTimeComplexity}
            ],
            model: `${model}`,
          });

          res.json({ data: CalculateTimeComplexity.data, status_code: 200 });
          break;
        // 13> Case for Translate Programming Languages
        case 'TranslateProgrammingLanguage':
          var TranslateProgrammingLanguages = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will convert from one programming language to another. You'll be provided the code that you have to convert to another prgramming langauge. Once I've provided the code, you have to generate the equivalent code for the requested programming language.              "},
              {role:"user", content: Text}
            ],
            model: `${TranslateProgrammingLanguage}`,
          });

          res.json({ data: TranslateProgrammingLanguages.data, status_code: 200 });
          break;
        // 14> Case for convert from PySpark to SQL
        case 'convertfromPySparktoSQL':
          var convertfromPySparkToSQL = await openai.createChatCompletion({
            messages: [
              {role:"system",content:"You are a helpful AI assistant, where you can convert the PySpark code to SQL queries. You'll be provided the PySpark code that you have to convert to SQL. Once I've provided the code, you hve to generate the equivalent SQL query for you. You are here to assist you with converting your PySpark code to SQL."},
              {role:"user", content: convertfromPySparktoSQL}
            ],
            model: `${model}`,
          });

          res.json({ data: convertfromPySparkToSQL.data, status_code: 200 });
          break;
        case 'convertfromPandastoPySpark':
          var convertfromPandastoSpark = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you can convert the Pandas code to PySpark code. You'll be provided the Pandas code that you have to convert to PySpark. Once I've provided the code, you have to generate the equivalent PySpark code for you. You are here to assist you with converting your Pandas code to PySpark."},
              {role:"user", content: convertfromPandastoPySpark}
            ],
            model: `${model}`,
          });
          res.json({ data: convertfromPandastoSpark.data, status_code: 200 });
          break;
        case 'ParseUnstructureddata':
          var ParseUnstructuredData = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will parse the unstructured data into structured format."},
              {role:"user", content: ParseUnstructureddata}
            ],
            model: `${model}`,
          });
          res.json({ data: ParseUnstructuredData.data, status_code: 200 });
          break;
        // 15> Case for write JavaScripts
        case 'writeJavaScript':
          var WriteJavaScript = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the JavaScript code for the question asked with the explanation of every line."},
              {role:"user", content: writeJavaScript}
            ],
            model: `${model}`,
          });

          res.json({ data: WriteJavaScript.data, status_code: 200 });
          break;
        // 16> Case for Explain code
        case 'Explaincode':
          var ExplainCode = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will explain the code and also return the time complexity for the code given or the questions asked."},
              {role:"user", content: Explaincode}
            ],
            model: `${model}`,
          });

          res.json({ data: ExplainCode.data, status_code: 200 });
          break;
        case 'MarketResearch':
          var MarketResearch = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will extract the important information from the reference paragraphs or the sentences and explain what you understood i.e. meaningful insights."},
              {role:"user", content: Marketresearch}
            ],
            model: `${model}`,
          });
          res.json({ data: MarketResearch.data, status_code: 200 });
          break;
        // 17> Case for JavaScript to Python
        case 'MarketResearchOnlyNumbers':
          var MarketResearchOnlyNumbers = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will extract the important numerical information from the reference paragraphs or the sentences, then return the meaningful insights."},
              {role:"user", content: MarketResearchOnlynumbers}
            ],
            model: `${model}`,
          });
          res.json({ data: MarketResearchOnlyNumbers.data, status_code: 200 });
          break;
        case 'ContentWriter':
          var ContentWriter = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the perfect content for the questions asked."},
              {role:"user", content: Contentwriter}
            ],
            model: `${model}`,
          });
          res.json({ data: ContentWriter.data, status_code: 200 });
          break;
        case 'PlagiarismRemover':
          var PlagiarismRemover = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will remove the Plagiarism and rewrite the complete paragraph or sentences perfectly without losing any information."},
              {role:"user", content: Plagiarismremover}
            ],
            model: `${model}`,
          });
          res.json({ data: PlagiarismRemover.data, status_code: 200 });
          break;
        case 'AptitudeAnswers':
          var AptitudeAnswers = await openai.createChatCompletion({
             messages: [
              {role:"system",content:" You are a helpful AI assistant, where you will return the answer the aptitude questions asked with the explanation of why the returned answer is correct."},
              {role:"user", content: Aptitudeanswers}
            ],
            model: `${model}`,
          });
          res.json({ data: AptitudeAnswers.data, status_code: 200 });
          break;
        case 'ExtractImportantWords':
          var ExtractImportantWords = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will extract the keywords from the reference paragraph or sentences and explain what those keywords are."},
              {role:"user", content: ExtractImportantwords}
            ],
            model: `${model}`,
          });
          res.json({ data: ExtractImportantWords.data, status_code: 200 });
          break;
        case 'GetExcelFormula':
          var GetExcelFormula = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will generate the Excel Formula for the question asked."},
              {role:"user", content: GetExcelformula}
            ],
            model: `${model}`,
          });
          res.json({ data: GetExcelFormula.data, status_code: 200 });
          break;
        case 'MCQGeneration':
          var MCQGeneration = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will generate 10 MCQ questions with options from the reference paragraphs or sentences."},
              {role:"user", content: MCQgeneration}
            ],
            model: `${model}`,
          });
          res.json({ data: MCQGeneration.data, status_code: 200 });
          break;
        case 'QuestionGeneration':
          var QuestionGeneration = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will generate 10 questions from the reference paragraphs or sentences."},
              {role:"user", content: Questiongeneration}
            ],
            model: `${model}`,
          });
          res.json({ data: QuestionGeneration.data, status_code: 200 });
          break;
        case 'QuestionAndAnswering':
          var QuestionAndAnswering = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });
          res.json({ data: QuestionAndAnswering.data, status_code: 200 });
          break;
        case 'EssayWriting':
          var EssayWriting = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the Essay Writing for the question asked."},
              {role:"user", content: Essaywriting}
            ],
            model: `${model}`,
          });
          res.json({ data: EssayWriting.data, status_code: 200 });
          break;
        case 'VBACode':
          var VBACode = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will write the VBA code for the question asked with the explanation of every line."},
              {role:"user", content: VBAcode}
            ],
            model: `${model}`,
          });
          res.json({ data: VBACode.data, status_code: 200 });
          break;
        case 'postgresql':
          var sqlResponse = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        case 'oraclesql':
          var sqlResponse = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        case 'anisql':
          var sqlResponse = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        case 'storeprocedure':
          var sqlResponse = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        case 'view':
          var sqlResponse = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will summarize text or sentence or paragraph. It must be summarized in such a way that it must be informative."},
              {role:"user", content: Text}
            ],
            model: `${model}`,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        case 'JavaScripttoPython':
          var JavaScriptToPython = await openai.createChatCompletion({
               messages: [
              {role:"system",content:"You are a helpful AI assistant, where you can convert the JavaScript code to Python code. You'll be provided the JavaScript code that you have to convert to Python. Once I've provided the code, you have to generate the equivalent Python code for you. You are here to assist you with converting your JavaScript code to Python."},
              {role:"user", content: JavaScripttoPython}
            ],
            model: `${model}`,
          });

          res.json({ data: JavaScriptToPython.data, status_code: 200 });
          break;
        // 18>  Code for Q&A
        case 'CodeForQandA':
          // start_sequence = "\nA:"
          // restart_sequence = "\n\nQ: "
          var CodeForqAnda = await openai.createChatCompletion({
             messages: [
              {role:"system",content:"You are a helpful AI assistant, where you will return the answers for the questions asked from the paragraph of sentences you entered for reference."},
              {role:"user", content: CodeForQandA}
            ],
            model: `${model}`,
          });

          res.json({ data: CodeForqAnda.data, status_code: 200 });
          break;
        // 19> Case for playground
        case 'CodeForPlayground':
          var playGround = await openai.createChatCompletion({
              messages: [
              {role:"system",content:"You are a helpful AI assistant where you will be returing the answers for whatever the questions aksed."},
              {role:"user", content: CodeForPlayground}
            ],
            model: `${model}`,
          });
          res.json({ data: playGround.data, status_code: 200 });
          break;
      }
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
