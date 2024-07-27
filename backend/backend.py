from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
import pickle

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello():
    return "<p>Hello world</p>"

@app.route("/predict", methods=['POST'])
@cross_origin()
def predict_default():
    result = {}
    if request.method == 'POST':
        data = request.get_json()
        modelsToUse = data['modelsToUse']
        userData = data['userData']
        try:
            for mod in modelsToUse:
                fileName = mod['value']
                modelName = mod['key']
                with open(f'./savedModels/tunedModels/{fileName}.pkl', 'rb') as file:
                    model = pickle.load(file)
                file.close()
                newDataFrame = pd.DataFrame(data = [userData], columns=['ID', 'LIMIT_BAL', 'SEX', 'EDUCATION', 'MARRIAGE', 'AGE', 'PAY_0', 'PAY_2',	'PAY_3', 'PAY_4', 'PAY_5', 'PAY_6', 'BILL_AMT1', 'BILL_AMT2', 'BILL_AMT3', 'BILL_AMT4', 'BILL_AMT5','BILL_AMT6','PAY_AMT1',	'PAY_AMT2',	'PAY_AMT3',	'PAY_AMT4',	'PAY_AMT5',	'PAY_AMT6'])
                prediction = model.predict(newDataFrame)
                probabilityPred = model.predict_proba(newDataFrame)
                probability = {
                    0: list(probabilityPred)[0][0],
                    1: list(probabilityPred)[0][1]
                }
                
                result.update({modelName : [int(prediction), probability]})
            return jsonify(result)
        except Exception as error:
            return str({
                "message": "Please check your inputs again!",
                "error": error
            })
