// array of objects with questions and answers called faq
const faq = [
  {
    question: "What is Metro's role in the LA ART project?",
    answer:
      "The Los Angeles County Metropolitan Transportation Authority (Metro) is the lead agency under CEQA for the LA ART project's environmental review.  In February 2024, Metro approved the proposed LA ART project and certified its Final Environmental Impact Report with mitigation measures and conditions, including the LASHP GPA. ",
  },
  {
    question: 'What is the LA ART project status following the decision by the Court of Appeal?',
    answer:
      `The Los Angeles Superior Court upheld Metro's certification of the Final EIR in August 2024.  In May 2025, the Court of Appeal reversed the Superior Court in part and directed Metro to set aside its certification of the EIR and approval of the project. Metro must also undertake analysis consistent with the Court of Appeal's opinion before reapproving the project.  Metro will need to recertify the Final EIR prior to the State Parks and Recreation Commission (SPRC) review and approval of the Los Angeles State Historic Park (LASHP) General Plan Amendment (GPA).   `,
  },
  {
    question:
      `What is State Parks' Role in the LA ART EIR? `,
    answer:
      `State Parks is a responsible agency under CEQA. State Parks has discretionary approval authority over the project because a GPA to authorize the portion of the project affecting LASHP is needed.  State Parks cooperated with Metro during the EIR's preparation as a responsible agency. This included consulting with Metro during Metro's preparation of the Draft EIR and Final EIR. In particular, State Parks provided comments on the Draft EIR on those project elements and proposals affecting LASHP. State Parks determined that the project would require a GPA for LASHP. This process is noted in the EIR as are other post-EIR certification review and approval processes that will be required through the City of Los Angeles and California Department of Transportation (Caltrans). State Parks will continue to cooperate with Metro on the additional environmental review.   `,
  },
  {
    question: `Does State Parks have a role in the overall approval of this project?`,
    answer:
    `Due to the need to amend the LASHP General Plan, State Parks is a responsible agency for this project in accordance with CEQA. The SPRC is the decision-making body with approval authority over General Plan Amendments. `,
  },
  {
    question:
      `What are the next steps now in the approval process? `,
    answer:
      `The LA ART project is required to obtain a LASHP GPA. A GPA is subject to the review and approval of SPRC. SPRC approval of the LASHP GPA cannot occur prior to Metro's recertification of the LA ART Final EIR. Additional approvals may also be required from the City of Los Angeles and the Caltrans before the project is constructed. `,
  },
  {
    question:
      `Will there be opportunities to provide input and public comment during the GPA process?`,
    answer:
      `State Parks' GPA process will involve a public outreach effort to gather input to help inform the department's consideration of the project. There will be multiple opportunities for the public to comment and provide input to the proposed action. This will include a hearing at a scheduled SPRC meeting. `,
  },
  {
    question:
      `Do other gondolas or tramways pass over parks / recreational facilities?`,
    answer:
      `Yes, a number of other gondolas pass through parks and demonstrate that aerial transit can operate safely, efficiently, and in concert with their surrounding urban environments. The recently constructed Cablebus Linea 3 in Mexico City passes over Chapultepec Park, one of the oldest urban parks in the world. Cablebus Linea 1 in Mexico City passes over several soccer fields. The Teleo line in Toulouse, France, a comparable 3S gondola like the LA ART project, passes over Parc de Pech-David and flies over a high school soccer field.`,
  },
  
];

const FAQ = () => {
  return (
    <section tabIndex={0} className="border-t border-gray-300 mb-8 p-8">
      <h2 className="text-3xl yeseva font-bold text-burnt-orange">FAQ</h2>
      <h3 className="font-semibold pt-4">As of September 12, 2024 with June 23, 2025 updates</h3>
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
