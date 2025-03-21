
import React from "react";
import HandIcon from "../assets/HandIcon";

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: "Healthcare",
      description:
        "Enabling clear communication between healthcare providers and deaf or hard-of-hearing patients, improving care quality and outcomes.",
      color: "bg-blue-50",
      delay: "0"
    },
    {
      title: "Education",
      description:
        "Helping deaf students participate more actively in classrooms by translating sign language to speech for teachers and classmates.",
      color: "bg-green-50",
      delay: "150"
    },
    {
      title: "Customer Service",
      description:
        "Making customer support accessible to everyone by facilitating communication between service representatives and deaf customers.",
      color: "bg-purple-50",
      delay: "300"
    },
    {
      title: "Public Services",
      description:
        "Improving accessibility in government offices, police stations, and other public services for deaf community members.",
      color: "bg-amber-50",
      delay: "450"
    },
    {
      title: "Workplace Inclusion",
      description:
        "Creating more inclusive work environments by enabling seamless communication between deaf and hearing colleagues.",
      color: "bg-teal-50",
      delay: "600"
    },
    {
      title: "Social Interactions",
      description:
        "Breaking down communication barriers in social settings, allowing for more natural interactions between deaf and hearing individuals.",
      color: "bg-rose-50",
      delay: "750"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-signspeak-gray-light">
      <div className="section-container">
        <div className="section-title">
          <h2>Real-World Applications</h2>
          <p>SignSpeak creates meaningful impact across various settings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="use-case-card" 
              style={{ animationDelay: `${useCase.delay}ms` }}
              data-aos="fade-up"
              data-aos-delay={useCase.delay}
            >
              <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${useCase.color} opacity-50`}></div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-signspeak-gray-dark">{useCase.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <HandIcon className="mx-auto mb-6 animate-float" />
          <h3 className="text-2xl font-semibold mb-3">
            Transforming Lives Through Technology
          </h3>
          <p className="text-signspeak-gray-dark max-w-2xl mx-auto mb-8">
            SignSpeak goes beyond simple translation—it creates connections, builds bridges, and transforms lives by making communication accessible to everyone.
          </p>
          <a href="#impact" className="btn-primary">
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
