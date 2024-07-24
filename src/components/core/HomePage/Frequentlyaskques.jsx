import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';


const faqs = [
  {
    question: 'Why choose our educational platform?',
    answer: 'Our platform is dedicated to providing high-quality education accessible to all, fostering a community of lifelong learners.',
  },
  {
    question: 'What are the prerequisites to start learning on our platform?',
    answer: 'All you need is a curious mind and a desire to learn! Our courses cater to beginners and advanced learners alike.',
  },
  {
    question: 'How do I enroll in courses on your educational website?',
    answer: 'Enrolling in courses is simple. Just create an account, browse our catalog, and click on the course you wish to enroll in.',
  },
  {
    question: 'What are some challenging topics covered in your courses?',
    answer: 'Our courses cover a wide range of topics, from advanced mathematics to cutting-edge technology, ensuring you can find something to challenge yourself with.',
  },
  {
    question: 'If I face difficulties in understanding a concept, what support do you offer?',
    answer: 'We provide comprehensive support through forums, live sessions, and dedicated mentors to ensure you grasp every concept thoroughly.',
  },
  {
    question: 'How can I track my progress on your educational platform?',
    answer: 'Tracking your progress is easy. Our platform records your completion status for each course and provides detailed analytics to monitor your learning journey.',
  },
  {
    question: 'What types of courses are available on your platform?',
    answer: 'We offer a diverse range of courses including programming, design, business, language learning, and more, catering to various interests and career paths.',
  },
  {
    question: 'Are the courses on your platform self-paced?',
    answer: 'Yes, most of our courses are self-paced, allowing you to study at your own convenience and pace.',
  },
  {
    question: 'How can I pay for courses on your educational platform?',
    answer: 'You can pay for courses using major credit cards, PayPal, or other accepted payment methods. We also offer flexible payment plans for certain courses.',
  },
  {
    question: 'Do you offer certificates upon course completion?',
    answer: 'Yes, we provide certificates of completion for many of our courses. These certificates can be a valuable addition to your resume or portfolio.',
  },
  {
    question: 'What sets your platform apart from other online learning platforms?',
    answer: 'Our platform stands out due to our commitment to quality content, interactive learning experiences, and dedicated support for our learners.',
  },
  {
    question: 'How can I access course materials after enrolling?',
    answer: "Once enrolled, you'll have access to course materials such as lectures, readings, and assignments through our user-friendly learning interface.",
  },
  {
    question: 'Are there opportunities for interaction with instructors and fellow learners?',
    answer: 'Yes, we encourage interaction through discussion forums, live Q&A sessions, and collaborative projects, fostering a vibrant learning community.',
  },
  {
    question: 'Can I switch courses or get a refund if I change my mind?',
    answer: 'We offer a flexible course exchange policy and a refund option within a specified timeframe, ensuring you find the right fit for your learning goals.',
  },
  {
    question: 'How can I access free resources on your platform?',
    answer: 'We offer a selection of free courses, tutorials, and resources that you can access without any cost. Simply browse our free section to get started.',
  },
  {
    question: 'Are there prerequisites for enrolling in advanced courses?',
    answer: 'Some advanced courses may have prerequisites listed on their course description page. These prerequisites ensure you have the necessary background knowledge to succeed.',
  },
  {
    question: 'Do you offer career services or job placement assistance?',
    answer: 'While we do not provide direct job placement, we offer career development resources, resume-building tips, and networking opportunities to support your career goals.',
  },
  {
    question: 'Can I download course materials for offline access?',
    answer: 'At this time, our platform does not support downloading course materials for offline access. However, you can access them anytime through our online platform.',
  },
  {
    question: 'How often are new courses added to your platform?',
    answer: 'We regularly update our course catalog with new offerings across various disciplines. Check back frequently or subscribe to our newsletter for updates.',
  },
  {
    question: 'Is technical support available if I encounter issues with the platform?',
    answer: 'Yes, we provide technical support to assist you with any platform-related issues. Contact our support team via email or through our helpdesk for prompt assistance.',
  },
  {
    question: 'Do you offer discounts for group enrollments or corporate training?',
    answer: 'Yes, we offer discounts for group enrollments and customized corporate training programs. Contact our sales team to discuss your organization’s learning needs.',
  },
  {
    question: 'Are your courses accredited or recognized by educational institutions?',
    answer: 'While our courses provide valuable learning experiences, they may not be accredited by formal educational institutions. However, our certificates are widely recognized in industry.',
  },
  {
    question: 'Can I access course materials after completing a course?',
    answer: 'Yes, you retain access to course materials indefinitely after completing a course. This allows you to review content and reference materials as needed in the future.',
  },
  {
    question: 'How can I provide feedback on courses or suggest new topics?',
    answer: 'We value your feedback! You can provide feedback through course surveys or by contacting our support team. We also welcome suggestions for new course topics.',
  },
  {
    question: 'How can I participate in discussions on your platform?',
    answer: 'You can participate in discussions by posting questions, sharing insights, and responding to other users’ posts in our dedicated discussion sections for each course.',
  },
  {
    question: 'Can I ask questions and get answers from other users?',
    answer: 'Absolutely! Our platform encourages interaction. You can ask questions and receive answers from both instructors and fellow learners to enhance your understanding.',
  },
  {
    question: 'How do I bookmark important discussions or posts?',
    answer: 'To bookmark discussions or posts, simply click on the bookmark icon next to the post. You can access your bookmarks later from your profile dashboard.',
  },
  {
    question: 'Is there a way to like or upvote questions and answers?',
    answer: 'Yes, you can show appreciation for helpful questions and answers by liking or upvoting them. This helps highlight valuable content for other users.',
  },
  {
    question: 'How do I join a virtual room on your platform?',
    answer: 'Joining a virtual room is easy. Navigate to the room’s page, enter the room ID provided, and click join. You’ll be instantly connected to the virtual environment.',
  },
  {
    question: 'What features are available in your virtual rooms?',
    answer: 'Our virtual rooms support audio and video conferencing, real-time chat for communication, collaborative whiteboard for brainstorming, and screen sharing for interactive presentations.',
  },
  {
    question: 'Can I schedule and host my own virtual room sessions?',
    answer: 'Yes, users can schedule and host their own virtual room sessions for group discussions, study sessions, or collaborative projects using our platform’s scheduling tools.',
  },
  {
    question: 'How secure are the virtual rooms on your platform?',
    answer: 'We prioritize security in our virtual rooms with encrypted connections and access controls to ensure a safe and private environment for all participants.',
  },
  {
    question: 'Are there moderation tools available in the virtual rooms?',
    answer: 'Yes, moderators have access to tools for managing participant permissions, controlling screen sharing, and monitoring chat interactions to maintain a productive environment.',
  },
  {
    question: 'Can I record sessions in the virtual rooms for later review?',
    answer: 'Recording sessions is possible with our platform’s recording feature, allowing you to revisit discussions, presentations, or collaborations at your convenience.',
  },
  {
    question: 'How can I invite others to join a virtual room session?',
    answer: 'You can invite others by sharing the room ID or a direct link to the session. Participants can easily join using the provided access details.',
  },
  {
    question: 'Do you provide technical support during virtual room sessions?',
    answer: 'Yes, our technical support team is available to assist during virtual room sessions to resolve any connectivity issues or technical difficulties that may arise.',
  },
  {
    question: 'Is there a limit on the number of participants in a virtual room session?',
    answer: 'The number of participants allowed in a virtual room session may vary depending on the room type and settings configured. Larger rooms may support more participants.',
  },
  {
    question: 'Can I customize the layout or interface of the virtual room?',
    answer: 'Our platform offers customizable options for virtual room interfaces, allowing you to adjust layouts, display settings, and toolbars based on your preferences or specific needs.',
  },
  {
    question: 'How can I provide feedback or suggest improvements for virtual room features?',
    answer: 'We welcome feedback on virtual room features! You can submit suggestions through our feedback form or directly contact our support team with your ideas for improvements.',
  },
];




const FAQSection = () => {

    
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };


  return (

    <section className="relative not-prose scroll-mt-[72px] text-white  -mt-[60px]">
    
      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-6xl">
        <div className="text-center md:mx-auto mb-8 md:mb-12 max-w-3xl">
          <p className="font-black text-sky-400 text-2xl text-heading uppercase">FAQs</p>
          <h2 className="font-bold font-heading leading-tighter tracking-tighter text-heading md:text-4xl text-3xl">Frequently Asked Questions</h2>
          <p className="text-richblack-100 text-xl mt-3">Dive into the following questions to gain insights into the powerful features that GetSkilledOnline offers and how it can elevate your Educational journey.</p>
        </div>
        <div className="scroll-container">
          <div className="gradient-top"></div>
          <div className="scroll-content">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8 md:mb-12">
                <div className="flex flex-row max-w-none">
                  <div className="flex justify-center">
                    <FaChevronRight className="text-primary flex-shrink-0 h-6 mr-2 mt-1 rtl:ml-2 rtl:mr-0 w-6 text-blue-500" />
                  </div>
                  <div className="mt-0.5">
                    <h3 className="font-bold text-xl">{faq.question}</h3>
                    <p className="text-richblack-200 mt-1">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="gradient-bottom"></div>
        </div>
      </div>

      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-6xl -mt-[80px]">
        <div className="mx-auto text-center dark:border dark:border-slate-600 dark:shadow-none max-w-3xl p-6 rounded-md shadow-xl">
          
          <div className="text-center md:mx-auto mb-8">
            <h2 className="font-bold font-heading leading-tighter tracking-tighter text-heading md:text-4xl text-4xl">  Ask Any Question </h2>
            <p className="text-richblack-200 dark:text-slate-400 mt-2 text-md">
              Have a question in mind? Don't hesitate to ask! Whether it's about our services, features, or anything else, we're here to help you.
            </p>
          </div>
        
          <div className="gap-4 m-auto max-w-xs sm:max-w-md mt-6">
            <form onSubmit={handleSubmit} className="w-full sm:mb-0 flex flex-row gap-6">
              <input
                type="text"
                value={newQuestion}
                onChange={handleInputChange}
                placeholder="Ask a question..."
                className="w-full p-2 rounded-md border border-gray-300 text-richblack-900"
              />
              <button type="submit" className="w-[100px] bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-600 mb-1" >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>

  );
};

export default FAQSection;
