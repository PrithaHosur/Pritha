from flask import Flask, render_template
from flask import jsonify
from flask import request
#from predict import getPredictions

app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route("/html")
def home():
    return render_template('StockPredTest.html')


# Data sending and receiving test method

@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.get_json()
    cName = data['cName']
    dTerm = data['dTerm']
    
    # Process the user input and other data
    predictedPrice = str(30)
    ExpectedRangeLow = str(120)
    ExpectedRangeHigh = str(150)
    
    result = "The "+dTerm+" prediction for " + cName + " is " + predictedPrice+ " % /and expected price range is "+ExpectedRangeLow+" - "+ExpectedRangeHigh
    
    return jsonify({'result': result})



if __name__ == '__main__':
    app.run()