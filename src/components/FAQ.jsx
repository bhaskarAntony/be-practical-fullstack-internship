import React from 'react'
import Registration from './Registration'

const faqData = [
  {
    title:"1",
    question: "What is the application deadline?",
    answer: "The application deadline for our internship program is [deadline date]."
  },
  {
    title:"2",
    question: "Is the internship program paid?",
    answer: "Yes, our internship program is paid, and we offer competitive compensation."
  },
  {
    title:"3",
    question: "How long is the internship program?",
    answer: "The internship program typically lasts for [X] weeks/months, starting on [start date] and concluding on [end date]."
  },
  {
    title:"4",
    question: "Do you provide mentorship for interns?",
    answer: "Absolutely! Interns receive guidance and mentorship from experienced developers."
  },
  {
    title:"5",
    question: "What technologies will interns work with?",
    answer: "Interns will work with technologies like HTML, CSS, JavaScript, Python, and more, depending on the project."
  },
  {
    title:"6",
    question: "Are there networking events for interns?",
    answer: "Yes, we organize networking events and social activities for interns to connect and build a sense of community."
  },
  {
    title:"7",
    question: "Is there potential for full-time employment after the internship?",
    answer: "Outstanding interns may have the opportunity for full-time employment upon graduation or program completion."
  },
  {
    title:"8",
    question: "How can I contact program administrators for questions?",
    answer: "Feel free to reach out to us at [email address] for any questions or inquiries."
  },
  {
    title:"9",
    question: "Do you offer support for international applicants?",
    answer: "Yes, international applicants are welcome, and we provide support for visa-related matters."
  },
  {
    title:"10",
    question: "Will I receive a certificate upon completion of the program?",
    answer: "Yes, upon successful completion, interns receive a certificate and a recommendation letter."
  }
];

function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-white mb-5">
                    Frequently Asked <span className="text-main">Questions</span>
                </h1>
            </div>
          </div>

          <div className="row mt-3 mb-3">
           <div className="col-12 col-md-12 col-lg-8">
           <div className="accordion accordion-flush" id='faq'>
                    {
                      faqData.map((item,index) => {
                          return (
                            <div className="accordion-item bg-faq mt-2 mb-2" key={index}>
                              <div className="accordion-header ">
                                <div className="accordion-button collapsed  border bg-faq mb-1" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-900 text-white"> { item.question } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse bg-white" data-bs-parent="#faq">
                                  <div className="accordion body p-4">
                                  
                                      <p className="text-black text-justify"> { item.answer } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            <Registration/>
           </div>
          </div>
        </div>
    </section>
  )
}

export default FAQ