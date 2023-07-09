import React, { useState } from "react";

const Entry = ({ date, changeActiveModal, activeDates, changeLimitCoord }) => {
  const [timeVis, setTimeVis] = useState(false);

  const timeClick = function (event, time) {
    if (activeDates.length < 2) {
      changeActiveModal(true, time);
      document.body.classList.add("lock");
    } else {
      event.stopPropagation();
      event.code === "Enter"
        ? changeLimitCoord({ x: 100, y: 20 })
        : changeLimitCoord({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div className="entry">
      <h2
        className="entry__header"
        onClick={() => setTimeVis((prev) => !prev)}
        onKeyDown={(e) => e.code === "Enter" && setTimeVis((prev) => !prev)}
        tabIndex="0"
      >
        {date[0].date.toLocaleString("ru-RU", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </h2>
      <div
        className={`entry__wrapper${!timeVis ? "" : " entry__wrapper--vis"}`}
      >
        {date.map((time) => (
          <div
            className="entry__time"
            onClick={(event) => timeClick(event, time)}
            onKeyDown={(event) =>
              event.code === "Enter" && timeClick(event, time)
            }
            tabIndex="0"
            key={time.id}
          >
            {time.time.substring(0, 5)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entry;
