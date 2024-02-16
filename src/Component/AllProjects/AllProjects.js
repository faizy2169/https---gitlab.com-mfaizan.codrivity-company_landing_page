import React, { useEffect } from 'react';
import projectPic from "../../assets/project1.png";
import projectPic1 from "../../assets/projectPic2.png";
import projectPic2 from "../../assets/project3.png";
import projectPic3 from "../../assets/project4.png";
import projectPic4 from "../../assets/project5.png"; 
import projectPic5 from "../../assets/project6.png";
import {useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
const AllProjects = () => {
    const leftElementRef = React.useRef();
    useEffect(()=>{
        const srLeft = ScrollReveal();
        const configLeft = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true,
        };
        srLeft.reveal(leftElementRef.current, configLeft);
    },[])
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,1100);
    }, [location])
    return (
        <div className='container' style={{maxWidth: "1600px"}} ref={leftElementRef}>
            <h1 className='text-center my-md-5 my-2 project-caption'>Our AlI Projects</h1>
            <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6">
                    <img src={projectPic} className='img-fluid our-project-img' alt="project-1" />
                 </div>
                <div className="col-lg-6 py-lg-0 py-2">
                    <h3 className='our-project-title '>Fusion 3D Project</h3>
                    <p className='project-summary'>Fusion3D sought to automate a significant portion of their customer support system. To achieve this, they decided to implement a chatbot, specifically the LLama 13 B version, and integrate it with the Happy Fox customer support system. The chatbot was fine-tuned using a dataset of 600,000 resolved tickets to ensure it was tailored to the company's specific needs. All deployment processes were executed through Amazon Web Services (AWS) and its suite of cloud services.</p>
                </div>
            </div>
            <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6 project-order py-lg-0 py-2">
                    <h3 className='our-project-title'>CDS Project <span style={{fontSize: "1rem"}}>(Candidate Ranking System)</span></h3>
                    <p className='project-summary'>Cariglonbaldataservices Company, a progressive data service provider, has been a partner in three ongoing projects aimed at enhancing the recruitment process. A standout initiative was the development and deployment of an interview simulator hosted on AWS. This simulator is designed to evaluate language proficiency in English, Spanish, and Dutch. Furthermore, it creates a structured candidate database based on language abilities. The system not only ingests candidate information and CVs but also utilizes a predictive index test to rank applicants. This sophisticated ranking assists in placing candidates within the client's organization, ensuring a streamlined and efficient hiring process.</p>
                </div>
                <div className="col-lg-6 d-flex justify-content-end ">
                    <img  src={projectPic1} className='img-fluid text-right our-project-img' alt="project-2" />
                </div>
            </div>
            <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6">
                    <img  src={projectPic2} className='img-fluid our-project-img' alt="project-3" /> 
                </div>
                <div className="col-lg-6 py-lg-0 py-2">
                    <h3 className='our-project-title'>360 Global Transportation</h3>
                    <p className='project-summary'>360 Transportation, a leading logistics provider, embarked on an ambitious project to revolutionize its operations by deploying a comprehensive 3PL (Third-Party Logistics) Warehouse Automation System. To ensure the highest standards of efficiency and integration, the project leveraged a range of industry-leading tools and platforms, including Shortly API, Zoho Inventory, Quickbooks, Zoho Creator, and Salesforce. This custom solution was meticulously designed to cater to the unique needs of 360 Transportation and ensure seamless operations in today's dynamic logistics landscape.</p>
                </div>
            </div>
            <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6 project-order py-lg-0 py-2">
                    <h3 className='our-project-title'>IKB.ai Project</h3>
                    <p className='project-summary'>IKB.ai set forth to transform its client data management and operational efficiency by deploying an advanced AI assistant powered by Azure services. The project primarily hinged on leveraging Azure's Cognitive Search (with integration from OpenAI) tailored for enterprise applications using the RAG (Red, Amber, Green) system. A core aspect of the initiative was its architecture and seamless integration with MS Team to ensure collaborative and real-time access to insights.</p>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <img  src={projectPic3} className='img-fluid text-right our-project-img' alt="project-4" />
                </div>
            </div>
            <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6">
                    <img  src={projectPic1} className='img-fluid our-project-img' alt="" /> 
                </div>
                <div className="col-lg-6 py-lg-0 py-2">
                    <h3 className='our-project-title'>CDS Project <span style={{fontSize: "1rem"}}>(Papiamentu Language Transcriber)</span></h3>
                    <p className='project-summary'>Cariglobaldataservices, in collaboration with our team, has embarked on an ambitious project to develop a transcriber specifically tailored for the Papiamentu language. Recognizing the void in the market, especially with tech giants like Google not venturing into this space, the initiative aims to create a tool that can accurately transcribe spoken Papiamentu. The challenge lies not just in the development but also in the meticulous data gathering process. With Cariglobaldataservices leading the data acquisition front, the focus remains on ensuring data redundancy is minimized and there's rich diversity in the audio dataset to train the system effectively. As an ongoing project, patience and continuous refinement are key to achieving high levels of accuracy.</p>
                </div>
            </div>
             <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6 project-order py-lg-0 py-2">
                    <h3 className='our-project-title'>Growth Automation Services</h3>
                    <p className='project-summary'>Growth Automation, a forward-thinking enterprise, embarked on the journey to optimize its recruitment processes. The project aimed to implement a CV skimming tool equipped with communication abilities. Leveraging platforms such as Make.com, Airtable, GCP (Google Cloud Platform), and SharePoint, the initiative promised to streamline the recruitment workflow, ensuring efficiency and precision in candidate selection.</p>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <img  src={projectPic4} className='img-fluid text-right our-project-img' alt="project-5" />
                </div>
            </div>
            <div className="row my-lg-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6">
                    <img  src={projectPic5} className='img-fluid our-project-img' alt="" /> 
                </div>
                <div className="col-lg-6 py-lg-0 py-2">
                    <h3 className='our-project-title'>Robot Sea Monster</h3>
                    <p className='project-summary'>Robotseamonstersgames.com, a reputed gaming client, partnered with us to embark on an innovative game development project in Unity, titled "Harker's Escape". As subcontractors, our primary responsibility was to harness the potential of GPT (Generative Pre-trained Transformer) to introduce dynamic storytelling into the game. By integrating GPT, the aim was to allow the game's storyline and outcomes to evolve based on player interest and game direction. One of the game's groundbreaking features would be the ability for NPCs (Non-Player Characters) to engage with players via speech. Currently in its R&D phase, the project is in its infancy, testing a limited set of possibilities.</p>
                </div>
            </div>
            <div className="row my-md-5 my-3 py-md-4 py-1 align-items-center">
                <div className="col-lg-6 project-order py-lg-0 py-2">
                    <h3 className='our-project-title'>CDS Project <span style={{fontSize: "1rem"}}>(Call Monitoring Software)</span></h3>
                    <p className='project-summary'>Cariglobaldataservices, a leading data service provider, successfully deployed an advanced call monitoring software tailored for analyzing customer support calls in call centers. This state-of-the-art system offers multi-faceted analysis, delivering in-depth insights into both CSR and customer behaviors. By identifying persistent issues, conducting sentiment analysis, and maintaining a comprehensive database for each call, the software revolutionizes the way call centers operate and understand their interactions. Hosted on a dedicated workstation powered by two 4090's, and capable of processing 2,660 audios every 8 hours, this system is a testament to cutting-edge technology and innovation. Furthermore, with a static IP connection established at the Islamabad office and the implementation of CI/CD pipelines with Kubernetes, the system promises unparalleled security and a seamless development journey.</p>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <img src={projectPic1} className='img-fluid text-right our-project-img' alt="project-6" />
                </div>
            </div>
        </div>
    );
};

export default AllProjects;