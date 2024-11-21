// array of objects with questions and answers called faq
const faq = [
  {
    question: "What was State Parks' Role in the EIR?",
    answer:
      'State Parks is a responsible agency under CEQA as it has discretionary approval authority over the project due to the need for a GPA to authorize the portion of the project affecting LASHP. State Parks cooperated with LA Metro as a responsible agency, including consultation in preparation of the Draft EIR and Final EIR. In particular, State Parks provided comments on the Draft EIR on those project elements and proposals affecting LASHP. In addition, State Parks determined that the project would require a GPA to be approved and authorized for LASHP. This process is noted in the EIR as are other post-EIR certification review and approval processes that will be required through the City of Los Angeles and California Department of Transportation (Caltrans).',
  },
  {
    question: 'Who approved the LA ART Project Final EIR?',
    answer:
      'LA Metro is the lead agency under CEQA and the decision-making body that approved the project and certified the LA ART Project Final EIR.',
  },
  {
    question:
      'Does State Parks have a role in the overall approval of this project?',
    answer:
      'Due to the need to amend the LASHP General Plan, State Parks is a responsible agency for this project in accordance with CEQA. The SPRC is the decision-making body that has the approval authority over GPAs.',
  },
  {
    question: 'What are the next steps now that the LA ART EIR is approved?',
    answer:
      'The LA ART project is required to obtain a LASHP GPA, which would be necessary to authorize such a project in the LASHP. A GPA is subject to the review and approval of SPRC. Additional approvals will also be required from the City of Los Angeles and the Caltrans before the project is constructed.',
  },
  {
    question:
      'Will there be opportunities to provide input and public comment during the GPA process?',
    answer:
      "State Parks' GPA process will involve a public outreach effort to gather input to help inform the department's consideration of the project. There will be multiple opportunities for the public to comment and provide input to the proposed action. This will include a hearing at a scheduled SPRC meeting.",
  },
  // Add more questions and answers here
];

const FAQ = () => {
  return (
    <section tabIndex={0} className="border-t border-gray-300 mb-8 p-8">
      <h2 className="text-3xl yeseva font-bold text-burnt-orange">FAQ</h2>
      <h3 className="font-semibold pt-4">As of September 12, 2024 </h3>
      {faq.map((item, index) => (
        <div key={index}>
          <h4 className="font-semibold pt-4">{item.question}</h4>
          <p className="font-normal pt-4">{item.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
