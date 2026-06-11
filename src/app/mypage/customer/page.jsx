// 고객센터
"use client";
import React, { useState } from "react";
import "@/styles/mypage.scss";
import faqs from "@/data/customerPage.json";

function CustomerPage() {
  const [openIndex, setOpenIndex] = useState([]);

  return (
    <div className="customerPage">
      <h2>고객센터</h2>
      <p className="customerDesc">자주 묻는 질문을 통해 빠르게 해결해보세요.</p>
      <h3>자주 묻는 질문</h3>

      <div className="faqList">
        {faqs.map((faq, i) => (
          <div className="faqItem" key={i}>
            <button
              className="faqTop"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faqQuestion">
                <strong className={openIndex === i ? "active" : ""}>
                  <span>Q.</span>
                  {faq.question}
                </strong>

                <img
                  src="/image/ic_category.svg"
                  className={openIndex === i ? "arrow up" : "arrow"}
                />
              </div>
            </button>
            {openIndex === i && <p className="faqAnswer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerPage;
