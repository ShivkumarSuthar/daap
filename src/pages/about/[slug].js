import { useRouter } from "next/router";
import Link from "next/link";
import About from "./AboutPage";

const aboutData = {
    company: {
        title: "About Our Company",
        content: "We are a leading IT solutions provider with years of experience."
    },
    team: {
        title: "Meet Our Team",
        content: "Our team consists of skilled professionals dedicated to innovation."
    },
    history: {
        title: "Our History",
        content: "We have been delivering top-notch services since our inception."
    }
};

const AboutPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <p>Loading...</p>;
    }

    const pageData = aboutData[slug] || { title: "Page Not Found", content: "Sorry, this section does not exist." };

    return (
       <>
        <About/>
       </>
    );
};

export default AboutPage;
