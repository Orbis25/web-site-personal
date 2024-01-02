const Experiences = () => {
  const experiences = [
    {
      title: "SR Developer",
      company: "ASOCIACIÓN POPULAR DE AHORROS Y PRÉSTAMOS",
      date: "2021 - Present",
      description:
        "I work on microservices, RabbitMQ, dependency injection, Clean Architecture, web services, and the development of libraries in .NetCore and TypeScript/JavaScript. I also manage tasks using Azure DevOps.",
    },
    {
      title: "Systems Analyst",
      company: "DIRECCIÓN GENERAL DE MIGRACIÓN",
      date: "2019-2021",
      description:
        "Developing web services and web applications to share information with other public institutions. I also created portals for clients and provided solutions through internal projects from inception.",
    },
  ];
  return (
    <section className="relative mt-20 md:mt-0">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary200">Experiences</h2>
        <ul className=" grid grid-cols-1 gap-2 mt-14 md:grid-cols-2">
          {experiences.map(
            ({ title, company, date, description }, index: number) => (
              <li key={index} className=" bg-bg200/20 p-5">
                <div className="">
                  <div className="flex justify-between ">
                    <h3 className=" text-accent100">{title}</h3>
                    <p className=" opacity-50 whitespace-nowrap ">{date}</p>
                  </div>
                  <p className=" text-xl my-3">{company}</p>
                </div>

                <p className="opacity-70">{description}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
