import React from "react";
import QnaQuestion from "./QnaQuestion";

const QnaComponent = () => {
  return (
    <div
      //   style={{ margin: "75px 0px" }}
      style={{
        width: "65.2%",
        marginTop: "75px",
        paddingLeft: "25px",
        borderLeft: "1px solid #dadada",
      }}
    >
      <h1>Frequently Asked Question</h1>
      <br />
      <QnaQuestion
        obj={{
          ques: "What is this website for?",
          ans: "This website shows various National and International Scholarships",
        }}
      />
      <QnaQuestion
        obj={{
          ques: "How this website works?",
          ans: "User has to complete the profile, register for various scholarships and if criteria is fulfilled you wil receive the grant/reward",
        }}
      />
      <QnaQuestion
        obj={{
          ques: "Does it regularly update the Scholarships?",
          ans: "Yes, It regularly and automatically fetches scholarships from several webites and shows them at one place ",
        }}
      />
      <QnaQuestion
        obj={{
          ques: "Is there any payment or commision?",
          ans: "No, We currently do not possess any type of commission or payment, any email or message for money will not be entertained",
        }}
      />
      <QnaQuestion
        obj={{
          ques: "Is there any maximum registration criteria?",
          ans: "No, As such there is no boundation on maximum number of registrations.",
        }}
      />
    </div>
  );
};

export default QnaComponent;
