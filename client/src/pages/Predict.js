// import React, { useState } from 'react';
// import './predict.css';

// const Predict = () => {
//   const [title, setTitle] = useState('');
//   const [abstract, setAbstract] = useState('');
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handlePredict = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult('');

//     try {
//       const response = await fetch('http://127.0.0.1:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ title, abstract })
//       });

//       const data = await response.json();
//       setResult(data.predicted_fields.join(', '));
//     } catch (error) {
//       setResult('Error occurred while fetching prediction');
//       console.error(error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="form-page">
//       <div className="form-card">
//         <h2>Predict Field</h2>
//         <form onSubmit={handlePredict}>
//           <div className="form-group">
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               className="form-control"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="abstract">Abstract:</label>
//             <textarea
//               id="abstract"
//               className="form-control"
//               rows="4"
//               value={abstract}
//               onChange={(e) => setAbstract(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">
//             {loading ? 'Predicting...' : 'Predict'}
//           </button>
//         </form>
//         {result && (
//           <div className="result-box">
//             <h4>Predicted Field(s):</h4>
//             <p>{result}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Predict;


import React, { useState } from 'react';
import './predict.css';

const Predict = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');  // Clear previous result

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, abstract })  // Ensure title and abstract are sent correctly
      });

      const data = await response.json();

      if (data.predicted_fields && data.predicted_fields.length > 0) {
        setResult(data.predicted_fields.join(', '));  // Display predicted fields
      } else {
        setResult('No fields predicted');  // If no fields predicted
      }
    } catch (error) {
      setResult('Error occurred while fetching prediction');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Predict Field</h2>
        <form onSubmit={handlePredict}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="abstract">Abstract:</label>
            <textarea
              id="abstract"
              className="form-control"
              rows="4"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            {loading ? 'Predicting...' : 'Predict'}
          </button>
        </form>
        {result && (
          <div className="result-box">
            <h4>Predicted Field(s):</h4>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
