import Image from "next/image";
import styles from "./page.module.css";
import Card from "./component/card";
import Banner from "./component/banner";
export default function Home() {
  const HosDescription = [
    "King Chulalongkorn Memorial Hospital is a public general and tertiary referral hospital in Bangkok, Thailand. It is operated by the Thai Red Cross Society, and serves as the teaching hospital for the Faculty of Medicine, Chulalongkorn University and Srisavarindhira Thai Red Cross Institute of Nursing",
    "Rajavithi Hospital is a large public hospital located in Ratchathewi District, Bangkok, Thailand. It was founded in 1951 as the Women's Hospital, and is operated by the Ministry of Public Health's Department of Medical Services. With an inpatient capacity of 1,200 beds, it is one of the largest hospitals in Thailand. It serves as a teaching hospital for the College of Medicine, Rangsit University.",
    "Thammasat University is a public research university in Thailand with campuses in Tha Phra Chan, Rangsit, Pattaya and Lampang Province. As of 2019, Thammasat University has over 33,000 students enrolled in 33 faculties, colleges, institutes and 2,700 academic staff. Thammasat is Thailand's second oldest university.",
  ];

  return (
    <div>
      <div className=''>
        <Banner />
      </div>
      <div className='grid grid-cols-3 gap-6 px-10'>
        <Card
          hospitalName={"Chulalongkorn Hospital"}
          hospitalPicUrl={"/chula.jpg"}
          hospitalDescription={HosDescription[0]}
        />
        <Card
          hospitalName={"Rajavithi Hospital"}
          hospitalPicUrl={"/rajavithi.jpg"}
          hospitalDescription={HosDescription[1]}
        />
        <Card
          hospitalName={"Thammasat University Hospital"}
          hospitalPicUrl={"/thammasat.jpg"}
          hospitalDescription={HosDescription[2]}
        />
      </div>
    </div>
  );
}
