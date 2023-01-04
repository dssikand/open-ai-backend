import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export class AIController {
  static async AI(req: any, res: any) {
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
      switch (req.body.text) {
        // 1> Case for summarizing Text
        case Text:
          var textResponse = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${Text}`,
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
          });

          res.json({ data: textResponse.data });
          break;
        // 2> Case for Generate Sql Query
        case SqlQuery:
          var sqlResponse = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `### SQL tables, with their properties:\n#\n#\n### ${SqlQuery}\nSELECT`,
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });

          res.json({ data: sqlResponse.data });
          break;
        //3> Case for Natural Language to Python
        case NaturalLanguagetoPython:
          var NaturalLanguageToPython = await openai.createCompletion({
            model: 'code-davinci-003',
            prompt: ` ${NaturalLanguagetoPython}`,
            temperature: 0,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: NaturalLanguageToPython.data });
          break;
        // 4> Case for Python Bug Fixer
        case PythonBugfixer:
          var pythonBugFix = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: ` "##### Fix bugs in the below function\n \n### Buggy Python\nEnter your question\n ${PythonBugfixer}\n### Fixed Python"`,
            temperature: 0,
            max_tokens: 182,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['###'],
          });

          res.json({ data: pythonBugFix.data });
          break;
        // 5> Case for Python Docstring
        case PythonDocstring:
          var PythonDocString = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `# Python 3.7\n \nEnter your question\n${PythonDocstring}\n# An elaborate, high quality docstring for the above function or code:\n\"\"\"`,
            temperature: 0,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['###'],
          });

          res.json({ data: PythonDocString.data });
          break;
        // 6> Case for NaturalLanguagetoJava
        case NaturalLanguagetoJava:
          var NaturalLanguageToJava = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `/* Enter your question:${NaturalLanguagetoJava} */`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: NaturalLanguageToJava.data });
          break;

        // 7> Case for Natural Language to Scala
        case NaturalLanguagetoScala:
          var NaturalLanguageToScala = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `/* Enter your question:${NaturalLanguagetoScala} */`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: NaturalLanguageToScala.data });
          break;

        // 8> Case for Summarize for a 2nd grader
        case Summarizefora2ndgrader:
          var Summarizefora2ndGrader = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Summarize this paragraph and make it informative:\n\nEnter your question:${Summarizefora2ndgrader}`,
            temperature: 0.7,
            max_tokens: 356,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: Summarizefora2ndGrader.data });
          break;
        // 9> Case for SQL Translate
        case SQLTranslate:
          var SQLTranslater = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `### SQL tables, with their properties:\n#\n#\n### Enter your question:${SQLTranslate}\nSELECT`,
            temperature: 0,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['#', ';'],
          });

          res.json({ data: SQLTranslater.data });
          break;
        // 10>  Case forParse Unstructured Data
        case ParseUnstructureddata:
          var ParseUnstructuredData = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Parse the unstructured data from below paragraph:\n\nEnter your question:${ParseUnstructureddata}`,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: ParseUnstructuredData.data });
          break;
        // 11> Case for Python to Natural Language
        case PythontoNaturalLanguage:
          var PythonToNaturalLanguage = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `# Python 3 \nEnter your question:${PythontoNaturalLanguage}\n\n# Explanation of what the code does\n\n#`,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: PythonToNaturalLanguage.data });
          break;
        // 12> Case for Calculate Time Complexity
        case CalculateTheTimeComplexity:
          var CalculateTimeComplexity = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Enter your question:${CalculateTheTimeComplexity}\n\"\"\"\nThe time complexity of this function or code is`,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['\n'],
          });

          res.json({ data: CalculateTimeComplexity.data });
          break;
        // 13> Case for Translate Programming Languages
        case TranslateProgrammingLanguage:
          var TranslateProgrammingLanguages = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `Enter your question:${TranslateProgrammingLanguage}`,
            temperature: 0,
            max_tokens: 54,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['###'],
          });

          res.json({ data: TranslateProgrammingLanguages.data });
          break;
        // 14> Case for convert from PySpark to SQL
        case convertfromPySparktoSQL:
          var convertfromPySparkToSQL = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `Enter your question:${convertfromPySparktoSQL}\n\nConvert above the above PySpark code to SQL`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: convertfromPySparkToSQL.data });
          break;
        // 15> Case for write JavaScripts
        case writeJavaScript:
          var WriteJavaScript = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `/* Enter your question:${writeJavaScript} */`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: WriteJavaScript.data });
          break;
        // 16> Case for Explain code
        case Explaincode:
          var ExplainCode = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `Enter your question:${Explaincode}\n\n\"\"\"\nHere's what the above code is doing:\n1.`,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['"""'],
          });

          res.json({ data: ExplainCode.data });
          break;
        // 17> Case for JavaScript to Python
        case JavaScripttoPython:
          var JavaScriptToPython = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `#JavaScript to Python:\nJavaScript: \nEnter your question:${JavaScripttoPython}\n\nPython:`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: JavaScriptToPython.data });
          break;
        // 18>  Code for Q&A
        case CodeForQandA:
          // start_sequence = "\nA:"
          // restart_sequence = "\n\nQ: "
          var CodeForqAnda = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Enter your question:${CodeForQandA}`,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['\n'],
          });

          res.json({ data: CodeForqAnda.data });
          break;
        // 19> Case for playground
        case CodeForPlayground:
          var playGround = await openai.createCompletion({
            model: 'code-davinci-003',
            prompt: `Enter your question:${CodeForPlayground}`,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: playGround.data });
          break;
      }
    } catch (error) {
      return res.json({
        message: "openAPI isn't working",
        data: error,
      });
    }
  }
}
