import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export class AIController {
  static async AI(req: any, res: any) {
    console.log(req.body);
    var Text = req.body.text;
    var SqlQuery = req.body.text;
    var NaturalLanguagetoPython = req.body.text;
    var PythonBugfixer = req.body.text;
    var PythonDocstring = req.body.text;
    var NaturalLanguagetoJava = req.body.text;
    var NaturalLanguagetoScala = req.body.text;
    var Summarizefora2ndgrader = req.body.text;
    var SQLTranslate = req.body.text;
    var ParseUnstructureddata = req.body.text;
    var PythontoNaturalLanguage = req.body.text;
    var CalculateTheTimeComplexity = req.body.text;
    var TranslateProgrammingLanguage = req.body.text;
    var convertfromPySparktoSQL = req.body.text;
    var writeJavaScript = req.body.text;
    var Explaincode = req.body.text;
    var JavaScripttoPython = req.body.text;
    var CodeForQandA = req.body.text;
    var CodeForPlayground = req.body.text;


    try {
      switch (req.body.type) {
        // 1> Case for summarizing Text
        case 'Text':
          var textResponse = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: Text,
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
          });

          res.json({ data: textResponse.data, status_code: 200 });
          break;
        // 2> Case for Generate Sql Query
        case 'SqlQuery':
          var sqlResponse = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: SqlQuery,
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });

          res.json({ data: sqlResponse.data });
          break;
        //3> Case for Natural Language to Python
        case 'NaturalLanguagetoPython':
          var NaturalLanguageToPython = await openai.createCompletion({
            model: 'code-davinci-003',
            prompt: NaturalLanguagetoPython,
            temperature: 0,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: NaturalLanguageToPython.data, status_code: 200 });
          break;
        // 4> Case for Python Bug Fixer
        case 'PythonBugfixer':
          var pythonBugFix = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: PythonBugfixer,
            temperature: 0,
            max_tokens: 182,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['###'],
          });

          res.json({ data: pythonBugFix.data, status_code: 200 });
          break;
        // 5> Case for Python Docstring
        case 'PythonDocstring':
          var PythonDocString = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: PythonDocstring,
            temperature: 0,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['###'],
          });

          res.json({ data: PythonDocString.data, status_code: 200 });
          break;
        // 6> Case for NaturalLanguagetoJava
        case 'NaturalLanguagetoJava':
          var NaturalLanguageToJava = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: NaturalLanguagetoJava,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: NaturalLanguageToJava.data, status_code: 200 });
          break;

        // 7> Case for Natural Language to Scala
        case 'NaturalLanguagetoScala':
          var NaturalLanguageToScala = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: NaturalLanguagetoScala,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: NaturalLanguageToScala.data, status_code: 200 });
          break;

        // 8> Case for Summarize for a 2nd grader
        case 'Summarizefora2ndgrader':
          var Summarizefora2ndGrader = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: Summarizefora2ndgrader,
            temperature: 0.7,
            max_tokens: 356,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: Summarizefora2ndGrader.data, status_code: 200 });
          break;
        // 9> Case for SQL Translate
        case 'SQLTranslate':
          var SQLTranslater = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: SQLTranslate,
            temperature: 0,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['#', ';'],
          });

          res.json({ data: SQLTranslater.data, status_code: 200 });
          break;
        // 10>  Case forParse Unstructured Data
        case 'ParseUnstructureddata':
          var ParseUnstructuredData = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: ParseUnstructureddata,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: ParseUnstructuredData.data, status_code: 200 });
          break;
        // 11> Case for Python to Natural Language
        case 'PythontoNaturalLanguage':
          var PythonToNaturalLanguage = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: PythontoNaturalLanguage,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: PythonToNaturalLanguage.data, status_code: 200 });
          break;
        // 12> Case for Calculate Time Complexity
        case 'CalculateTheTimeComplexity':
          var CalculateTimeComplexity = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: CalculateTheTimeComplexity,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['\n'],
          });

          res.json({ data: CalculateTimeComplexity.data, status_code: 200 });
          break;
        // 13> Case for Translate Programming Languages
        case 'TranslateProgrammingLanguage':
          var TranslateProgrammingLanguages = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: TranslateProgrammingLanguage,
            temperature: 0,
            max_tokens: 54,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['###'],
          });

          res.json({ data: TranslateProgrammingLanguages.data, status_code: 200 });
          break;
        // 14> Case for convert from PySpark to SQL
        case 'convertfromPySparktoSQL':
          var convertfromPySparkToSQL = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: convertfromPySparktoSQL,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: convertfromPySparkToSQL.data, status_code: 200 });
          break;
        // 15> Case for write JavaScripts
        case 'writeJavaScript':
          var WriteJavaScript = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: writeJavaScript,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: WriteJavaScript.data, status_code: 200 });
          break;
        // 16> Case for Explain code
        case 'Explaincode':
          var ExplainCode = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: Explaincode,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['"""'],
          });

          res.json({ data: ExplainCode.data, status_code: 200 });
          break;
        // 17> Case for JavaScript to Python
        case 'JavaScripttoPython':
          var JavaScriptToPython = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: JavaScripttoPython,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: JavaScriptToPython.data, status_code: 200 });
          break;
        // 18>  Code for Q&A
        case 'CodeForQandA':
          // start_sequence = "\nA:"
          // restart_sequence = "\n\nQ: "
          var CodeForqAnda = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: CodeForQandA,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['\n'],
          });

          res.json({ data: CodeForqAnda.data, status_code: 200 });
          break;
        // 19> Case for JavaScript to Python
        case 'CodeForPlayground':
          var playGround = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: CodeForPlayground,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: playGround.data, status_code: 200 });
          break;
      }
    } catch (error) {
      return res.json({
        message: 'Something Went wrong with Transcript',
        data: error,
        status_code: 400,
      });
    }
  }
}
