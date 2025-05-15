# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing.sequence import pad_sequences
# import pickle
# import pandas as pd

# app = Flask(__name__)

# # Load tokenizer and model
# with open("./models/tokenizer.pkl", "rb") as handle:
#     tokenizer = pickle.load(handle)

# model = load_model("./models/multi_label_nlp_model.h5")

# # Load label names
# df_train = pd.read_csv(r"train.csv")
# labels = df_train.iloc[:, 3:].columns
# max_len = 300

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()
#     title = data.get('title', '')
#     abstract = data.get('abstract', '')

#     combined_text = title + " " + abstract
#     seq = tokenizer.texts_to_sequences([combined_text])
#     padded = pad_sequences(seq, maxlen=max_len, padding='post')
#     prediction = model.predict(padded)
#     binary = (prediction > 0.5).astype(int)
#     predicted_labels = [labels[i] for i in range(len(binary[0])) if binary[0][i] == 1]

#     return jsonify({
#         "predicted_fields": predicted_labels if predicted_labels else ["No specific field detected"]
#     })

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load tokenizer and model
with open("./models/tokenizer.pkl", "rb") as handle:
    tokenizer = pickle.load(handle)

model = load_model("./models/multi_label_nlp_model.h5")

# Load label names
df_train = pd.read_csv(r"train.csv")
labels = df_train.iloc[:, 3:].columns
max_len = 300

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        title = data.get('title', '')
        abstract = data.get('abstract', '')

        print(f"Received title: {title}")
        print(f"Received abstract: {abstract}")

        combined_text = title + " " + abstract
        seq = tokenizer.texts_to_sequences([combined_text])
        padded = pad_sequences(seq, maxlen=max_len, padding='post')
        
        # Model prediction
        prediction = model.predict(padded)
        binary = (prediction > 0.5).astype(int)
        predicted_labels = [labels[i] for i in range(len(binary[0])) if binary[0][i] == 1]

        return jsonify({
            "predicted_fields": predicted_labels if predicted_labels else ["No specific field detected"]
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"predicted_fields": ["Error occurred while processing the request"]}), 500

if __name__ == '__main__':
    app.run(debug=True)
