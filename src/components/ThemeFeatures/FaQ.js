import React, { useState } from 'react'
import'../styles/ThemeFeature/FaQ.css'
import {faqData} from '../../data/ThemeFeature/FaQData'

const FaQ = () => {
  const [mainState,setMainState] = useState(false);
  const handleClick=()=>{
    setMainState(!mainState);
  }
  return (
    <div className='faQMain'>
      <div className='faQDiv'><h2>FAQ</h2></div>
      <div className='faQDiv2'>
      {
        faqData.map((faq,index)=>{
          return(
            <div key={index} className='faQDiv3' >
              <p onClick={handleClick}>{faq.question}</p>
              {mainState &&(<p className='faqP'>{faq.answer}</p>)}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default FaQ


// export default function App() {
//     const [faqs, setFaqs] = useState([
//       {
//         question: "How many programmers does it take to screw a lightbulb?",
//         answer:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
//         open: true
//       },
//       {
//         question: "Who is the most awesome person?",
//         answer: "You! The viewer!",
//         open: false
//       },
//       {
//         question:
//           "How many questions does it take to makes a succesful FAQ Page?",
//         answer: "This many!",
//         open: false
//       }
//     ]);
  
//     const toggleFAQ = index => {
//       setFaqs(
//         faqs.map((faq, i) => {
//           if (i === index) {
//             faq.open = !faq.open;
//           } else {
//             faq.open = false;
//           }
  
//           return faq;
//         })
//       );
//     };
  
//     return (
//       <div className="App">
//         <Header />
//         <div className="faqs">
//           {faqs.map((faq, index) => (
//             <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
//           ))}
//         </div>
//       </div>
//     );
//   }
  


// const FAQ = ({ faq, index, toggleFAQ }) => {
//     return (
//       <div
//         className={"faq " + (faq.open ? "open" : "")}
//         key={index}
//         onClick={() => toggleFAQ(index)}
//       >
//         <div className="faq-question">{faq.question}</div>
//         <div className="faq-answer">{faq.answer}</div>
//       </div>
//     );
//   };
  
//   export default FAQ;