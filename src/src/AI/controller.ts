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
    var convertfromPandastoPySpark = req.body.text;
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
            prompt: `${Text}`,
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
            prompt: `### SQL tables, with their properties:\n#\n#\n### ${SqlQuery}\n`,
            temperature: 0.3,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });

          res.json({ data: sqlResponse.data, status_code: 200 });
          break;
        //3> Case for Natural Language to Python
        case 'NaturalLanguagetoPython':
          var NaturalLanguageToPython = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `\"\"\"\n${NaturalLanguagetoPython}\n\"\"\"`,
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
            prompt: ` "##### Fix bugs in the below function\n \n### Buggy Python\n\n ${PythonBugfixer}\n### Fixed Python"`,
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
            prompt: `# Python 3.7\n \n\n${PythonDocstring}\n# An elaborate, high quality docstring for the above function or code:\n\"\"\"`,
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
            prompt: `/*${NaturalLanguagetoJava} */`,
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
            prompt: `/*${NaturalLanguagetoScala} */`,
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
            prompt: `Summarize this paragraph and make it informative:\n\n${Summarizefora2ndgrader}`,
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
            prompt: `### SQL tables, with their properties:\n#\n#\n### ${SQLTranslate}\nSELECT`,
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
            prompt: `Parse the unstructured data from below paragraph:\n\n${ParseUnstructureddata}`,
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
            prompt: `# Python 3 \n${PythontoNaturalLanguage}\n\n# Explanation of what the code does\n\n#`,
            temperature: 0,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: PythonToNaturalLanguage.data, status_code: 200 });
          break;
        case 'AptitudeAnswers':
          var AptitudeAnswers = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nAnswer the above question with clear explanation\n\n`,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: AptitudeAnswers.data, status_code: 200 });
          break;
        // 12> Case for Calculate Time Complexity
        case 'CalculateTheTimeComplexity':
          var CalculateTimeComplexity = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${CalculateTheTimeComplexity}\n\"\"\"\nThe time complexity of this function or code is`,
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
            prompt: `${TranslateProgrammingLanguage}`,
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
            prompt: `${convertfromPySparktoSQL}\n\nConvert above the above PySpark code to SQL`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.json({ data: convertfromPySparkToSQL.data, status_code: 200 });
          break;
        case 'convertfromPandastoPySpark':
          var convertfromPandastoSpark = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `${convertfromPandastoPySpark}\n\nConvert above the above Pandas code to PySpark`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: convertfromPandastoSpark.data, status_code: 200 });
        case 'ParseUnstructureddata':
          var ParseUnstructuredData = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nParse the unstructured data from above paragraph to structured data:`,
            temperature: 0,
            max_tokens: 400,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: ParseUnstructuredData.data, status_code: 200 });
        // 15> Case for write JavaScripts
        case 'writeJavaScript':
          var WriteJavaScript = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `${writeJavaScript}`,
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
            prompt: `${Explaincode}\n\n\"\"\"\nHere's what the above code is doing:\n1.`,
            temperature: 0,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['"""'],
          });

          res.json({ data: ExplainCode.data, status_code: 200 });
          break;
        case 'MarketResearch':
          var MarketResearch = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nExtract some insights from the above text i.e. make some Market Research`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: MarketResearch.data, status_code: 200 });
        // 17> Case for JavaScript to Python
        case 'MarketResearchOnlyNumbers':
          var MarketResearchOnlyNumbers = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nExtract some insights from the above text i.e. make some Market Research (Only get the numbers)`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: MarketResearchOnlyNumbers.data, status_code: 200 });
        case 'ContentWriter':
          var ContentWriter = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nWrite or generate a content for above input sentence or paragraph:`,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: ContentWriter.data, status_code: 200 });
        case 'PlagiarismRemover':
          var PlagiarismRemover = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nRemove the plagiarism for the above sentence or paragraph:`,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: PlagiarismRemover.data, status_code: 200 });
        case 'AptitudeAnswers':
          var AptitudeAnswers = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nAnswer the above question with clear explanation\n\n`,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: AptitudeAnswers.data, status_code: 200 });
        case 'ExtractImportantWords':
          var ExtractImportantWords = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nExtract the Organizations, Quantities, Monetary values, Percentages, and more. People’s names, People Designation, Salary, Company names, Geographic locations (Both physical and political), Product names, Dates and times, Amounts of money, Names of events and other entities from the above sentence or paragraph and classify into their respective entity types.\n\n`,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: ExtractImportantWords.data, status_code: 200 });
        case 'GetExcelFormula':
          var GetExcelFormula = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nWrite excel formula for the above question\n\n`,
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: GetExcelFormula.data, status_code: 200 });
        case 'MCQGeneration':
          var MCQGeneration = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nGenerate 5 Multiple Choice Questions from the above sentence or paragraph\n\n`,
            temperature: 0.73,
            max_tokens: 2192,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: MCQGeneration.data, status_code: 200 });

        case 'QuestionGeneration':
          var QuestionGeneration = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nGenerate 5 Fill in the blank Questions (Those must be tought to answer) from the above sentence or paragraph\n\n`,
            temperature: 0.73,
            max_tokens: 2192,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: QuestionGeneration.data, status_code: 200 });

        case 'QuestionAndAnswering':
          var QuestionAndAnswering = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nTake reference from the above sentence or paragraph and give answers for the above question asked\n\n`,
            temperature: 0.73,
            max_tokens: 2192,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: QuestionAndAnswering.data, status_code: 200 });
        case 'EssayWriting':
          var EssayWriting = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nWrite an 1500 word essay on the above given topic or the question.\n\n`,
            temperature: 0.73,
            max_tokens: 2192,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: EssayWriting.data, status_code: 200 });
        case 'VBACode':
          var VBACode = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${req.body.text}\n\nWrite a VBA code for above question\n\n`,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          res.json({ data: VBACode.data, status_code: 200 });
        case 'postgresql':
          var sqlResponse = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `### Postgres SQL tables, with their properties:\n#\n#\n### ${req.body.text}\nSELECT`,
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
        case 'oraclesql':
          var sqlResponse = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `### ORACLE SQL tables, with their properties:\n#\n#\n### ${req.body.text}\nSELECT`,
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
        case 'anisql':
          var sqlResponse = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `### ANSI SQL tables, with their properties:\n#\n#\n### ${req.body.text}\nSELECT`,
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
        case 'storeprocedure':
          var sqlResponse = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `### SQL tables, with their properties:\n#\n#\n### ${req.body.text}\nCREATE PROCEDURE`,
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
        case 'view':
          var sqlResponse = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `### SQL tables, with their properties:\n#\n#\n### ${req.body.text}\nCREATE VIEW`,
            temperature: 0.3,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          });
          res.json({ data: sqlResponse.data, status_code: 200 });
        case 'JavaScripttoPython':
          var JavaScriptToPython = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `#JavaScript to Python:\nJavaScript: \n${JavaScripttoPython}\n\nPython:`,
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
            prompt: `${CodeForQandA}`,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['\n'],
          });

          res.json({ data: CodeForqAnda.data, status_code: 200 });
          break;
        // 19> Case for playground
        case CodeForPlayground:
          var playGround = await openai.createCompletion({
            model: 'code-davinci-003',
            prompt: `${CodeForPlayground}`,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
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
