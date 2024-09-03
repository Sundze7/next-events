import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EvenList(props) {
  //props destructioning, so we dont use props.item. We simply just use items, as we have done in the return section.
  //   The key name items is up to us, so we could use any other name
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EvenList;
