import { getFeaturedEvents } from "../helpers/api-util";
import EvenList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <EvenList items={props.events} />
    </div>
  );
}

// pre-rendering usong static regenration
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, // regenerate page after every half hr
  };
}

export default HomePage;
